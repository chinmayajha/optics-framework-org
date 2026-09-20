import type { ReactNode } from "react";

/* Heavily customized ShadCN-style primitives for the Optics brand. */

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-phosphor/70";
  const sizes = {
    md: "px-6 py-3 text-[15px] rounded-full",
    lg: "px-9 py-4 text-lg rounded-full",
  };
  const variants = {
    primary:
      "bg-phosphor text-ink-950 shadow-glow-lime hover:bg-phosphor-muted hover:scale-[1.04] hover:-translate-y-0.5 active:scale-[0.98]",
    secondary:
      "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-signal/60 hover:bg-white/10 hover:scale-[1.03]",
    ghost: "text-white/70 hover:text-phosphor px-4 py-2",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return <button className={cls}>{children}</button>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-phosphor/30 bg-phosphor/10 px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-phosphor">
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-phosphor" />
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-phosphor/40 hover:shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-signal">
        {"//"} {kicker}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">{sub}</p>
      )}
    </div>
  );
}
