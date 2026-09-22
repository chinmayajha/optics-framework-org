import { Mark } from "../components/Mark";

/* ------------------------------------------------------------------ */
/* Content. Facts sourced from the framework README so the page stays  */
/* accurate: https://github.com/mozarkai/optics-framework             */
/* ------------------------------------------------------------------ */

const DOCS = "https://mozarkai.github.io/optics-framework/";
const QUICKSTART = "https://mozarkai.github.io/optics-framework/getting-started/";
const GITHUB = "https://github.com/mozarkai/optics-framework";
const INSTALL_URL = "https://optics-framework.org/install";
const INSTALL_DOCS = "https://mozarkai.github.io/optics-framework/prerequisites/";

const features = [
  {
    title: "A locator ladder, not a locator",
    body: "Every keyword walks a priority-ordered chain: XPath, then visible text, then OCR, then image matching, then an opt-in AI self-heal. Cheap strategies run first — vision only costs you time when the accessibility tree can't help.",
  },
  {
    title: "Tests are data",
    body: "Elements, modules and test cases are plain CSV or YAML. Non-coders can write them, diffs stay reviewable, and there is no IDE and no programming language to learn.",
  },
  {
    title: "Six ways to run the same keywords",
    body: "CLI runner, interactive terminal, Python SDK, Robot Framework, REST API, or an MCP server. Every public method is a keyword on every surface — switch without rewriting a test.",
  },
  {
    title: "Android, iOS, web, TV — and BLE",
    body: "Selenium, Playwright, Appium, Android TV, Samsung Tizen, LG webOS. The ble driver even drives production devices over Bluetooth HID where debugging and screenshots are blocked.",
  },
];

const ladder = [
  { n: "1", name: "XPath", how: "Native query through the driver's accessibility tree" },
  { n: "2", name: "Text", how: "Direct text / CSS / class lookup through the element source" },
  { n: "3", name: "OCR", how: "Screenshot → EasyOCR, Tesseract or Google Vision" },
  { n: "4", name: "Image", how: "Screenshot → template match against a reference PNG" },
  { n: "5", name: "AI self-heal", how: "Opt-in: an LLM reads the screen and recovers, bounded to five turns" },
];

const surfaces = [
  { name: "CLI runner", cmd: "optics execute <project>", best: "CI suites written as CSV/YAML" },
  { name: "Interactive TUI", cmd: "optics live [project]", best: "Building a test by doing it" },
  { name: "Python SDK", cmd: "from optics_framework import Optics", best: "Custom logic in existing suites" },
  { name: "Robot Framework", cmd: "Library  optics_framework.optics.Optics", best: "Teams already on Robot" },
  { name: "REST API", cmd: "optics serve", best: "Remote, orchestrated execution" },
  { name: "MCP server", cmd: "optics mcp", best: "Letting an AI agent drive a device" },
];

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

