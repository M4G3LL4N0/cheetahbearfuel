"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#waitlist", label: "Waitlist" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="text-xs font-black uppercase tracking-[0.28em] text-[#00d7ff]" onClick={() => setOpen(false)}>
          Cheetah Bear Fuel
        </Link>
        <nav className="hidden items-center gap-4 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          <a href="#waitlist" className="rounded-full bg-[#ff2e63] px-3 py-1.5 text-xs font-bold uppercase text-white" onClick={() => setOpen(false)}>
            Join
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
            aria-expanded={open}
            aria-controls="cbf-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="cbf-mobile-nav" className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 sm:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white/90"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
