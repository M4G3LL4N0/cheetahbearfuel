"use client";

import React from "react";
import { Metadata } from "next";
import Loading from "@/components/Loading";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
          PREMIUM PERFORMANCE FORMULA
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">
          Energy, focus, and momentum for builders who move fast.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          CheetahBearFuel is a premium performance-fuel concept built for sharp mornings,
          deep work, and fast execution.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => {
              // TODO: Implement actual early access flow
              window.alert("Coming soon");
            }}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Get Early Access
          </button>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("features");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Features
          </button>
        </div>

        <div id="features" className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Clean Performance",
              text: "Built for stable energy, sharper focus, and less crash.",
            },
            {
              title: "Founder Rhythm",
              text: "Designed around long work blocks, meetings, and fast execution.",
            },
            {
              title: "Premium Brand Feel",
              text: "Luxury performance aesthetics with a strong consumer identity.",
            },
          ].map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
