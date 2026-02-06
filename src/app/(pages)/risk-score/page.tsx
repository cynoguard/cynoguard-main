"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Activity, AlertTriangle, Gauge, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const THRESHOLD = 40;

const Page = () => {
  const [score, setScore] = useState(32);

  const { isHigh, statusText, statusTone, statusRing, statusBg, advice, microTip } = useMemo(() => {
    const high = score > THRESHOLD;
    return {
      isHigh: high,
      statusText: high ? "Risk is high" : "Risk is low",
      statusTone: high ? "text-rose-700" : "text-emerald-700",
      statusRing: high ? "ring-rose-200" : "ring-emerald-200",
      statusBg: high ? "bg-rose-50" : "bg-emerald-50",
      advice: high
        ? "Immediate action recommended. Lock down exposed access and review recent logins." 
        : "Posture looks solid. Keep monitoring for unusual spikes or new domains.",
      microTip: high
        ? "Small thing: rotate API keys tied to critical services today."
        : "Small thing: enable MFA on any newly added team accounts.",
    };
  }, [score]);

  const signals = useMemo(
    () => [
      { label: "Impersonation risk", value: Math.min(95, score + 18) },
      { label: "Bot traffic", value: Math.max(8, score - 12) },
      { label: "Credential exposure", value: Math.min(88, Math.max(12, score + 6)) },
    ],
    [score]
  );

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-16 right-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Risk Score
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Real-time exposure confidence
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl">
              Adjust the score to simulate threat posture. The panel updates instantly and flags when risk passes 40%.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur px-6 py-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Risk score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-slate-900">{score}</span>
                  <span className="text-base text-slate-500">%</span>
                </div>
              </div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <Gauge className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span>0%</span>
                <span>{THRESHOLD}% threshold</span>
                <span>100%</span>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${isHigh ? "bg-rose-500" : "bg-emerald-500"}`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <input
                aria-label="Risk score"
                type="range"
                min={0}
                max={100}
                value={score}
                onChange={(event) => setScore(Number(event.target.value))}
                className="mt-4 w-full accent-slate-900"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="bg-slate-900 text-white hover:bg-slate-800">Run full scan</Button>
              <Button variant="outline">Export report</Button>
              <Button variant="ghost" asChild className="text-slate-600">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>

          <div className={`rounded-3xl border ${statusRing} ${statusBg} px-6 py-8 shadow-sm`}>
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ${statusRing} ring-1`}>
                {isHigh ? (
                  <AlertTriangle className="h-6 w-6 text-rose-600" />
                ) : (
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                )}
              </div>
              <div>
                <p className="text-sm text-slate-500">Status</p>
                <h2 className={`text-2xl font-semibold ${statusTone}`}>{statusText}</h2>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-700">{advice}</p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-600">
              {microTip}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Signal snapshot</span>
                <Activity className="h-4 w-4" />
              </div>
              {signals.map((signal) => (
                <div key={signal.label}>
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{signal.label}</span>
                    <span className="font-medium">{signal.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-slate-900"
                      style={{ width: `${signal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Identity coverage",
              value: "92%",
              description: "Monitored domains and social handles.",
            },
            {
              title: "Alert latency",
              value: "3.8m",
              description: "Average time to surface new signals.",
            },
            {
              title: "Autofix jobs",
              value: "14",
              description: "Automated takedown workflows in progress.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