const badges = [
  { src: "https://img.shields.io/pypi/v/optics-framework.svg", alt: "PyPI version", href: "https://pypi.org/project/optics-framework/" },
  { src: "https://img.shields.io/pypi/dm/optics-framework.svg", alt: "PyPI downloads", href: "https://pypi.org/project/optics-framework/" },
  { src: "https://img.shields.io/badge/python-3.12%2B-blue.svg", alt: "Python 3.12+", href: "https://www.python.org/" },
  { src: "https://img.shields.io/badge/license-Apache_2.0-blue.svg", alt: "Apache 2.0 license", href: `${GITHUB}/blob/main/LICENSE` },
  { src: "https://sonarcloud.io/api/project_badges/measure?project=mozarkai_optics-framework&metric=alert_status", alt: "SonarCloud quality gate", href: "https://sonarcloud.io/summary/new_code?id=mozarkai_optics-framework" },
];

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const cls =
    variant === "primary"
      ? "bg-copper text-white hover:bg-copper-dim"
      : "border border-line bg-surface text-ink hover:border-copper";
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-[15px] font-medium transition-colors ${cls}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            {lede}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* ---------------------------------------------------------- header */}
      <header className="border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <Mark />
            <span className="text-[17px] font-semibold">Optics Framework</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            <a href="#features" className="text-sm text-muted hover:text-ink">Why Optics</a>
            <a href="#ladder" className="text-sm text-muted hover:text-ink">Locator ladder</a>
            <a href="#data" className="text-sm text-muted hover:text-ink">Tests as data</a>
            <a href="#surfaces" className="text-sm text-muted hover:text-ink">Surfaces</a>
            <a href={DOCS} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-ink">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm text-muted hover:text-ink sm:inline"
            >
              GitHub
            </a>
            <Button href={QUICKSTART}>Get started</Button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------ hero */}
      <section id="top" className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-copper">
              Open source · Apache 2.0
            </p>
            <h1 className="mt-4 text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.2rem]">
              Self-healing test automation for mobile, web, TV — and AI agents.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              One keyword engine. Six ways to drive it: CSV/YAML files, a Python
              SDK, Robot Framework, a REST API, an interactive terminal, or an
              MCP server your AI agent talks to.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              When a button&rsquo;s resource-id changes after a redesign, most
              frameworks just fail the test. Optics tries the XPath, then the
              visible text, then what the button looks like on screen — before it
              gives up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={QUICKSTART}>Read the quickstart</Button>
              <Button href={GITHUB} variant="secondary">View on GitHub</Button>
            </div>

            <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  macOS &amp; Linux
                </p>
                <div className="codeblock rounded-md border border-line px-5 py-4">
                  <p>
                    <span className="text-copper-bright">$</span> curl -fsSL {INSTALL_URL} | sh
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  Windows
                </p>
                <div className="codeblock rounded-md border border-line px-5 py-4">
                  <p>
                    <span className="text-copper-bright">&gt;</span> irm {INSTALL_URL}.ps1 | iex
                  </p>
                </div>
              </div>
            </div>
            <div className="codeblock mt-4 max-w-xl rounded-md border border-line px-5 py-4">
              <p>
                <span className="text-copper-bright">$</span> optics quickstart
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Installs into its own environment under{" "}
              <code className="font-mono">~/.optics</code> — nothing touches your
              system Python. Already a Python shop?{" "}
              <a href={INSTALL_DOCS} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                Install with pip instead
              </a>
              .
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {badges.map((b) => (
                <a key={b.alt} href={b.href} target="_blank" rel="noreferrer" className="opacity-95 hover:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} height={20} className="h-5 w-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- platforms */}
      <section aria-label="Supported platforms" className="border-y border-line bg-surface py-8">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted">
            One engine drives
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] text-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- features */}
      <Section
        id="features"
        title="Why Optics"
        lede="Most frameworks assume a UI element has one true locator. Optics assumes an element has several plausible identities — and tries all of them before giving up."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-line bg-surface p-6">
              <h3 className="text-[17px] font-semibold">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- ladder */}
      <Section
        id="ladder"
        title="The locator ladder"
        lede="Every element-based keyword walks this chain until one strategy succeeds. Steps 1–4 are pluggable; step 5 is a separate recovery layer with a six-keyword allowlist, so it re-enters the ladder rather than tapping blind coordinates."
      >
        <ol className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
          {ladder.map((s) => (
            <li key={s.n} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper-soft text-[13px] font-semibold text-copper">
                {s.n}
              </span>
              <span className="w-32 shrink-0 font-mono text-[14px] font-medium">{s.name}</span>
              <span className="text-[15px] text-muted">{s.how}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------ tests=data */}
      <Section
        id="data"
        title="Write a test as data"
        lede="Optics discovers these files by their content — CSV headers or YAML top-level keys — not by their path. Repeating an element name builds a fallback list, so even the data file can heal itself."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-[13px] text-muted">test_data/elements.csv</p>
            <pre className="codeblock overflow-x-auto rounded-md px-5 py-4">
{`Element_Name,Element_ID
Add_Contact_Button,//android.widget.Button[@content-desc="Create contact"]
First_Name_element,//android.widget.EditText[@text="First_name"]
Save_Button,Save
First_Name,John`}
            </pre>
          </div>
          <div>
            <p className="mb-2 font-mono text-[13px] text-muted">test_cases/test_cases.csv</p>
            <pre className="codeblock overflow-x-auto rounded-md px-5 py-4">
{`test_case,test_step
Suite Setup,Launch Contact Application
Add Contact with Contact App,Add Contact
Add Contact with Contact App,Verify Contact is Added`}
            </pre>
          </div>
        </div>
        <p className="mt-6 text-[15px] text-muted">
          A locator can be an XPath, <code className="font-mono">text=…</code>,{" "}
          <code className="font-mono">css=…</code>, a plain string, a reference PNG
          from <code className="font-mono">input_templates/</code>, or{" "}
          <code className="font-mono">TEXT_ONLY:…</code> to force a vision-based search.
        </p>
      </Section>

      {/* -------------------------------------------------------- surfaces */}
      <Section
        id="surfaces"
        title="Six ways to run the same keywords"
        lede="Every public method on the API classes is automatically a keyword on every surface. CSV/YAML uses Title Case: Press Element → press_element."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-[12px] uppercase tracking-wider text-muted">
                <th className="py-3 pr-4 font-medium">Surface</th>
                <th className="py-3 pr-4 font-medium">Command / import</th>
                <th className="py-3 font-medium">Best for</th>
              </tr>
            </thead>
            <tbody>
              {surfaces.map((s) => (
                <tr key={s.name} className="border-b border-line last:border-0">
                  <td className="py-4 pr-4 text-[15px] font-medium">{s.name}</td>
                  <td className="py-4 pr-4 font-mono text-[13px] text-copper">{s.cmd}</td>
                  <td className="py-4 text-[15px] text-muted">{s.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ------------------------------------------------------- final CTA */}
      <section className="border-t border-line bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From install to a running test in one command.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-paper/70">
              <code className="font-mono">optics quickstart</code> asks what you want
              to automate, installs the matching engine, scaffolds the project, writes
              a platform-correct config, and runs <code className="font-mono">optics doctor</code>. Every
              prompt has a default — pressing Enter throughout yields a runnable project.
            </p>
            <div className="codeblock mt-7 max-w-xl rounded-md border border-white/10 px-5 py-4">
              <p>
                <span className="text-copper-bright">$</span> curl -fsSL {INSTALL_URL} | sh
              </p>
              <p className="text-paper/45">
                <span className="text-copper-bright">&gt;</span> irm {INSTALL_URL}.ps1 | iex
                &nbsp;&nbsp;# Windows
              </p>
              <p>
                <span className="text-copper-bright">$</span> optics quickstart
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={QUICKSTART}>Read the quickstart</Button>
              <a
                href={`${GITHUB}/blob/main/LICENSE`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2.5 text-[15px] font-medium text-paper transition-colors hover:border-white/50"
              >
                Apache 2.0 licensed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- footer */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2.5">
            <Mark className="h-5 w-5" />
            <span className="text-[15px] font-semibold">Optics Framework</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted" aria-label="Footer">
            <a href={DOCS} target="_blank" rel="noreferrer" className="hover:text-ink">Docs</a>
            <a href={QUICKSTART} target="_blank" rel="noreferrer" className="hover:text-ink">Getting started</a>
            <a href={`${DOCS}usage/keyword_usage/`} target="_blank" rel="noreferrer" className="hover:text-ink">Keywords</a>
            <a href={`${DOCS}architecture/`} target="_blank" rel="noreferrer" className="hover:text-ink">Architecture</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
            <a href="https://pypi.org/project/optics-framework/" target="_blank" rel="noreferrer" className="hover:text-ink">PyPI</a>
          </nav>
          <p className="text-sm text-muted">Apache 2.0</p>
        </div>
      </footer>
    </main>
  );
}
