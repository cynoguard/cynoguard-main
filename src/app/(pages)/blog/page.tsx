import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredPost = {
  title: "Detecting Headless Browsers Without Breaking UX",
  excerpt: "A practical playbook for catching stealth automation while keeping fast checkout paths clean for real customers.",
  slug: "detecting-headless-bots",
  date: "Jan 18, 2026",
  readTime: "8 min read",
  category: "Bot Defense",
  author: "Amina Lewis",
  role: "Threat Research",
};

const posts = [
  { title: "Behavioral Signals That Separate Bots From Power Users", excerpt: "Map intent from motion, timing, and interaction depth without punishing your most valuable users.", slug: "behavioral-signals", date: "Jan 08, 2026", readTime: "6 min read", category: "Threat Intel", author: "Jonas Kim", role: "Detection Lead" },
  { title: "Instrumenting Login Flows Against Credential Stuffing", excerpt: "Layer progressive risk checks to stop account takeover without turning MFA into a wall.", slug: "credential-stuffing", date: "Dec 19, 2025", readTime: "7 min read", category: "Case Studies", author: "Sasha Patel", role: "Security PM" },
  { title: "The New Bot Economy: Residential Proxies and Device Farms", excerpt: "Why IP reputation alone no longer works and what to watch in 2026.", slug: "bot-economy", date: "Dec 05, 2025", readTime: "5 min read", category: "Threat Intel", author: "Marcus Reed", role: "Intel Analyst" },
  { title: "Measuring False Positives in Bot Mitigation", excerpt: "A metrics framework to keep conversion up while blocking abuse.", slug: "false-positives", date: "Nov 21, 2025", readTime: "6 min read", category: "Product", author: "Amina Lewis", role: "Threat Research" },
  { title: "From Rate Limits to Risk Scores: A Pragmatic Stack", excerpt: "How SMB teams can build layered defenses without a giant security budget.", slug: "risk-scores", date: "Nov 02, 2025", readTime: "9 min read", category: "Bot Defense", author: "Riley Chen", role: "Platform Security" },
];

const categories = ["All", "Bot Defense", "Threat Intel", "Case Studies", "Product"];

export default function BlogIndexPage() {
  return (
    <div className="bg-[#020812] min-h-screen">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 border-b border-gray-800 pt-24 pb-12 md:pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500 mb-3 font-mono">// Blog</p>
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
                <span key={category} className="rounded-full border border-gray-800 bg-gray-900/60 px-4 py-2 text-sm text-gray-400 hover:border-green-800 hover:text-green-400 transition-colors cursor-pointer font-mono">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-8 hover:border-green-800 transition-all">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-gradient-to-br from-green-950/60 via-gray-900 to-[#060d14] border border-green-900/30 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dark opacity-30" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/40" />
                <p className="text-xs uppercase tracking-[0.2em] text-green-400 font-mono relative z-10">// Featured</p>
                <h2 className="mt-6 text-3xl font-semibold relative z-10">{featuredPost.title}</h2>
                <p className="mt-4 text-sm text-gray-400 font-mono relative z-10">{featuredPost.category} · {featuredPost.readTime}</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              <p className="text-sm font-semibold text-gray-500 font-mono">{featuredPost.date}</p>
              <p className="text-xl text-gray-300">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="h-10 w-10 rounded-full bg-green-950/60 border border-green-900/40 flex items-center justify-center text-green-400 font-bold font-mono text-xs">
                  {featuredPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-300">{featuredPost.author}</p>
                  <p className="text-xs">{featuredPost.role}</p>
                </div>
              </div>
              <Button asChild className="w-fit bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40">
                <Link href={`/blog/${featuredPost.slug}`}>Read the story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Post grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group rounded-xl border border-gray-800 bg-gray-900/60 p-6 transition-all hover:-translate-y-0.5 hover:border-green-800 hover:shadow-lg hover:shadow-green-900/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-600 font-mono">
                  <span className="text-green-500">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="h-8 w-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 font-bold font-mono text-[10px]">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-400">{post.author}</p>
                    <p className="text-xs">{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-green-900/40 bg-green-950/20 px-8 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/40" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500/40" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-green-500 font-mono">// Newsletter</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Get the bot defense briefing every month.</h2>
              <p className="mt-3 text-gray-400">Analysis, field lessons, and new research on stopping automation abuse.</p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="you@company.com"
                  className="h-11 flex-1 rounded-lg border border-gray-700 bg-gray-800/60 px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-green-600 transition-colors font-mono" />
                <Button className="h-11 bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40">Subscribe</Button>
              </div>
              <p className="mt-3 text-xs text-gray-600 font-mono">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}