"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Github, TerminalSquare } from "lucide-react";
import { Badge, Button } from "./ui";
import { CountUp } from "./Reveal";

const typedLines = [
  "$ pip install optics-framework",
  "$ optics quickstart",
  "✓ target: mobile → engines installed",
  "✓ project scaffolded + config.yaml written",
  "✓ doctor check passed — ready to run",
];

function useTyped() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setLines(typedLines.slice(0, i));
      if (i >= typedLines.length) clearInterval(id);
    }, 650);
    return () => clearInterval(id);
  }, []);
  return lines;
}

export default function Hero() {
  const lines = useTyped();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      {/* Backdrop */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-phosphor/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute right-[-160px] top-40 h-[380px] w-[380px] rounded-full bg-signal/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left — Element 3 (title) + Element 4 (CTA) + Element 5 (social proof) */}
        <div className="lg:col-span-7">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Badge>Apache 2.0 · Open source · v1.10.3</Badge>
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-[2.9rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]"
            style={{ animationDelay: "100ms" }}
          >
            Tests that{" "}
            <span className="bg-gradient-to-r from-phosphor via-phosphor-muted to-signal bg-clip-text text-transparent text-glow-lime">
              see the UI
            </span>
            <br />
            like a human does.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            Optics Framework is the open-source,{" "}
            <strong className="text-white">
              vision-powered, self-healing test automation
            </strong>{" "}
            framework for mobile, web, TV — and AI agents. One keyword engine,
            six ways to drive it. When XPath breaks, vision takes over.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <Button
              size="lg"
              href="https://mozarkai.github.io/optics-framework/getting-started/"
            >
              Start free — no signup
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href="https://github.com/mozarkai/optics-framework"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </div>
          <p
            className="animate-fade-up mt-4 font-mono text-[13px] text-slate-500"
            style={{ animationDelay: "420ms" }}
          >
            <span className="text-phosphor">$</span> pip install optics-framework
            <span className="ml-3 hidden sm:inline">
              · Python 3.12+ · 2-min quickstart
            </span>
          </p>

          {/* Social proof strip */}
          <div
            className="animate-fade-up mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
            style={{ animationDelay: "500ms" }}
          >
            {[
              { v: 5, suffix: "", label: "fallback strategies", count: true },
              { v: 6, suffix: "", label: "execution surfaces", count: true },
              { v: 40, suffix: "+", label: "built-in keywords", count: true },
              { v: 6, suffix: "", label: "platform targets", count: true },
            ].map((s) => (
              <div key={s.label} className="bg-ink-950/90 px-4 py-4 text-center">
                <p className="font-display text-2xl font-bold text-phosphor">
                  {s.count ? <CountUp to={s.v} suffix={s.suffix} /> : s.v}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Backed by{" "}
            <a
              href="https://mozark.ai"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 underline decoration-phosphor/50 underline-offset-4 hover:text-phosphor"
            >
              Mozark AI
            </a>{" "}
            · Built on Appium · Selenium · Playwright · EasyOCR · Gemini
          </p>
        </div>

        {/* Right — terminal + detection card (asymmetric, overlapping) */}
        <div
          className="animate-fade-up relative lg:col-span-5"
          style={{ animationDelay: "300ms" }}
        >
          <div className="scanlines relative overflow-hidden rounded-2xl border border-white/15 bg-[#080D18]/95 shadow-card">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 flex items-center gap-2 font-mono text-xs text-slate-500">
                <TerminalSquare className="h-4 w-4" />
                optics — quickstart
              </span>
              <span className="ml-auto rounded-full border border-phosphor/30 bg-phosphor/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-phosphor">
                live
              </span>
            </div>
            <div className="min-h-[228px] space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
              {lines.map((l, i) => (
                <p
                  key={i}
                  className={
                    l.startsWith("✓")
                      ? "text-phosphor"
                      : l.startsWith("$")
                        ? "text-white"
                        : "text-slate-400"
                  }
                >
                  {l}
                </p>
              ))}
              <p className="text-white">
                <span className="text-phosphor">$</span>{" "}
                <span className="animate-blink">▊</span>
              </p>
            </div>
            {/* scan beam */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 overflow-hidden">
              <div className="h-10 animate-scan bg-gradient-to-b from-transparent via-phosphor/15 to-transparent" />
            </div>
          </div>

          {/* Overlapping OCR detection card */}
          <div className="relative z-10 -mt-8 ml-6 mr-2 animate-float rounded-2xl border border-signal/25 bg-ink-900/95 p-4 shadow-glow-cyan backdrop-blur sm:ml-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
              ◉ vision detection — live
            </p>
            <div className="mt-3 space-y-2 font-mono text-[12px]">
              {[
                ["XPathStrategy", "miss", "text-slate-500"],
                ["TextElementStrategy", "miss", "text-slate-500"],
                ["TextDetectionStrategy · OCR", "HIT 0.97", "text-phosphor"],
              ].map(([name, status, cls]) => (
                <div
                  key={name as string}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                >
                  <span className="text-slate-300">{name}</span>
                  <span className={cls as string}>{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[13px] text-slate-400">
              XPath broke after the redesign. Optics fell back to OCR and the
              test kept running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
