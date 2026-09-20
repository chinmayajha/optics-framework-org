"use client";

import { useState } from "react";
import { BrainCircuit, Image, ScanText, Braces, FileCode2 } from "lucide-react";
import { Card, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Braces,
    name: "XPathStrategy",
    how: "Native XPath query through the driver's accessibility tree",
    cost: "cheapest · microseconds",
    state: "try first",
  },
  {
    n: "02",
    icon: FileCode2,
    name: "TextElementStrategy",
    how: "Direct text / CSS / class lookup through the element source",
    cost: "cheap · milliseconds",
    state: "try second",
  },
  {
    n: "03",
    icon: ScanText,
    name: "TextDetectionStrategy",
    how: "Screenshot → OCR (EasyOCR, Tesseract, Google Vision, remote OCR)",
    cost: "vision · ~seconds",
    state: "fall back",
  },
  {
    n: "04",
    icon: Image,
    name: "ImageDetectionStrategy",
    how: "Screenshot → template matching against a reference PNG",
    cost: "vision · ~seconds",
    state: "fall back",
  },
  {
    n: "05",
    icon: BrainCircuit,
    name: "AI self-heal (opt-in)",
    how: "All four failed → Gemini reads the screen, bounded to 5 turns + 6-keyword allowlist",
    cost: "last resort · bounded",
    state: "opt-in backstop",
  },
];

const tabs = ["CSV test", "Python SDK", "MCP agent"] as const;

const snippets: Record<(typeof tabs)[number], string> = {
  "CSV test": `Element_Name,Element_ID
Add_Contact_Button,//android.widget.Button[@content-desc="Create contact"]
Save_Button,Save

module_name,module_step,param_1,param_2
Add Contact,Press Element,\${Add_Contact_Button}
Add Contact,Enter Text,\${First_Name_element},\${First_Name}
Add Contact,Press Element,\${Save_Button}

test_case,test_step
Suite Setup,Launch Contact Application
Add Contact with Contact App,Add Contact`,
  "Python SDK": `from optics_framework import Optics

optics = Optics()
optics.setup(
    driver_sources=[{"appium": {"enabled": True, "url": "http://localhost:4723"}}],
    elements_sources=[{"appium_find_element": {"enabled": True}}],
)

optics.launch_app(app_identifier="com.example.app")
optics.enter_text("username_field", "testuser")
optics.press_element("submit_button")
optics.validate_element("welcome_message")
optics.quit()`,
  "MCP agent": `{ "mcpServers": { "optics": { "command": "optics", "args": ["mcp"] } } }

# agent loop
start_session
  → screenshot + optics://session/{id}/source
  → press_element / enter_text / ...
  → terminate_session

# networked: optics mcp --transport http --port 8090`,
};

export default function Ladder() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("CSV test");

  return (
    <section id="ladder" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="the core idea"
            title={
              <>
                A locator ladder,{" "}
                <span className="text-phosphor">not a locator.</span>
              </>
            }
            sub="Most frameworks assume a UI element has one true locator — and the test breaks the moment it changes. Optics assumes an element has several plausible identities and tries all of them before giving up."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Ladder steps — asymmetric bento */}
          <div className="space-y-4 lg:col-span-7">
            {steps.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <Card
                  className={`flex items-start gap-5 p-5 sm:p-6 ${
                    i === 4
                      ? "border-phosphor/40 bg-gradient-to-br from-phosphor/[0.08] to-transparent"
                      : ""
                  }`}
                >
                  <span className="font-mono text-sm text-slate-600">
                    {s.n}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      i >= 2
                        ? "bg-phosphor/15 text-phosphor"
                        : "bg-white/5 text-signal"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {s.name}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                          i === 4
                            ? "bg-phosphor/15 text-phosphor"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        {s.state}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-400">
                      {s.how}
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-600">
                      {s.cost}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <p className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm leading-relaxed text-slate-400">
                Two more fallback axes sit alongside the ladder:{" "}
                <strong className="text-white">
                  multiple values per element name
                </strong>{" "}
                and{" "}
                <strong className="text-white">
                  multiple enabled drivers / element sources
                </strong>
                , each tried in config order.
              </p>
            </Reveal>
          </div>

          {/* Element 6: media — tabbed live code */}
          <div className="lg:col-span-5">
            <Reveal delay={150} className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#080D18] shadow-card">
                <div className="flex gap-1 border-b border-white/10 p-2">
                  {tabs.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
                        tab === t
                          ? "bg-phosphor/15 text-phosphor"
                          : "text-slate-500 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <pre className="max-h-[480px] overflow-auto p-5 font-mono text-[12.5px] leading-[1.7] text-slate-300">
                  {snippets[tab]}
                </pre>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5">
                  <span className="font-mono text-[11px] text-slate-500">
                    Title Case in CSV → snake_case everywhere else
                  </span>
                  <a
                    href="https://mozarkai.github.io/optics-framework/usage/keyword_usage/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-phosphor hover:underline"
                  >
                    keyword guide →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
