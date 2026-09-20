import { ArrowRight, CheckCircle2, Github } from "lucide-react";
import { Button } from "./ui";
import { Reveal } from "./Reveal";

/* Element 10: final CTA — dramatic hero moment. */
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-noise relative overflow-hidden rounded-[2rem] border border-phosphor/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-phosphor/15 blur-[100px]"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-signal/15 blur-[100px]"
              aria-hidden
            />
            <div className="bg-blueprint absolute inset-0" aria-hidden />

            <div className="relative">
              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-phosphor">
                {"//"} free forever · Apache 2.0
              </p>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Stop fixing locators.
                <br />
                <span className="bg-gradient-to-r from-phosphor to-signal bg-clip-text text-transparent">
                  Start shipping tests.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                One guided command takes you from fresh install to a running
                test. Your first self-healing suite is two minutes away.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-slate-300">
                {[
                  "No signup, no credit card",
                  "14 CLI commands, one engine",
                  "Star it, fork it, extend it",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-phosphor" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  href="https://mozarkai.github.io/optics-framework/getting-started/"
                  className="px-12 py-5 text-xl"
                >
                  Run optics quickstart
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  href="https://github.com/mozarkai/optics-framework"
                >
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </Button>
              </div>

              <p className="mt-6 font-mono text-[13px] text-slate-500">
                <span className="text-phosphor">$</span> pip install
                optics-framework && optics quickstart
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
