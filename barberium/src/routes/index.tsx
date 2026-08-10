import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, StickyCta } from "@/components/site/chrome";
import { Monogram, BookButton, GhostButton, SectionTitle, GlassCard } from "@/components/site/ui";
import { SITE, POPULAR } from "@/lib/site";

const title = "Barberium — искусство мужского образа в Ташкенте";
const description =
  "Barberium — премиальный барбершоп в Ташкенте у метро «Дружба народов». Точная стрижка, уход за бородой и приватный VIP-кабинет. Запись через Telegram-бот.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://barberium.uz/images/storefront.jpg" },
      { name: "twitter:image", content: "https://barberium.uz/images/storefront.jpg" },
    ],
  }),
  component: Index,
});

const REVIEWS = [
  { name: "Мухаммад Д.", text: "Стригся в VIP-кабинете — отличное место, результатом очень доволен." },
  { name: "Бобуршох А.", text: "Меня стриг мастер Нозим — бомба. Рекомендую всем." },
  { name: "Ahmed A.", text: "Профессионально, приятный персонал. Своих денег стоит." },
  { name: "Umar M.", text: "Рекомендую: профессиональный сервис от начала до конца." },
];

const FEATURES = [
  {
    t: "Техника",
    d: "Fade, crop, классика и опасное бритьё — каждая линия выверена так, будто от неё зависит репутация.",
  },
  {
    t: "Пространство",
    d: "Общий зал для атмосферы и приватный VIP-кабинет для тех, кому нужна тишина и личный ритм.",
  },
  {
    t: "Честность",
    d: "Мы не боремся за самый низкий чек в городе. Цена — это мастер, материалы и время, потраченное на вас.",
  },
];

const GALLERY = [
  { src: "/images/interior-hall-wide.jpg", caption: "Общий зал" },
  { src: "/images/interior-chair.jpg", caption: "Рабочее место мастера" },
  { src: "/images/interior-reception.jpg", caption: "VIP-кабинет" },
  { src: "/images/interior-arch.jpg", caption: "Зона стайлинга" },
  { src: "/images/interior-chair-detail.jpg", caption: "Кресло и инструмент" },
  { src: "/images/interior-sink.jpg", caption: "Мытьё головы" },
];

function BeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  return (
    <figure className="glass overflow-hidden p-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="overflow-hidden">
          <img
            src={before}
            alt="До стрижки в Barberium"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-transform duration-700 hover:scale-105"
          />
          <figcaption className="mt-2 font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            До
          </figcaption>
        </div>
        <div className="overflow-hidden">
          <img
            src={after}
            alt="После стрижки в Barberium"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <figcaption className="mt-2 font-display text-[11px] uppercase tracking-[0.28em] text-gold">
            → После
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyCta />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-16">
          <img
            src="/images/storefront.jpg"
            alt="Фасад барбершопа Barberium в Ташкенте"
            className="photo-blur absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-vignette" />
          <div className="absolute inset-0 bg-background/35" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
            <Monogram className="anim-mono-mark mx-auto h-28 w-28 sm:h-36 sm:w-36" />
            <p className="anim-rise eyebrow mt-8">Ташкент · с 10:00 до 22:00</p>
            <h1 className="anim-rise mt-4 text-4xl font-semibold uppercase leading-[1.05] sm:text-6xl">
              Точность в каждой
              <span className="block text-gold">детали образа</span>
            </h1>
            <p className="anim-rise mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Barberium — барбершоп, где каждая стрижка становится ритуалом.
              Общий зал с характером и приватный VIP-кабинет для тишины.
            </p>
            <div className="anim-rise mt-9 flex flex-wrap justify-center gap-3">
              <BookButton />
              <GhostButton href={SITE.phoneHref}>{SITE.phone}</GhostButton>
            </div>
          </div>
        </section>

        {/* О нас */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle eyebrow="О нас" title="Ремесло, доведённое до формы искусства" />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Barberium — барбершоп в центре Ташкента, где классическое
                барберское ремесло соединяется со спокойной, выверенной эстетикой.
                Здесь не стригут «на глаз» — здесь работают с образом целиком.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Два формата на выбор: живой общий зал с настоящей барберской
                атмосферой и приватный VIP-кабинет для тех, кто ценит тишину
                и личное пространство. Записаться можно за минуту — через
                Telegram-бот.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <BookButton />
                <Link
                  to="/prices"
                  className="glass inline-flex items-center justify-center px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:border-gold/50 hover:text-gold"
                >
                  Смотреть цены
                </Link>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="/images/interior-arch.jpg"
                alt="Интерьер барбершопа Barberium"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <GlassCard className="absolute -bottom-6 -left-6 hidden p-6 sm:block" gold>
                <p className="font-display text-4xl text-gold">{SITE.rating}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  средний рейтинг гостей
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Почему именно мы */}
        <section className="relative overflow-hidden border-y border-border">
          <img
            src="/images/interior-chair-detail.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="photo-blur absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-24">
            <SectionTitle eyebrow="Почему именно мы" title="Работа, за которую не стыдно" />
            <div className="grid gap-6 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <GlassCard key={f.t} className="p-7">
                  <div className="h-px w-10 bg-gold" />
                  <h3 className="mt-5 font-display text-sm uppercase tracking-[0.2em]">{f.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Медийные лица */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle eyebrow="Гости" title="Медийные лица" />
          <div className="relative overflow-hidden">
            <img
              src="/images/guest-khusanov.jpg"
              alt="Абдукодир Хусанов в кресле барбершопа Barberium"
              loading="lazy"
              className="h-[480px] w-full object-cover object-top sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <GlassCard className="absolute inset-x-4 bottom-4 p-6 sm:inset-x-8 sm:bottom-8 sm:max-w-md sm:p-8">
              <p className="eyebrow">Визит</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase">Абдукодир Хусанов</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Игрок сборной Узбекистана и клуба «Манчестер Сити» доверил
                свой образ Barberium.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Работы */}
        <section id="works" className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle eyebrow="Портфолио" title="До и после" />
          <div className="grid gap-6 md:grid-cols-2">
            <BeforeAfter before="/images/ba1_before.jpg" after="/images/ba1_after.jpg" />
            <BeforeAfter before="/images/ba2_before.jpg" after="/images/ba2_after.jpg" />
          </div>
        </section>

        {/* Услуги и цены */}
        <section className="relative overflow-hidden border-y border-border">
          <img
            src="/images/interior-sink.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="photo-blur absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-24">
            <SectionTitle eyebrow="Услуги" title="Популярное" />
            <GlassCard className="p-6 sm:p-8">
              <ul>
                {POPULAR.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border/60 py-4 last:border-b-0"
                  >
                    <span className="text-sm sm:text-base">{p.name}</span>
                    <span className="whitespace-nowrap font-display text-sm text-gold">
                      {p.price} сум
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/prices"
                className="glass inline-flex items-center justify-center px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Смотреть весь прайс
              </Link>
              <BookButton />
            </div>
          </div>
        </section>

        {/* Интерьер */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle eyebrow="Интерьер" title="Пространство, созданное для деталей" />
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY.map((g) => (
              <figure key={g.src} className="group overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-2 eyebrow">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Отзывы */}
        <section className="relative overflow-hidden border-t border-border">
          <img
            src="/images/interior-hall-wide.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="photo-blur absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-24">
            <SectionTitle eyebrow="Отзывы" title="Что говорят гости" />
            <div className="mb-10 flex items-baseline gap-4">
              <span className="font-display text-5xl text-gold">{SITE.rating}</span>
              <span className="text-sm text-muted-foreground">
                ★ средняя оценка в Google, Yandex и 2GIS
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {REVIEWS.map((r) => (
                <GlassCard key={r.name} className="p-6">
                  <p className="text-sm text-muted-foreground">«{r.text}»</p>
                  <footer className="mt-4 font-display text-[11px] uppercase tracking-[0.24em]">
                    {r.name}
                  </footer>
                </GlassCard>
              ))}
            </div>
            <div className="mt-9">
              <GhostButton href={SITE.maps}>Все отзывы</GhostButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="h-16 md:hidden" />
    </div>
  );
}
