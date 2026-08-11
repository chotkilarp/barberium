import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE, BRANCHES } from "@/lib/site";
import { Monogram, BookButton, GhostButton } from "./ui";

export function Header() {
  return (
    <header className="glass-strong fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <Monogram className="h-8 w-8" />
          <span className="font-display text-sm uppercase tracking-[0.35em]">
            Barberium
          </span>
        </Link>
        <nav className="hidden items-center gap-8 font-display text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <a href="/#about" className="transition-colors hover:text-gold">
            О нас
          </a>
          <a href="/#works" className="transition-colors hover:text-gold">
            Работы
          </a>
          <Link to="/prices" className="transition-colors hover:text-gold">
            Цены
          </Link>
          <a href="/#contacts" className="transition-colors hover:text-gold">
            Контакты
          </a>
        </nav>
        <a
          href={SITE.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-gold/70 px-5 py-2 font-display text-[11px] uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          Записаться
        </a>
      </div>
    </header>
  );
}

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`glass-strong fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <BookButton className="w-full">Записаться в Telegram</BookButton>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden border-t border-border">
      <img
        src="/images/interior-reception.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="photo-blur absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Контакты</p>
        <h2 className="mt-3 text-3xl font-semibold uppercase sm:text-4xl">
          Ваше место в кресле уже ждёт
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {BRANCHES.map((b) => (
            <div key={b.name} className="glass overflow-hidden p-6 sm:p-8">
              <p className="eyebrow">{b.name}</p>
              <p className="mt-1.5 text-sm">{b.address}</p>
              {b.metro && <p className="text-sm text-muted-foreground">{b.metro}</p>}
              <p className="mt-1.5 text-xs text-muted-foreground">{b.hours}</p>
              <GhostButton href={b.mapsLink} className="mt-5 w-full sm:w-auto">
                Открыть на карте →
              </GhostButton>
            </div>
          ))}
        </div>

        <dl className="glass mt-6 grid gap-6 p-6 text-sm sm:grid-cols-3 sm:p-8">
          <div>
            <dt className="eyebrow">Телефон</dt>
            <dd className="mt-1.5">
              <a href={SITE.phoneHref} className="hover:text-gold">
                {SITE.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Соцсети</dt>
            <dd className="mt-1.5 flex gap-5">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Telegram-бот
              </a>
            </dd>
          </div>
          <div className="flex items-center sm:justify-end">
            <BookButton />
          </div>
        </dl>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <Monogram className="h-8 w-8 opacity-60" />
          <p>© {new Date().getFullYear()} Barberium · Искусство мужского образа, Ташкент</p>
        </div>
      </div>
    </footer>
  );
}
