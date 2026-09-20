import {
  Eye,
  Table2,
  Layers,
  Bluetooth,
  Bot,
  LineChart,
} from "lucide-react";
import { Card, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

/* Element 7: core benefits — asymmetric bento, custom icons, no generic grid. */
const benefits = [
  {
    icon: Eye,
    title: "Vision does the finding",
    body: "OCR (EasyOCR, Tesseract, Google Vision) + template matching locate elements by what they look like — so renamed resource-ids and shifted layouts stop killing your suite.",
    span: "lg:col-span-4",
    accent: true,
  },
  {
    icon: Table2,
    title: "Tests are data, not code",
    body: "Elements, modules, and test cases live in plain CSV or YAML. Non-coders author tests; reviewers read diffs like spreadsheets. Discovered by content, not path.",
    span: "lg:col-span-4",
    accent: false,
  },
  {
    icon: Bluetooth,
    title: "Non-intrusive production monitoring",
    body: "The BLE driver pilots real devices as a Bluetooth HID mouse + keyboard where debugging and screenshots are blocked — pair with camera capture and vision strategies.",
    span: "lg:col-span-4",
    accent: false,
  },
  {
    icon: Layers,
    title: "One engine, every target",
    body: "Android, iOS, web (Selenium / Playwright), Android TV, Samsung Tizen, LG webOS. Per-platform options classes and D-pad navigation semantics included.",
    span: "lg:col-span-7",
    accent: false,
  },
  {
    icon: Bot,
    title: "Agent-ready from day one",
    body: "`optics mcp` exposes every keyword as a typed MCP tool and device state as resources. `optics serve` streams the same engine over REST + SSE. `optics live` lets humans build by doing — recording always on.",
    span: "lg:col-span-5",
    accent: true,
  },
  {
    icon: LineChart,
    title: "CI-ready results without assertions",
    body: "Incremental JUnit XML, structured JSON logs, pre/post screenshots with strategy overlays — plus error_definitions.csv that fails the build when crash dialogs appear.",
    span: "lg:col-span-12",
    accent: false,
  },
];

export default function Benefits() {
  return (
    <section id="why" className="relative border-t border-white/5 bg-ink-900/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="why optics"
            title={
              <>
                Built for the ways{" "}
                <span className="text-phosphor">tests actually break.</span>
              </>
            }
            sub="Not another wrapper around a driver. Optics is a recovery engine with six fallback axes, data-first authoring, and first-class interfaces for humans, CI, and AI agents."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90} className={b.span}>
              <Card
                className={`h-full p-7 ${
                  b.accent
                    ? "border-phosphor/30 bg-gradient-to-br from-phosphor/[0.07] via-ink-900 to-ink-900"
                    : ""
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    b.accent
                      ? "bg-phosphor text-ink-950 shadow-glow-lime"
                      : "bg-white/5 text-signal"
                  }`}
                >
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-slate-400">{b.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
