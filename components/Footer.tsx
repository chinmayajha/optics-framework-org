import { Github, Mail, BookOpen, Package } from "lucide-react";

/* Element 11: footer with contact + legal. */
const cols = [
  {
    title: "Framework",
    links: [
      { label: "Introduction", href: "https://mozarkai.github.io/optics-framework/introduction/" },
      { label: "Getting started", href: "https://mozarkai.github.io/optics-framework/getting-started/" },
      { label: "Configuration", href: "https://mozarkai.github.io/optics-framework/configuration/" },
      { label: "Architecture", href: "https://mozarkai.github.io/optics-framework/architecture/" },
    ],
  },
  {
    title: "Usage",
    links: [
      { label: "CLI reference", href: "https://mozarkai.github.io/optics-framework/usage/CLI_usage/" },
      { label: "Keyword guide", href: "https://mozarkai.github.io/optics-framework/usage/keyword_usage/" },
      { label: "Live sessions", href: "https://mozarkai.github.io/optics-framework/usage/live_usage/" },
      { label: "MCP + agents", href: "https://mozarkai.github.io/optics-framework/usage/mcp_usage/" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub repo", href: "https://github.com/mozarkai/optics-framework" },
      { label: "Issues", href: "https://github.com/mozarkai/optics-framework/issues" },
      { label: "Pull requests", href: "https://github.com/mozarkai/optics-framework/pulls" },
      { label: "Help wanted", href: "https://github.com/mozarkai/optics-framework/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04070E]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-phosphor/40 bg-phosphor/10">
                <span className="absolute inset-1.5 rounded-lg border border-phosphor/60" />
                <span className="h-2 w-2 rounded-full bg-phosphor" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Optics Framework
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Self-healing, vision-powered test automation for mobile, web, TV
              — and AI agents. Apache 2.0, built by Mozark AI.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Github, href: "https://github.com/mozarkai/optics-framework", label: "GitHub" },
                { icon: BookOpen, href: "https://mozarkai.github.io/optics-framework/", label: "Docs" },
                { icon: Package, href: "https://pypi.org/project/optics-framework/", label: "PyPI" },
                { icon: Mail, href: "mailto:lalit@mozark.ai", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-400 transition-all hover:scale-110 hover:border-phosphor/60 hover:text-phosphor"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs text-slate-600">
              pip install optics-framework
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-400 transition-colors hover:text-phosphor"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://github.com/mozarkai/optics-framework/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-phosphor"
                >
                  Apache 2.0 license
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mozarkai/optics-framework/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-phosphor"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mozarkai/optics-framework/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-phosphor"
                >
                  Security policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:lalit@mozark.ai"
                  className="text-sm text-slate-400 transition-colors hover:text-phosphor"
                >
                  lalit@mozark.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2026 Mozark AI · Optics Framework is open source under Apache 2.0
          </p>
          <p className="font-mono text-[11px] text-slate-600">
            optics-framework · vision-powered · agent-ready
          </p>
        </div>
      </div>
    </footer>
  );
}
