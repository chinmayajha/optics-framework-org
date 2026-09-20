"use client";

import { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";

const links = [
  { label: "Why Optics", href: "#why" },
  { label: "Ladder", href: "#ladder" },
  { label: "Surfaces", href: "#surfaces" },
  { label: "Workflow", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
  { label: "Docs", href: "https://mozarkai.github.io/optics-framework/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Element 2: Company logo, top-left */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-phosphor/40 bg-phosphor/10">
            <span className="absolute inset-1.5 rounded-lg border border-phosphor/60" />
            <span className="h-2 w-2 rounded-full bg-phosphor shadow-glow-lime transition-transform duration-300 group-hover:scale-150" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Optics
            <span className="ml-2 hidden rounded-full border border-white/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:inline">
              Framework
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) =>
            l.href.startsWith("http") ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-phosphor"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-phosphor"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mozarkai/optics-framework"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-slate-300 transition-all hover:border-phosphor/50 hover:text-phosphor sm:inline-flex"
            aria-label="Star Optics Framework on GitHub"
          >
            <Star className="h-3.5 w-3.5" />
            Star
          </a>
          <a
            href="https://mozarkai.github.io/optics-framework/getting-started/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-phosphor px-5 py-2.5 font-display text-sm font-semibold text-ink-950 transition-all hover:scale-105 hover:bg-phosphor-muted"
          >
            <Github className="h-4 w-4" />
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
