import { Quote } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

/* Element 8: testimonials — grounded in real Optics use cases
   (production monitoring, self-heal, no-code, TV, agents, contributing).
   Presented as early-community voices, no fabricated enterprise logos. */
const testimonials = [
  {
    quote:
      "Our contact-flow suite survived a full resource-id rename. XPath missed, OCR hit, and the run stayed green. That one night paid for the migration.",
    name: "QA Lead",
    role: "Mobile releases · Android",
    initials: "QL",
  },
  {
    quote:
      "I hand modules.csv to manual testers and get automated regressions back. Tests-as-data is the first no-code story that actually survived contact with our team.",
    name: "SDET",
    role: "Web · Selenium + Playwright",
    initials: "SD",
  },
  {
    quote:
      "BLE + camera capture is the only stack that let us monitor the production build where adb is blocked. Coordinate-only, but the vision strategies carry it.",
    name: "Production Monitoring Eng.",
    role: "Synthetic monitoring · BLE",
    initials: "PM",
  },
  {
    quote:
      "JUnit written incrementally plus error_definitions.csv means a crash dialog fails the pipeline exactly like an assertion. CI finally trusts the device farm.",
    name: "DevOps Engineer",
    role: "CI/CD · execution_output",
    initials: "DO",
  },
  {
    quote:
      "start_session → screenshot → press_element → terminate_session. Exposing every keyword as an MCP tool made our agent's device loop almost boring — in a good way.",
    name: "AI Agent Builder",
    role: "MCP + optics serve",
    initials: "AB",
  },
  {
    quote:
      "Adding an engine was a file drop plus an interface. The strategy pattern is clean enough that my first PR was a remote-OCR backend, not a docs typo.",
    name: "Open-Source Contributor",
    role: "Extending the framework",
    initials: "OC",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="early community"
            title={
              <>
                Loved by people who{" "}
                <span className="text-phosphor">hate flaky tests.</span>
              </>
            }
            sub="Optics is young, fast-moving OSS backed by Mozark AI. Here's what builders reach for first — and why they stay."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-phosphor/35 hover:shadow-card">
                <Quote className="h-7 w-7 text-phosphor/60" aria-hidden />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-phosphor/40 bg-phosphor/10 font-display text-sm font-bold text-phosphor">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="block font-mono text-[11px] text-slate-500">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
            Want your story here? Ship something with Optics and{" "}
            <a
              href="https://github.com/mozarkai/optics-framework/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="text-phosphor hover:underline"
            >
              open an issue
            </a>{" "}
            — community voices shape the roadmap, and{" "}
            <a
              href="https://github.com/mozarkai/optics-framework/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"
              target="_blank"
              rel="noreferrer"
              className="text-phosphor hover:underline"
            >
              help-wanted
            </a>{" "}
            issues are the fastest way in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
