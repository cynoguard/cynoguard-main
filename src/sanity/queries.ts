// ─── Centralised GROQ queries ─────────────────────────────────────
// All Sanity data fetching goes through here.
// Import these into pages — never write inline GROQ.

import { client } from "./client";

// ── Types ─────────────────────────────────────────────────────────

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author: {
    name: string;
    role: string;
    image?: { asset: { _ref: string } };
  };
  body: unknown[]; // PortableText blocks
}

// ── Fetch all posts (list view — no body) ─────────────────────────
export async function getAllPosts(): Promise<SanityPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    "category": category->title,
    mainImage,
    author-> {
      name,
      role,
      image
    }
  }`;

  return client.fetch(query, {}, { next: { tags: ["posts"] } });
}

// ── Fetch single post by slug (full body included) ────────────────
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    "category": category->title,
    mainImage,
    author-> {
      name,
      role,
      image
    },
    body
  }`;

  return client.fetch(query, { slug }, { next: { tags: [`post-${slug}`] } });
}

// ── Fetch all slugs (for generateStaticParams) ────────────────────
export async function getAllSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  return client.fetch(query);
}

// ── Fetch related posts (same category, excluding current) ────────
export async function getRelatedPosts(
  currentSlug: string,
  category: string
): Promise<SanityPost[]> {
  const query = `*[_type == "post" && slug.current != $currentSlug && category->title == $category] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readTime,
    "category": category->title,
    author-> { name, role }
  }`;

  return client.fetch(
    query,
    { currentSlug, category },
    { next: { tags: ["posts"] } }
  );
}