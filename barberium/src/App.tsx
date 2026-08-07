const services = [
  { name: "Мужская стрижка", desc: "Консультация, мытьё, укладка", price: "от 80 000 сум" },
  { name: "Стрижка + борода", desc: "Полный образ под ключ", price: "от 130 000 сум" },
  { name: "Моделирование бороды", desc: "Опасная бритва, горячее полотенце", price: "от 60 000 сум" },
  { name: "Детская стрижка", desc: "Спокойно и аккуратно", price: "от 60 000 сум" },
  { name: "Королевское бритьё", desc: "Классика с уходом", price: "от 90 000 сум" },
  { name: "VIP-кабинка", desc: "Приватный зал и полный сервис", price: "от 200 000 сум" },
];

const reviews = [
  { name: "Мухаммад Давлатбаев", text: "Отличное место, подстригли отлично, стригся в вип кабинке." },
  { name: "Бобуршох Ахмадалиев", text: "Меня постриг Нозим, бомбовый чел :) 10000% рекомендую." },
  { name: "Umar Majidov", text: "Рекомендую, профессиональные услуги." },
  { name: "Ahmed Abdelrahman", text: "Профессионально и аккуратно, приятный персонал." },
];

const branches = [
  {
    title: "Филиал №1",
    address: "Islom Karimov koʻchasi, 8",
    metro: "метро «Xalqlar Doʻstligi»",
    phone: "+998 77 232 77 34",
    tel: "+998772327734",
    lat: 41.3107497,
    lng: 69.2455985,
    mapUrl: "https://maps.app.goo.gl/7SaDWdn3B7xdgBXq7",
  },
  {
    title: "Филиал №2",
    address: "Шайхантахурский р-н, Bunyodkor shoh koʻchasi, 4",
    metro: "метро «Xalqlar Doʻstligi»",
    phone: "+998 77 203 77 34",
    tel: "+998772037734",
    lat: 41.3104972,
    lng: 69.2390971,
    mapUrl:
      "https://www.google.com/maps/place/Barbershop+Barberium/@41.3104972,69.2365222,17z",
  },
];

function BranchMap({ lat, lng, title }: { lat: number; lng: number; title: string }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border">
      <iframe
        src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
        width="100%"
        height="220"
        style={{ border: 0, display: "block", filter: "grayscale(0.2) contrast(1.05)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Карта — ${title}`}
      />
    </div>
  );
}

function App() {
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Логотип Barberium" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display text-sm font-extrabold tracking-tight">barberium</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-primary">Услуги</a>
            <a href="#interior" className="transition-colors hover:text-primary">Интерьер</a>
            <a href="#reviews" className="transition-colors hover:text-primary">Отзывы</a>
            <a href="#contacts" className="transition-colors hover:text-primary">Контакты</a>
          </nav>
          <a href="#contacts" className="btn-gold !px-5 !py-2.5 !text-xs">Записаться</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end pb-16 pt-28">
        <div className="hero-media">
          <img src="/images/interior.jpg" alt="Интерьер барбершопа Barberium в Ташкенте" className="hero-img" />
          <div className="hero-grain" />
          <div className="hero-vignette" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <p className="rise text-xs uppercase tracking-[0.35em] text-primary">Ташкент · 2 филиала</p>
          <h1 className="rise mt-5 text-5xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl">
            Мужская
            <br />
            стрижка
            <br />
            <span className="text-primary">без компромиссов</span>
          </h1>
          <p className="rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Barberium — барбершоп с рейтингом 4,8. Опытные мастера, VIP-кабинка и чистая
            работа до последнего волоска.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3">
            <a href="tel:+998772327734" className="btn-gold">Записаться сейчас</a>
            <a href="#services" className="btn-ghost">Услуги и цены</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-10 border-t border-border pt-7 text-sm">
            <div>
              <div className="font-display text-3xl font-bold text-primary">4,8</div>
              <div className="text-muted-foreground">рейтинг гостей</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">2</div>
              <div className="text-muted-foreground">филиала в городе</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">10:00</div>
              <div className="text-muted-foreground">— 21:00 ежедневно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Услуги</h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          Прозрачные цены. Итоговая стоимость зависит от мастера и длины волос.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="surface-card p-7">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-6 font-display text-xl font-bold text-primary">{s.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="tel:+998772327734" className="btn-gold">Записаться на услугу</a>
        </div>
      </section>

      {/* Interior */}
      <section id="interior" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Интерьер</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          <img
            src="/images/interior.jpg"
            alt="Кресла и зеркала в зале Barberium"
            className="h-[420px] w-full rounded-3xl object-cover md:col-span-3"
            style={{ filter: "contrast(1.06) saturate(1.08)" }}
            loading="lazy"
          />
          <img
            src="/images/storefront.jpg"
            alt="Вход и вывеска барбершопа Barberium"
            className="h-[420px] w-full rounded-3xl object-cover md:col-span-2"
            style={{ filter: "contrast(1.06) saturate(1.08)" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Отзывы <span className="text-primary">4,8</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="surface-card p-7">
                <div className="text-primary">★★★★★</div>
                <blockquote className="mt-4 text-base leading-relaxed">«{r.text}»</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Контакты</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {branches.map((b) => (
            <div key={b.title} className="surface-card p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{b.title}</p>
              <h3 className="mt-4 text-xl font-semibold">{b.address}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.metro}</p>
              <p className="mt-4 text-sm text-muted-foreground">Ежедневно 10:00 — 21:00</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${b.tel}`} className="btn-gold !px-6 !py-3 !text-sm">{b.phone}</a>
                <a href={b.mapUrl} target="_blank" rel="noreferrer" className="btn-ghost !px-6 !py-3 !text-sm">
                  Открыть в Google Maps
                </a>
              </div>
              <BranchMap lat={b.lat} lng={b.lng} title={b.title} />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <img src="/images/logo.jpg" alt="Barberium" className="h-10 w-10 rounded-md object-cover" />
          <p className="text-sm text-muted-foreground">
            Barberium — барбершоп в Ташкенте · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
