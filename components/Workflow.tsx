import { FolderTree, PlayCircle, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative border-t border-white/5 bg-ink-900/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="from zero to green in minutes"
            title={
              <>
                Write a test <span className="text-phosphor">as data.</span>
              </>
            }
            sub="`optics quickstart` scaffolds the project, writes a platform-correct config.yaml, and runs a doctor check. You bring the element names."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-[#080D18] p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                <FolderTree className="h-4 w-4" /> 1 · scaffold
              </p>
              <pre className="mt-4 overflow-auto font-mono text-[12.5px] leading-[1.75] text-slate-300">
{`$ optics quickstart
$ optics dry_run my_project
  ✓ keywords, elements,
    module refs valid
$ optics execute my_project`}
              </pre>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Dry-run validates everything without touching a device — but
                the config&apos;s engines must be installed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-phosphor/30 bg-gradient-to-b from-phosphor/[0.07] to-[#080D18] p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-phosphor">
                <PlayCircle className="h-4 w-4" /> 2 · author as data
              </p>
              <pre className="mt-4 overflow-auto font-mono text-[12.5px] leading-[1.75] text-slate-200">
{`# elements.csv
Add_Contact_Button,
//android.widget.Button
[@content-desc="Create
contact"]

# modules.csv
Add Contact,Press Element,
  \${Add_Contact_Button}

# test_cases.csv
Add Contact with
Contact App,Add Contact`}
              </pre>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Repeating a name builds a fallback list.{" "}
                <span className="text-white">TEXT_ONLY:</span> forces a
                vision-based search.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-white/10 bg-[#080D18] p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                <ShieldCheck className="h-4 w-4" /> 3 · ship with confidence
              </p>
              <pre className="mt-4 overflow-auto font-mono text-[12.5px] leading-[1.75] text-slate-300">
{`execution_output/
├── junit_output.xml
├── logs.json
├── screenshots/
└── detected_errors_
    <session>.json`}
              </pre>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Drop in <span className="text-white">error_definitions.csv</span>{" "}
                and crash dialogs, session expiries, and network errors fail
                the CI build — no assertions required.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
