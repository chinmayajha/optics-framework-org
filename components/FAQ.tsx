"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

/* Element 9: FAQ — 8 questions drawn from real docs friction points. */
const faqs = [
  {
    q: "What exactly is Optics Framework?",
    a: "An open-source (Apache 2.0), no-code test automation framework for vision-powered, data-driven testing and production synthetic monitoring. You define elements, modules, and test cases as CSV or YAML data; one keyword engine executes them across mobile, web, TV, and agent surfaces.",
  },
  {
    q: "How is it different from Appium, Selenium, or Playwright?",
    a: "Optics sits above them. Appium / Selenium / Playwright are installable engines (drivers) inside Optics — not competitors. The difference is the locator ladder: XPath → text/CSS → OCR → image template → opt-in AI self-heal, plus multi-value elements and multi-driver fallbacks. When a single locator breaks, the test recovers instead of failing.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. The primary authoring format is CSV/YAML data — elements.csv, modules.csv, test_cases.csv — with Title Case keywords like Press Element. Coders can drop to the Python SDK, Robot Framework, REST, or MCP when they want custom logic. `optics live` even records your interactive session straight into a reusable module with /save.",
  },
  {
    q: "Which platforms are supported?",
    a: "Android and iOS via Appium, web via Selenium or Playwright, Smart TVs (Android TV, Samsung Tizen, LG webOS), and non-intrusive production devices via the BLE HID mouse/keyboard driver paired with camera capture. Python 3.12+ required; web targets need nothing beyond pip, mobile needs JDK 17+, Node.js, Appium server, and platform tools.",
  },
  {
    q: "How does AI self-heal work — and what does it cost?",
    a: "It's an opt-in last resort. When all four locator strategies fail, Gemini (pip install optics-framework[llm], key via GEMINI_API_KEY, never in config.yaml) reads the screen and attempts a bounded recovery: max five turns, six-keyword allowlist, re-entering the ladder rather than tapping blind coordinates. Cheap strategies always run first, so vision only costs time when the tree can't help. Misconfigured LLM degrades to 'no self-heal', never a hard failure.",
  },
  {
    q: "How do AI agents use Optics?",
    a: "Two ways. `optics mcp` exposes every keyword as a typed MCP tool plus device state as MCP resources (stdio or --transport http). `optics serve` exposes the same engine over REST with live SSE workspace streaming. The agent loop is: start_session → observe (screenshot / source) → act (press_element, enter_text, …) → terminate_session. Sessions are per-process, not shared with the REST server.",
  },
  {
    q: "How does this fit into CI?",
    a: "`optics dry_run` validates the project without a device; `optics execute` writes incremental junit_output.xml (so CI sees progress live), structured logs.json, screenshots with strategy overlays, and detected_errors_<session>.json. Add error_definitions.csv and on-screen crash dialogs become synthetic failing test cases automatically.",
  },
  {
    q: "What does it cost, and how do I contribute?",
    a: "Free forever under Apache 2.0. Install with pip, no signup. Contributions — bug reports, docs, engines, keywords — are first-class: bigger items queue under the help-wanted label, commits follow Conventional Commits via commitizen, and poetry run pytest + ruff + mkdocs serve is the dev loop. Security issues follow SECURITY.md, not public issues.",
  },
];

function Item({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-phosphor/40 bg-phosphor/[0.04]"
          : "border-white/10 bg-ink-900/70 hover:border-white/25"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[17px] font-semibold text-white">
          {faq.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-phosphor bg-phosphor text-ink-950"
              : "border-white/20 text-slate-400"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-slate-400">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="relative border-t border-white/5 bg-ink-900/40 py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="faq"
            title={
              <>
                Questions? <span className="text-phosphor">Answered.</span>
              </>
            }
            sub="The eight things every team asks before adopting Optics — answered from the docs, not the marketing deck."
          />
        </Reveal>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 60, 240)}>
              <Item
                faq={f}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
