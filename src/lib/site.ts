export const SITE = {
  name: "Barberium",
  phone: "+998 77 232-77-34",
  phoneHref: "tel:+998772327734",
  telegram: "https://t.me/Barberium_bot",
  instagram: "https://instagram.com/barberiumbarbershop",
  maps: "https://www.google.com/maps/search/?api=1&query=Barbershop+Barberium+Tashkent",
  address: "ул. Ислама Каримова, 8 / пр. Бунёдкор, 4, Ташкент",
  metro: "рядом с метро «Дружба народов» («Халқлар Дўстлиги»)",
  hours: "10:00–22:00, ежедневно",
  rating: "4.9",
};

export type Branch = {
  name: string;
  address: string;
  metro?: string;
  hours: string;
  mapsLink: string;
};

export const BRANCHES: Branch[] = [
  {
    name: "Филиал №1",
    address: "ул. Ислама Каримова, 8, Ташкент",
    metro: "рядом с метро «Дружба народов» («Халқлар Дўстлиги»)",
    hours: "10:00–22:00, ежедневно",
    mapsLink: "https://maps.app.goo.gl/qJYkwR18Xx4Nm8a97",
  },
  {
    name: "Филиал №2",
    address: "пр. Бунёдкор, 4, Ташкент",
    hours: "10:00–22:00, ежедневно",
    mapsLink: "https://maps.app.goo.gl/7A5KwezRyytYa2vE8?g_st=ac",
  },
];

export type PriceItem = { name: string; price: string };

export const STANDARD: PriceItem[] = [
  { name: "Мужская стрижка", price: "150 000" },
  { name: "Коррекция бороды", price: "70 000" },
  { name: "Детская стрижка", price: "100 000" },
  { name: "Комплекс «Отец и сын»", price: "220 000" },
  { name: "Окрашивание волос", price: "70 000" },
  { name: "Окрашивание бороды", price: "70 000" },
  { name: "Комплекс окрашивания (волосы + борода)", price: "120 000" },
  { name: "Оконтовка", price: "75 000" },
  { name: "Укладка", price: "75 000" },
  { name: "Свадебная причёска", price: "300 000" },
  { name: "Мытьё головы", price: "50 000" },
  { name: "Маска для лица", price: "70 000" },
  { name: "Чистка лица", price: "100 000" },
  { name: "Массаж (голова + плечо + рука)", price: "70 000" },
];

export const VIP: PriceItem[] = [
  { name: "Стрижка волос", price: "300 000" },
  { name: "Коррекция бороды", price: "150 000" },
  { name: "Оконтовка", price: "100 000" },
  { name: "Укладка", price: "100 000" },
  { name: "Окрашивание (волос и бороды)", price: "230 000" },
  { name: "Чистка лица", price: "150 000" },
  { name: "Маска для лица", price: "100 000" },
];

export const PRODUCTS: PriceItem[] = [
  { name: "Arren, профессиональный шампунь", price: "200 000" },
  { name: "American Crew, профессиональный шампунь 1L", price: "400 000" },
  { name: "Morgan's, матовая паста для укладки 100 г", price: "400 000" },
];

export const POPULAR: PriceItem[] = [
  { name: "Мужская стрижка", price: "150 000" },
  { name: "Коррекция бороды", price: "70 000" },
  { name: "Детская стрижка", price: "100 000" },
  { name: "Комплекс «Отец и сын»", price: "220 000" },
  { name: "Стрижка волос — VIP", price: "300 000" },
];
