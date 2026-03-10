import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { JSX } from "react";

const posts = [
  { title: "Detecting Headless Browsers Without Breaking UX", slug: "detecting-headless-bots", date: "Jan 18, 2026", readTime: "8 min read", category: "Bot Defense", author: "Amina Lewis", role: "Threat Research" },
  { title: "Behavioral Signals That Separate Bots From Power Users", slug: "behavioral-signals", date: "Jan 08, 2026", readTime: "6 min read", category: "Threat Intel", author: "Jonas Kim", role: "Detection Lead" },
  { title: "Instrumenting Login Flows Against Credential Stuffing", slug: "credential-stuffing", date: "Dec 19, 2025", readTime: "7 min read", category: "Case Studies", author: "Sasha Patel", role: "Security PM" },
  { title: "The New Bot Economy: Residential Proxies and Device Farms", slug: "bot-economy", date: "Dec 05, 2025", readTime: "5 min read", category: "Threat Intel", author: "Marcus Reed", role: "Intel Analyst" },
  { title: "Measuring False Positives in Bot Mitigation", slug: "false-positives", date: "Nov 21, 2025", readTime: "6 min read", category: "Product", author: "Amina Lewis", role: "Threat Research" },
  { title: "From Rate Limits to Risk Scores: A Pragmatic Stack", slug: "risk-scores", date: "Nov 02, 2025", readTime: "9 min read", category: "Bot Defense", author: "Riley Chen", role: "Platform Security" },
];

const postBody: Record<string, JSX.Element> = {
  "detecting-headless-bots": (<><p>Modern automation blends in. Headless tooling now spoofs common browser fingerprints, rotates device profiles, and mimics real traffic velocity. Blocking on a single signal is noisy and fragile. The goal is to raise the cost of abuse while preserving fast paths for legitimate customers.</p><h2>1. Start with behavior, not headers</h2><p>Behavioral baselines give you more durable separation between bots and power users. Model interaction depth, scroll velocity, and timing consistency at the session level rather than looking at isolated requests.</p><h2>2. Layer friction only when risk rises</h2><p>Progressive checks let you add friction without punishing clean traffic. For example, prompt a lightweight challenge after a high velocity burst or when a device suddenly switches locale mid session.</p><h2>3. Track device reuse across identities</h2><p>Large scale automation reuses tooling. If a device shows up across many accounts with similar action pacing, treat it as a high confidence automation cluster.</p><ul><li>Alert on sessions with zero pointer movement and rapid form fill.</li><li>Flag accounts that complete checkout in under 12 seconds.</li><li>Baseline time between steps for the top 10 conversion paths.</li></ul></>),
  "behavioral-signals": (<><p>High intent customers can look automated. The difference is the depth of their behavior. Real users explore multiple content lanes and reveal variability in timing, even when they move quickly.</p><h2>Signals worth modeling</h2><ul><li>Scroll depth distribution and pauses.</li><li>Input correction rate and copy paste usage.</li><li>Switching between tabs or windows mid flow.</li></ul><p>When you normalize these features per segment, you can protect the highest value user cohorts without letting automation run free.</p></>),
  "credential-stuffing": (<><p>Credential stuffing is all about scale. Attackers test leaked lists against login flows with high throughput and low noise. You can slow this down without forcing every user into heavy MFA.</p><h2>Layered defenses that work</h2><ol><li>Use risk scoring to gate passwordless options.</li><li>Apply low friction step ups for new device fingerprints.</li><li>Throttle login attempts by account, not just IP.</li></ol><p>The most effective programs show users the minimum friction needed to stay safe and keep conversion stable.</p></>),
  "bot-economy": (<><p>Bot operators now combine residential proxy pools, anti-detect browsers, and low-cost device farms to evade simple IP and ASN blocks. Defenses need to focus on campaign-level behavior, not single requests.</p><h2>What changed in the attacker stack</h2><ul><li>Residential IP rotation on every high-risk step.</li><li>Device profile randomization to avoid static fingerprint bans.</li><li>Hybrid human-plus-automation solve services for challenges.</li></ul><p>Teams should prioritize link analysis across sessions: repeated flow paths, shared timing signatures, and identity graph overlap.</p></>),
  "false-positives": (<><p>Blocking abuse is only half the job. If controls reject real customers, revenue loss can exceed fraud savings. False-positive management needs first-class metrics and owner accountability.</p><h2>Core metrics to track weekly</h2><ol><li>Challenge rate by journey and customer tier.</li><li>Challenge fail rate for known good users.</li><li>Recovery conversion after step-up or block events.</li></ol><p>Start with dashboards segmented by traffic source and device family so you can spot over-blocking patterns early.</p></>),
  "risk-scores": (<><p>Most teams start with rate limits, then add point controls for login, signup, and checkout abuse. The practical next step is a shared risk model that adapts enforcement by context.</p><h2>Build a lightweight, layered stack</h2><ul><li>Per-endpoint velocity controls for immediate containment.</li><li>Session-level scoring from behavior and device stability.</li><li>Identity-level history to persist trust and suspicion.</li></ul><p>Use score bands to trigger actions: allow, soft challenge, hard challenge, or block. This keeps controls explainable for support teams.</p></>),
};

type PageParams = { slug: string } | Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const resolvedParams = await params;
  const post = posts.find((item) => item.slug === resolvedParams.slug);
  if (!post) notFound();

  const content = postBody[post.slug] ?? <p>More analysis is coming soon. Check back for updates.</p>;
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 4);

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
              <span className="rounded-full border border-green-900/60 bg-green-950/30 px-3 py-1 text-green-400 text-xs">{post.category}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="h-10 w-10 rounded-full bg-green-950/60 border border-green-900/40 flex items-center justify-center text-green-400 font-bold font-mono text-xs">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-300">{post.author}</p>
                <p>{post.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="prose prose-invert max-w-none text-gray-400 prose-headings:text-white prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed prose-li:text-gray-400 prose-ul:space-y-2 prose-ol:space-y-2">
            {content}
          </article>
          <aside className="space-y-5">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono mb-4">// Key takeaways</p>
              <ul className="space-y-3">
                {["Behavior signals are harder to spoof than headers.", "Progressive friction keeps conversion stable.", "Cluster analysis exposes repeat automation."].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-500 font-mono mt-0.5">›</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono mb-3">// Newsletter</p>
              <p className="text-sm text-gray-400 mb-4">Get monthly research updates on bot defense.</p>
              <Button className="w-full bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/40">Join the newsletter</Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="border-t border-gray-800 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">More from CynoGuard</h2>
            <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
              <Link href="/blog">View all posts <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`}
                className="group rounded-xl border border-gray-800 bg-gray-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-green-800 hover:shadow-md">
                <p className="text-xs uppercase tracking-[0.2em] text-green-500 font-mono">{item.category}</p>
                <h3 className="mt-2 text-base font-semibold text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 font-mono">{item.date} · {item.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}