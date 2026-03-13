/* eslint-disable @typescript-eslint/no-explicit-any */
import { RichText } from "@/components/blog/RichText";
import { Button } from "@/components/ui/button";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/sanity/queries";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ISR — revalidates when Sanity webhook fires
export const revalidate = 60;

// Pre-generate all blog post routes at build time (SEO-ready)
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

// Generate per-post metadata from Sanity data
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | CynoGuard Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const related = await getRelatedPosts(slug, post.category ?? "");

  const initials = post.author?.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("") ?? "??";

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
      })
    : "";

  return (
    <div className="bg-[#020812] min-h-screen">
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 border-b border-gray-800 pt-24 pb-12 md:pt-32">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors mb-8 font-mono group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to blog
          </Link>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 font-mono">
              <span className="rounded-full border border-green-900/60 bg-green-950/30 px-3 py-1 text-green-400 text-xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />{date}
              </span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="h-10 w-10 rounded-full bg-green-950/60 border border-green-900/40 flex items-center justify-center text-green-400 font-bold font-mono text-xs">
                {initials}
              </div>
              <div>
                <p className="font-semibold text-gray-300">{post.author?.name}</p>
                <p>{post.author?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">

          {/* Article — rendered from Sanity PortableText */}
          <article>
            {post.body ? (
              <RichText value={post.body as any} />
            ) : (
              <p className="text-gray-500 font-mono">No content yet.</p>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono mb-4">// Key takeaways</p>
              <ul className="space-y-3">
                {[
                  "Behaviour signals are harder to spoof than headers.",
                  "Progressive friction keeps conversion stable.",
                  "Cluster analysis exposes repeat automation.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-500 font-mono mt-0.5">›</span>{t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono mb-3">// Subscribe</p>
              <p className="text-sm text-gray-500 mb-4">Get monthly research updates on bot defence.</p>
              <Button className="w-full bg-green-600 hover:bg-green-500 text-white">
                Join the newsletter
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
          <div className="border-t border-gray-800 pt-10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-green-500 font-mono">// Related posts</p>
              <Button asChild variant="ghost" className="text-gray-500 hover:text-green-400 font-mono text-sm">
                <Link href="/blog">View all posts</Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => {
                const relDate = item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                  : "";
                return (
                  <Link key={item._id} href={`/blog/${item.slug}`}
                    className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:-translate-y-0.5 hover:border-green-800 transition-all">
                    <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono">{item.category}</p>
                    <h3 className="mt-3 text-base font-semibold text-white hover:text-green-400 transition-colors">{item.title}</h3>
                    <p className="mt-2 text-xs text-gray-600 font-mono">{relDate} · {item.readTime}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}