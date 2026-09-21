import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optics Framework — self-healing test automation",
  description:
    "Self-healing test automation for mobile, web, TV — and AI agents. One keyword engine, six ways to drive it. Open source, Apache 2.0.",
  metadataBase: new URL("https://optics-framework.org"),
  openGraph: {
    title: "Optics Framework — self-healing test automation",
    description:
      "One keyword engine. Six ways to drive it: CSV/YAML files, a Python SDK, Robot Framework, a REST API, an interactive terminal, or an MCP server your AI agent talks to.",
    type: "website",
    url: "https://github.com/mozarkai/optics-framework",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optics Framework — self-healing test automation",
    description:
      "Tests are data. Locators fall back. Open source under Apache 2.0.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
