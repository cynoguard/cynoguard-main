import Link from "next/link";
import type { SanityPost } from "@/sanity/queries";

interface PostCardProps {
  post: SanityPost;
}

// Matches the exact existing card UI in blog/page.tsx
export function PostCard({ post }: PostCardProps) {
  const initials = post.author?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("") ?? "??";

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl border border-gray-800 bg-gray-900/60 p-6 transition-all hover:-translate-y-0.5 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-600 font-mono">
          <span className="text-green-500">{post.category}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="h-8 w-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 font-bold font-mono text-[10px]">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-400">{post.author?.name}</p>
            <p className="text-xs">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}