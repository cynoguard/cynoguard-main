import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/sanity/queries";
import { PostCard } from "@/components/blog/PostCard";

export const revalidate = 60;

const categories = ["All", "Bot Defense", "Threat Intel", "Case Studies", "Product"];

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0] ?? null;
  const remainingPosts = posts.slice(1);

  const featuredInitials = featuredPost?.author?.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("") ?? "??";

  const featuredDate = featuredPost?.publishedAt
    ? new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="bg-[#020812] min-h-screen">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 border-b border-gray-800 pt-24 pb-12 md:pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">
            // Blog
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Thought leadership on bot detection, abuse defense, and identity risk.
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Field notes, product guidance, and research updates built for security teams protecting high-growth brands.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-gray-800 bg-gray-900/60 px-4 py-2 text-sm text-gray-400 hover:border-green-800 hover:text-green-400 transition-colors cursor-pointer font-mono"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Featured post */}
        {featuredPost && (
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 hover:border-green-800 transition-all mb-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="rounded-xl bg-gradient-to-br from-green-950/60 via-gray-900 to-[#060d14] border border-green-900/30 p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-dark opacity-30" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/40" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/40" />
                  <p className="text-xs uppercase tracking-[0.2em] text-green-400 font-mono relative z-10">
                    // Featured
                  </p>
                  <h2 className="mt-6 text-3xl font-semibold relative z-10">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-sm text-gray-400 font-mono relative z-10">
                    {featuredPost.category} · {featuredPost.readTime}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                <p className="text-sm font-semibold text-gray-500 font-mono">
                  {featuredDate}
                </p>
                <p className="text-xl text-gray-300">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="h-10 w-10 rounded-full bg-green-950/60 border border-green-900/40 flex items-center justify-center text-green-400 font-bold font-mono text-xs">
                    {featuredInitials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-300">
                      {featuredPost.author?.name}
                    </p>
                    <p className="text-xs">{featuredPost.author?.role}</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-fit bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40"
                >
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read the story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Post grid */}
        {remainingPosts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-mono py-12">
            // No posts published yet. Add content in Sanity Studio.
          </p>
        )}
      </section>

      {/* Newsletter */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-green-900/40 bg-green-950/20 px-8 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/40" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500/40" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-green-500 font-mono">
                // Newsletter
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Get the bot defense briefing every month.
              </h2>
              <p className="mt-3 text-gray-400">
                Analysis, field lessons, and new research on stopping automation abuse.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-lg border border-gray-700 bg-gray-800/60 px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-green-600 transition-colors font-mono"
                />
                <Button className="h-11 bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-gray-600 font-mono">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}