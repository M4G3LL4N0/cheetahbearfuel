import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cheetah Bear Fuel — two beasts, one can",
  description:
    "Cheetah Bear Fuel is an American performance drink concept: energy, protein, electrolytes, and mushroom focus. First-drop waitlist — no cans are shipping yet.",
};

const lines = [
  {
    name: "Energy",
    line: "Neon ignition",
    note: "Early lifts, late nights, full-send days.",
  },
  {
    name: "Protein",
    line: "Bear strength",
    note: "The heavy side of the equation.",
  },
  {
    name: "Electrolytes",
    line: "Heat and road",
    note: "Sweat, miles, and hard sessions.",
  },
  {
    name: "Mushroom / Focus",
    line: "Cheetah lock",
    note: "Sharp-mode when there is a target.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-[#00d7ff]">
          Cheetah Bear Fuel
        </p>
        <a
          href="mailto:?subject=Cheetah%20Bear%20Fuel%20first-drop%20waitlist&body=Put%20me%20on%20the%20first-drop%20list%20for%20Cheetah%20Bear%20Fuel."
          className="rounded-lg bg-[linear-gradient(90deg,#ff2e63,#ff7a18,#00d7ff)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black"
        >
          Join the waitlist
        </a>
      </header>

      <main>
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 py-12 text-center sm:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(255,46,99,0.28),transparent_33%),linear-gradient(220deg,rgba(0,194,255,0.22),transparent_35%),#050507]" />
          <p className="text-xs font-black uppercase tracking-[0.42em] text-[#00d7ff]">
            American performance drink
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[0.04em] sm:text-7xl">
            Cheetah Bear Fuel
          </h1>
          <div className="relative mt-8 w-full max-w-5xl">
            <Image
              src="/hero-cheetah-bear.png"
              alt="Cheetah Bear Fuel mascots in neon performance style"
              width={1536}
              height={1024}
              priority
              className="relative mx-auto h-auto w-full max-w-4xl"
              sizes="(min-width: 1024px) 896px, 96vw"
            />
          </div>
          <p className="mt-6 text-3xl font-black uppercase tracking-[0.18em] text-[#ffb000] sm:text-5xl">
            Two beast one can
          </p>
          <p className="mt-5 max-w-2xl text-lg font-bold text-white/80">
            Why be one beast when you can be two? Speed plus power in one
            American can — still in first-drop formation, not on shelves.
          </p>
          <a
            href="mailto:?subject=Cheetah%20Bear%20Fuel%20first-drop%20waitlist&body=Put%20me%20on%20the%20first-drop%20list%20for%20Cheetah%20Bear%20Fuel."
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(90deg,#ff2e63,#ff7a18,#00d7ff)] px-7 text-sm font-black uppercase tracking-[0.18em] text-black"
          >
            Join the first-drop waitlist
          </a>
        </section>

        <section className="border-y border-white/10 bg-black/40 px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lines.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-white/12 bg-white/[0.04] p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00d7ff]">
                  {item.line}
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase">{item.name}</h2>
                <p className="mt-3 text-sm font-semibold text-white/70">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 text-center sm:px-8">
          <p className="text-sm font-black uppercase tracking-[0.34em] text-[#ff2e63]">
            First drop
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
            Get in before the can hits.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-white/68">
            Energy, protein, electrolytes, and mushroom focus are the planned
            opening lineup. This page is the brand surface. It is not a store.
          </p>
          <a
            href="mailto:?subject=Cheetah%20Bear%20Fuel%20first-drop%20waitlist&body=Put%20me%20on%20the%20first-drop%20list%20for%20Cheetah%20Bear%20Fuel."
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg border border-[#00d7ff] px-7 text-sm font-black uppercase tracking-[0.16em] text-[#00d7ff]"
          >
            Draft the waitlist email
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-xs font-black uppercase tracking-[0.16em] text-white/50 sm:px-8">
        Cheetah Bear Fuel · concept brand · no invented sales figures
      </footer>
    </div>
  );
}
