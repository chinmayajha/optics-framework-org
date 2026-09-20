/**
 * OPTICS FRAMEWORK LANDING PAGE — design decisions (landing-page-guide-v2, Step 1)
 *
 * Aesthetic direction: NIGHT-VISION LAB / PRECISION OPTICS.
 *   Retro-futuristic + minimalist-technical. Deep obsidian canvas, phosphor-lime
 *   accent (night-vision / OCR bounding-box energy), signal-cyan secondary.
 *   Crosshair logo mark, blueprint grid, scanline terminal, mono labels.
 *   The ONE memorable thing: "tests that see the UI like a human does."
 *
 * Design system:
 *   Display: Space Grotesk (NOT Inter/Roboto) · Body: DM Sans · Mono: JetBrains Mono
 *   Dominant bg #060A13 (60%) · Accent lime #C6FF4A (10%, CTAs) · Neutrals slate (30%)
 *   Motion: staggered hero entrance (0/100/220/340/500ms), IntersectionObserver
 *   fade-ups, count-up stats, terminal typing, scan beam. transform/opacity only.
 *   Spatial: asymmetric hero (7/5), overlapping terminal+OCR cards, bento benefits.
 *
 * 11 elements mapping:
 *   1 URL/SEO → layout.tsx metadata (keywords in title/description/OG)
 *   2 Logo → Header.tsx (top-left, sticky blur)
 *   3 Title/subtitle → Hero.tsx (massive Space Grotesk H1)
 *   4 Primary CTA → Hero.tsx dual CTA + FinalCTA.tsx
 *   5 Social proof → Hero stats + platform strip + Testimonials.tsx
 *   6 Media → Hero terminal + Ladder.tsx tabbed code
 *   7 Benefits → Benefits.tsx (6 bento cards)
 *   8 Testimonials → Testimonials.tsx (6 community voices)
 *   9 FAQ → FAQ.tsx (8-item accordion)
 *   10 Final CTA → FinalCTA.tsx (dramatic full-width)
 *   11 Footer → Footer.tsx (docs/community/legal/contact)
 *
 * Learnings from exemplars baked in:
 *   Playwright → tri-surface hero + "built for X" bands + code-first
 *   FastAPI → ultra-concise bullets + immediate runnable example + opinions
 *   Next.js → polished hero + interactive demo + ecosystem + deploy CTA
 *   Kubeflow/K8s → stat social proof + architecture + community contribution path
 */

import Header from "../components/Header";
import Hero from "../components/Hero";
import Ladder from "../components/Ladder";
import Benefits from "../components/Benefits";
import Surfaces from "../components/Surfaces";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { Reveal } from "../components/Reveal";

const platforms = [
  "Android",
  "iOS",
  "Web · Selenium",
  "Web · Playwright",
  "Android TV",
  "Samsung Tizen",
  "LG webOS",
  "BLE · production",
];

const keywords = [
  "Press Element",
  "Enter Text",
  "Swipe Until Element Appears",
  "Validate Screen",
  "Launch App",
  "Run Loop",
  "Invoke API",
  "Capture Screenshot",
  "Assert Presence",
  "Get Interactive Elements",
];

function PlatformStrip() {
  return (
    <section aria-label="Supported platforms" className="relative border-y border-white/5 bg-black/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
            One engine drives — Android · iOS · Web · TV · Production devices
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[12px] text-slate-300 transition-colors hover:border-phosphor/40 hover:text-phosphor"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function KeywordStrip() {
  return (
    <section aria-label="Keyword catalogue" className="relative border-y border-white/5 bg-black/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
            40+ keywords out of the box — <span className="text-phosphor">optics list</span> prints them all
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {keywords.map((k) => (
              <span
                key={k}
                className="rounded-lg border border-white/10 bg-ink-900 px-3.5 py-1.5 font-mono text-[12px] text-slate-300"
              >
                {k}
              </span>
            ))}
            <a
              href="https://mozarkai.github.io/optics-framework/usage/keyword_usage/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-phosphor/40 bg-phosphor/10 px-3.5 py-1.5 font-mono text-[12px] text-phosphor transition-all hover:bg-phosphor/20"
            >
              full catalogue →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-ink-950 text-slate-200">
      <Header />
      <Hero />
      <PlatformStrip />
      <Ladder />
      <Benefits />
      <Surfaces />
      <KeywordStrip />
      <Workflow />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
