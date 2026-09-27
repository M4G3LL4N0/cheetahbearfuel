import Image from "next/image";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { TrustStrip } from "@/components/TrustStrip";
import WaitlistForm from "@/components/WaitlistForm";

const productLines = [
  {
    name: "Energy",
    punch: "Neon ignition for early lifts, late nights, and full-send days.",
  },
  {
    name: "Protein",
    punch: "Strength fuel for the bear side of the equation.",
  },
  {
    name: "Electrolytes",
    punch: "Heat, sweat, road miles, and hard sessions covered.",
  },
  {
    name: "Mushroom / Focus",
    punch: "Sharp-mode support when the cheetah needs a target.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 py-14 text-center sm:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(255,46,99,0.28),transparent_33%),linear-gradient(220deg,rgba(0,194,255,0.22),transparent_35%),linear-gradient(0deg,rgba(255,122,24,0.14),transparent_50%),#050507]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[linear-gradient(180deg,transparent,rgba(255,74,36,0.18)_35%,rgba(115,50,255,0.16)_70%,transparent)]" />

        <p className="text-xs font-black uppercase tracking-[0.42em] text-[#00d7ff] sm:text-sm">
          American Performance Drink
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[0.04em] text-white sm:text-7xl lg:text-8xl">
          CHEETAH BEAR FUEL
        </h1>

        <div className="relative mt-8 w-full max-w-5xl">
          <div className="absolute inset-x-8 bottom-4 h-24 bg-[#ff2e63]/30 blur-3xl" />
          <Image
            src="/hero-cheetah-bear.png"
            alt="Cheetah Bear Fuel mascots in neon Miami Vice performance style"
            width={1536}
            height={1024}
            priority
            className="relative mx-auto h-auto w-full max-w-4xl drop-shadow-[0_0_38px_rgba(255,46,99,0.42)]"
            sizes="(min-width: 1024px) 896px, 96vw"
          />
        </div>

        <p className="mt-6 text-3xl font-black uppercase leading-none tracking-[0.18em] text-[#ffb000] sm:text-5xl">
          TWO BEAST ONE CAN
        </p>
        <p className="mt-5 max-w-2xl text-lg font-bold text-white/82 sm:text-2xl">
          Why be one beast when you can be two?
        </p>

        <a
          href="#waitlist"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(90deg,#ff2e63,#ff7a18,#00d7ff)] px-7 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_34px_rgba(255,46,99,0.45)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00d7ff] focus:ring-offset-2 focus:ring-offset-[#050507]"
        >
          Join the Waitlist
        </a>
      </section>

      <section id="products" className="border-y border-white/10 bg-black/38 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {productLines.map((line) => (
            <article
              key={line.name}
              className="rounded-lg border border-white/12 bg-white/[0.045] p-5 shadow-[0_0_24px_rgba(0,215,255,0.08)] transition hover:-translate-y-1 hover:border-[#ff2e63]/60 hover:bg-white/[0.07]"
            >
              <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white">
                {line.name}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-6 text-white/70">
                {line.punch}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(110deg,#07070b,#180614_48%,#06131a)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.34em] text-[#ff2e63]">
            Speed plus power
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl">
            Speed. Strength. Hydration. Focus.
          </h2>
          <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-white/78">
            American performance fuel for gym, road, heat, late nights, and
            all-gas living.
          </p>
        </div>
      </section>

      <section
        id="waitlist"
        className="bg-[#050507] px-5 py-20 text-center sm:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.34em] text-[#00d7ff]">
            First drop access
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[0.04em] sm:text-6xl">
            Get in before the can hits.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-7 text-white/68">
            Energy, protein, electrolytes, mushroom focus, recovery,
            pre-workout, and hydration are lining up for launch.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm font-black uppercase tracking-[0.16em] text-white/68 sm:flex-row sm:items-center sm:justify-between">
          <p>Cheetah Bear Fuel</p>
          <p>Why be one beast when you can be two?</p>
        </div>
      </footer>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
    <MarketingGraphicsStack />
    </main>
  );
}
