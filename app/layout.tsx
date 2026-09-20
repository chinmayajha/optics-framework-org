import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optics Framework — Self-Healing, Vision-Powered Test Automation for Mobile, Web, TV & AI Agents",
  description:
    "Optics Framework is the open-source, no-code test automation framework with a 5-strategy locator ladder (XPath → text → OCR → image → AI self-heal). Write tests as CSV/YAML data, run from CLI, Python SDK, Robot Framework, REST API, live terminal, or MCP. Apache 2.0.",
  keywords: [
    "optics framework",
    "vision-powered test automation",
    "self-healing tests",
    "no-code test automation",
    "Appium alternative",
    "mobile test automation",
    "MCP test automation",
    "synthetic monitoring",
    "open source testing framework",
  ],
  metadataBase: new URL("https://mozarkai.github.io/optics-framework"),
  openGraph: {
    title: "Optics Framework — Tests that see the UI like a human does",
    description:
      "One keyword engine. Six ways to drive it. A locator ladder that falls back from XPath to OCR to AI self-heal before a test ever gives up.",
    type: "website",
    url: "https://github.com/mozarkai/optics-framework",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optics Framework — Self-healing test automation",
    description:
      "No-code, vision-powered, agent-ready. CSV/YAML tests for Android, iOS, web, TV — plus MCP + REST for AI agents.",
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
