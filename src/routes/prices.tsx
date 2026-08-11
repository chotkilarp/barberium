import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, StickyCta } from "@/components/site/chrome";
import { BookButton, SectionTitle, GlassCard } from "@/components/site/ui";
import { STANDARD, VIP, PRODUCTS, type PriceItem } from "@/lib/site";

const title = "Прайс-лист — Barberium, барбершоп в Ташкенте";
const description =
  "Полный прайс-лист Barberium: стрижки, борода, окрашивание, уход, VIP-услуги и профессиональная продукция. Ташкент, метро «Дружба народов».";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Prices,
});

function Table({
  items,
  accent,
}: {
  items: PriceItem[];
  accent: "gold" | "steel";
}) {
  return (
    <ul>
      {items.map((p, i) => (
        <li
          key={p.name}
          className="anim-row-in flex items-baseline justify-between gap-4 border-b border-border/60 py-4 last:border-b-0"
          style={{ "--stagger": `${i * 55}ms` } as CSSProperties}
        >
          <span className="text-sm sm:text-base">{p.name}</span>
          <span
            className={`whitespace-nowrap font-display text-sm ${
              accent === "gold" ? "text-gold" : "text-steel"
            }`}
          >
            {p.price} сум
          </span>
        </li>
      ))}
    </ul>
  );
}

function Prices() {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyCta />

      <main className="relative overflow-hidden">
        <img
          src="/images/interior-chair.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="photo-blur absolute inset-0 h-[70vh] w-full object-cover opacity-[0.14]"
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-32">
          <p className="anim-price-in eyebrow" style={{ "--stagger": "0ms" } as CSSProperties}>
            Barberium · Ташкент
          </p>
          <h1
            className="anim-price-in mt-3 text-4xl font-semibold uppercase sm:text-5xl"
            style={{ "--stagger": "80ms" } as CSSProperties}
          >
            Прайс-лист
          </h1>
          <p
            className="anim-price-in mt-4 max-w-xl text-sm text-muted-foreground"
            style={{ "--stagger": "160ms" } as CSSProperties}
          >
            Цены указаны в сумах. Каждая позиция — это время мастера, подобранная
            техника и внимание к деталям. Запись — через Telegram-бот, ежедневно
            с 10:00 до 22:00.
          </p>
          <div className="anim-price-in mt-8" style={{ "--stagger": "230ms" } as CSSProperties}>
            <BookButton />
          </div>

          <section className="anim-price-in mt-20" style={{ "--stagger": "300ms" } as CSSProperties}>
            <SectionTitle eyebrow="Тариф" title="Стандарт" />
            <GlassCard className="p-6 sm:p-8">
              <Table items={STANDARD} accent="steel" />
            </GlassCard>
          </section>

          <section className="anim-price-in mt-20" style={{ "--stagger": "380ms" } as CSSProperties}>
            <SectionTitle eyebrow="Приватный кабинет" title="VIP" light />
            <GlassCard gold className="p-6 sm:p-10">
              <Table items={VIP} accent="gold" />
            </GlassCard>
          </section>

          <section className="anim-price-in mt-20" style={{ "--stagger": "460ms" } as CSSProperties}>
            <SectionTitle eyebrow="Магазин" title="Продукция" />
            <GlassCard className="p-6 sm:p-8">
              <Table items={PRODUCTS} accent="steel" />
            </GlassCard>
          </section>

          <div className="mt-16 flex flex-wrap gap-3">
            <BookButton />
            <Link
              to="/"
              className="glass inline-flex items-center justify-center px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              На главную
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <div className="h-16 md:hidden" />
    </div>
  );
}
