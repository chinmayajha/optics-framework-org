import {
  Terminal,
  AppWindow,
  Braces,
  Bot,
  Cloud,
  FlaskConical,
} from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const surfaces = [
  {
    icon: Terminal,
    cmd: "optics execute <project>",
    name: "CLI runner",
    best: "CI suites written as CSV/YAML",
  },
  {
    icon: AppWindow,
    cmd: "optics live [project]",
    name: "Interactive TUI",
    best: "Build a test by doing it — /save turns the session into a module",
  },
  {
    icon: Braces,
    cmd: "from optics_framework import Optics",
    name: "Python SDK",
    best: "Custom logic, embedding in existing suites",
  },
  {
    icon: FlaskConical,
    cmd: "Library optics_framework.optics.Optics",
    name: "Robot Framework",
    best: "Teams already on Robot",
  },
  {
    icon: Cloud,
    cmd: "optics serve",
    name: "REST API",
    best: "Remote / orchestrated execution, SSE workspace streaming",
  },
  {
    icon: Bot,
    cmd: "optics mcp",
    name: "MCP server",
    best: "Let an AI agent drive a real device",
  },
];

export default function Surfaces() {
  return (
    <section id="surfaces" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="one engine, six surfaces"
            title={
              <>
                Same keywords. <span className="text-phosphor">Everywhere.</span>
              </>
            }
            sub="Every public method on the four API classes is automatically a keyword on every surface. CSV/YAML uses Title Case (Press Element → press_element)."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {surfaces.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl border border-white/10 bg-ink-900/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-glow-cyan">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-signal transition-colors group-hover:bg-signal/15">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {s.name}
                </h3>
                <p className="mt-2 truncate rounded-lg border border-white/10 bg-black/50 px-3 py-2 font-mono text-[12px] text-phosphor">
                  {s.cmd}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  <span className="text-slate-500">Best for </span>
                  {s.best}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-phosphor/25 bg-phosphor/[0.05] px-6 py-5 sm:flex-row">
            <p className="font-mono text-[13px] text-slate-300">
              <span className="text-phosphor">$</span> optics list
              <span className="ml-3 text-slate-500">
                prints the live keyword catalogue with signatures
              </span>
            </p>
            <div className="flex gap-3">
              <a
                href="https://mozarkai.github.io/optics-framework/usage/CLI_usage/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-phosphor/60 hover:text-phosphor"
              >
                CLI guide
              </a>
              <a
                href="https://mozarkai.github.io/optics-framework/usage/mcp_usage/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-phosphor px-5 py-2.5 font-display text-sm font-semibold text-ink-950 transition-all hover:scale-105"
              >
                MCP guide
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
