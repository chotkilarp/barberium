import { SITE } from "@/lib/site";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/logo-icon.png"
      alt="Логотип Barberium"
      className={"invert " + className}
      loading="eager"
      decoding="async"
    />
  );
}

export function BookButton({
  children = "Записаться",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={SITE.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.78_0.11_85/70%)] transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_22px_50px_-16px_oklch(0.78_0.11_85/80%)] " +
        className
      }
    >
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "glass inline-flex items-center justify-center px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold " +
        className
      }
    >
      {children}
    </a>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={"mb-10 " + (center ? "text-center" : "")}>
      <p className={"eyebrow" + (light ? " text-gold-soft/90" : "")}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className={"mt-5 h-px w-16 bg-gold " + (center ? "mx-auto" : "")} />
    </div>
  );
}

/** Frosted glass panel — the recurring AP-style surface used over photography. */
export function GlassCard({
  children,
  className = "",
  gold = false,
}: {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}) {
  return (
    <div className={(gold ? "glass-gold" : "glass") + " " + className}>
      {children}
    </div>
  );
}
