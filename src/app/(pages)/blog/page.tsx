import Link from "next/link";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "Detecting Headless Browsers Without Breaking UX",
  excerpt:
    "A practical playbook for catching stealth automation while keeping fast checkout paths clean for real customers.",
  slug: "detecting-headless-bots",
  date: "Jan 18, 2026",
  readTime: "8 min read",
  category: "Bot Defense",
  author: "Amina Lewis",
  role: "Threat Research",
};

const posts = [
  {
    title: "Behavioral Signals That Separate Bots From Power Users",
    excerpt:
      "Map intent from motion, timing, and interaction depth without punishing your most valuable users.",
    slug: "behavioral-signals",
    date: "Jan 08, 2026",
    readTime: "6 min read",
    category: "Threat Intel",
    author: "Jonas Kim",
    role: "Detection Lead",
  },
  {
    title: "Instrumenting Login Flows Against Credential Stuffing",
    excerpt:
      "Layer progressive risk checks to stop account takeover without turning MFA into a wall.",
    slug: "credential-stuffing",
    date: "Dec 19, 2025",
    readTime: "7 min read",
    category: "Case Studies",
    author: "Sasha Patel",
    role: "Security PM",
  },
  {
    title: "The New Bot Economy: Residential Proxies and Device Farms",
    excerpt:
      "Why IP reputation alone no longer works and what to watch in 2026.",
    slug: "bot-economy",
    date: "Dec 05, 2025",
    readTime: "5 min read",
    category: "Threat Intel",
    author: "Marcus Reed",
    role: "Intel Analyst",
  },
  {
    title: "Measuring False Positives in Bot Mitigation",
    excerpt:
      "A metrics framework to keep conversion up while blocking abuse.",
    slug: "false-positives",
    date: "Nov 21, 2025",
    readTime: "6 min read",
    category: "Product",
    author: "Amina Lewis",
    role: "Threat Research",
  },
  {
    title: "From Rate Limits to Risk Scores: A Pragmatic Stack",
    excerpt:
      "How SMB teams can build layered defenses without a giant security budget.",
    slug: "risk-scores",
    date: "Nov 02, 2025",
    readTime: "9 min read",
    category: "Bot Defense",
    author: "Riley Chen",
    role: "Platform Security",
  },
];

const categories = [
  "All",
  "Bot Defense",
  "Threat Intel",
  "Case Studies",
  "Product",
];

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-wide text-slate-500">
              CynoGuard Blog
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
                  Thought leadership on bot detection, abuse defense, and
                  identity risk.
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  Field notes, product guidance, and research updates built for
                  security teams protecting high growth brands.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-600"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Featured
                </p>
                <h2 className="mt-6 text-3xl font-semibold">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-sm text-slate-300">
                  {featuredPost.category} · {featuredPost.readTime}
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-slate-500">
                  {featuredPost.date}
                </p>
                <p className="text-xl text-slate-700">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-semibold text-slate-700">
                      {featuredPost.author}
                    </p>
                    <p>{featuredPost.role}</p>
                  </div>
                </div>
                <Button asChild className="w-fit bg-slate-900 text-white">
                  <Link href={`/blog/${featuredPost.slug}`}>Read the story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="h-8 w-8 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-semibold text-slate-700">
                      {post.author}
                    </p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Subscribe to Newsletter
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Get the bot defense briefing every month.
              </h2>
              <p className="mt-3 text-slate-300">
                Analysis, field lessons, and new research on stopping automation
                abuse in high growth environments.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-md border border-slate-700 bg-slate-800 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="h-11 bg-white text-slate-900 hover:bg-slate-200">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
