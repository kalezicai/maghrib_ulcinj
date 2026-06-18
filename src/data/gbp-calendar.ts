export interface GBPPost {
  week: number;
  language: "EN" | "BS" | "DE";
  title: string;
  body: string;
  labels: string[];
}

const enBase: Omit<GBPPost, "language">[] = [
  {
    week: 1,
    title: "Why Ulcinj is the Perfect Halal Holiday Destination",
    body: "Discover why Ulcinj's Old Town, family beaches, and rich Islamic heritage make it Montenegro's top destination for Muslim travellers. Hotel Maghrib offers the perfect base with halal dining and private spa facilities.",
    labels: ["Ulcinj", "Halal Travel", "Montenegro"],
  },
  {
    week: 2,
    title: "Private Spa Experience at Hotel Maghrib",
    body: "Our private spa can be booked exclusively for families, couples, or female guests — ensuring complete comfort and privacy. Enjoy the jacuzzi, sauna, and sea-view relaxation area without any sharing.",
    labels: ["Spa", "Wellness", "Luxury"],
  },
  {
    week: 3,
    title: "Family Beach Access — Direct from Our Hotel",
    body: "Hotel Maghrib offers direct access to a family/women-friendly beach section. No long walks through crowded areas — just steps from your room to the Adriatic. Safe, clean, and welcoming for all.",
    labels: ["Beach", "Family", "Ulcinj"],
  },
  {
    week: 4,
    title: "Halal Dining at Hotel Maghrib's Restaurant",
    body: "Our restaurant serves certified halal cuisine with a focus on fresh Mediterranean and local Montenegrin specialities. All ingredients are halal-certified, and no alcohol is served on the premises.",
    labels: ["Halal Food", "Restaurant", "Montenegrin Cuisine"],
  },
  {
    week: 5,
    title: "Exploring Ulcinj's Old Town — A Walking Guide",
    body: "From the 12th-century castle walls to the charming cobblestone streets, Ulcinj's Old Town is a treasure trove of history. Our hotel is located right in the heart of it — here's what to explore.",
    labels: ["Ulcinj Old Town", "History", "Walking Tour"],
  },
  {
    week: 6,
    title: "Ada Bojana — Europe's Most Unique Beach",
    body: "Just 15 minutes from Hotel Maghrib, Ada Bojana offers a unique triangle-island beach experience with excellent seafood restaurants, kite-surfing, and a relaxed atmosphere perfect for families.",
    labels: ["Ada Bojana", "Beach Day", "Kite Surfing"],
  },
  {
    week: 7,
    title: "Prayer Facilities at Hotel Maghrib",
    body: "Every room at Hotel Maghrib includes a Qibla direction marker, prayer mat, and a small copy of the Quran. We also provide prayer time schedules and can arrange nearby mosque visits during your stay.",
    labels: ["Prayer", "Islamic Facilities", "Convenience"],
  },
  {
    week: 8,
    title: "Why Choose a Muslim-Friendly Hotel in Montenegro",
    body: "Montenegro welcomed over 2 million tourists last year, but finding truly halal-friendly accommodation has been challenging — until now. Hotel Maghrib was designed specifically for Muslim travellers seeking both comfort and Islamic hospitality.",
    labels: ["Muslim Travel", "Montenegro", "Halal Hospitality"],
  },
  {
    week: 9,
    title: "Best Time to Visit Ulcinj with Family",
    body: "June through September offers the best beach weather, but May and October provide a quieter experience with pleasant temperatures and lower rates. Here's our month-by-month guide for family travellers.",
    labels: ["Travel Tips", "Best Time to Visit", "Family Travel"],
  },
  {
    week: 10,
    title: "Airport Transfers & Getting to Hotel Maghrib",
    body: "We offer private airport transfers from both Podgorica (TGD, 75 min) and Tivat (TIV, 90 min) airports. Female drivers available on request. Here's everything you need to know about arriving.",
    labels: ["Travel", "Airport Transfer", "Logistics"],
  },
  {
    week: 11,
    title: "Room Guide: Which Suite is Right for Your Family?",
    body: "From the Deluxe Sea View for couples to the Junior Family Suite with separate sleeping areas, find the perfect room for your stay at Hotel Maghrib. All rooms feature sea views or Old Town vistas.",
    labels: ["Accommodation", "Room Guide", "Suites"],
  },
  {
    week: 12,
    title: "What Our Guests Say — Real Reviews from Muslim Travellers",
    body: "Don't just take our word for it. Read authentic reviews from families, couples, and solo travellers who chose Hotel Maghrib for their halal-friendly stay in Ulcinj, Montenegro.",
    labels: ["Reviews", "Testimonials", "Guest Experience"],
  },
];

const bsBase: Omit<GBPPost, "language">[] = [
  {
    week: 1,
    title: "Zašto je Ulcinj savršena halal destinacija za odmor",
    body: "Otkrijte zašto Stari grad Ulcinj, porodične plaže i bogato islamsko naslijeđe čine Ulcinj najboljom destinacijom u Crnoj Gori za muslimanske putnike.",
    labels: ["Ulcinj", "Halal Putovanja", "Crna Gora"],
  },
  {
    week: 2,
    title: "Privatni spa doživljaj u Hotel Maghrib",
    body: "Naš privatni spa može se rezervisati isključivo za porodice, parove ili ženske grupe — potpuni komfor i privatnost uz jacuzzi, saunu i prostor za opuštanje sa pogledom na more.",
    labels: ["Spa", "Wellness", "Luksuz"],
  },
  {
    week: 3,
    title: "Porodična plaža — Direktan pristup iz hotela",
    body: "Hotel Maghrib nudi direktan pristup ženskoj/porodičnoj plaži. Samo nekoliko koraka od vaše sobe do Jadranskog mora. Sigurno, čisto i ugodno za sve.",
    labels: ["Plaža", "Porodica", "Ulcinj"],
  },
  {
    week: 4,
    title: "Halal restoran Hotel Maghrib",
    body: "Naš restoran služi certificiranu halal kuhinju sa fokusom na svježe mediteranske i lokalne crnogorske specijalitete. Bez alkohola u objektu.",
    labels: ["Halal Hrana", "Restoran", "Crnogorska Kuhinja"],
  },
  {
    week: 5,
    title: "Stari grad Ulcinj — Vodič za šetnju",
    body: "Od zidina iz 12. vijeka do šarmantnih kaldrmisanih ulica, Stari grad Ulcinj je riznica istorije. Naš hotel se nalazi u samom srcu — evo šta možete istražiti.",
    labels: ["Stari Grad", "Istorija", "Šetnja"],
  },
  {
    week: 6,
    title: "Ada Bojana — Najjedinstvenija plaža Evrope",
    body: "Samo 15 minuta od Hotela Maghrib, Ada Bojana nudi jedinstveno iskustvo ostrvske plaže sa odličnim ribljim restoranima i opuštenom atmosferom.",
    labels: ["Ada Bojana", "Plaža", "Kite Surfing"],
  },
  {
    week: 7,
    title: "Namaz u Hotel Maghrib",
    body: "Svaka soba u Hotel Maghrib uključuje oznaku za Kiblu, sedžadu i primjerak Kur'ana. Obezbjeđujemo i raspored namaza i posjete obližnjim džamijama.",
    labels: ["Namaz", "Islamski Sadržaji", "Pogodnosti"],
  },
  {
    week: 8,
    title: "Zašto odabrati muslimanski-friendly hotel u Crnoj Gori",
    body: "Hotel Maghrib je dizajniran posebno za muslimanske putnike koji traže i udobnost i islamsko gostoprimstvo.",
    labels: ["Muslimanska Putovanja", "Crna Gora", "Halal"],
  },
  {
    week: 9,
    title: "Najbolje vrijeme za posjetu Ulcinja sa porodicom",
    body: "Od juna do septembra je najbolje vrijeme za plažu, dok maj i oktobar nude mirnije iskustvo sa ugodnim temperaturama i nižim cijenama.",
    labels: ["Putnički Savjeti", "Porodična Putovanja"],
  },
  {
    week: 10,
    title: "Transfer sa aerodroma do Hotela Maghrib",
    body: "Organizujemo privatni transfer sa aerodroma Podgorica (TGD, 75 min) i Tivat (TIV, 90 min). Mogućnost vozačice na zahtjev.",
    labels: ["Putovanje", "Transfer", "Logistika"],
  },
  {
    week: 11,
    title: "Vodič kroz sobe — Koji apartman odgovara vašoj porodici?",
    body: "Od Deluxe Sea View za parove do Junior Family Suite sa odvojenim prostorom za spavanje — pronađite savršenu sobu za vaš boravak u Hotel Maghrib.",
    labels: ["Smještaj", "Sobe", "Apartmani"],
  },
  {
    week: 12,
    title: "Šta kažu naši gosti — Recenzije muslimanskih putnika",
    body: "Pročitajte autentične recenzije porodica i parova koji su odabrali Hotel Maghrib za svoj halal-friendly boravak u Ulcinju.",
    labels: ["Recenzije", "Utisci Gostiju"],
  },
];

const deBase: Omit<GBPPost, "language">[] = [
  {
    week: 1,
    title: "Warum Ulcinj das perfekte Halal-Reiseziel ist",
    body: "Entdecken Sie, warum Ulcinjs Altstadt, Familienstrände und islamisches Erbe es zum Top-Reiseziel in Montenegro für muslimische Reisende machen.",
    labels: ["Ulcinj", "Halal Reisen", "Montenegro"],
  },
  {
    week: 2,
    title: "Privates Spa-Erlebnis im Hotel Maghrib",
    body: "Unser privater Spa kann exklusiv für Familien, Paare oder weibliche Gäste gebucht werden — mit Whirlpool, Sauna und Meerblick-Entspannungsbereich.",
    labels: ["Spa", "Wellness", "Luxus"],
  },
  {
    week: 3,
    title: "Familienstrand — Direkter Zugang vom Hotel",
    body: "Hotel Maghrib bietet direkten Zugang zu einem familienfreundlichen Strandabschnitt. Nur wenige Schritte von Ihrem Zimmer zur Adria.",
    labels: ["Strand", "Familie", "Ulcinj"],
  },
  {
    week: 4,
    title: "Halal-Speisen im Restaurant des Hotel Maghrib",
    body: "Unser Restaurant serviert zertifizierte Halal-Küche mit mediterranen und lokalen montenegrinischen Spezialitäten. Kein Alkohol im Haus.",
    labels: ["Halal Essen", "Restaurant"],
  },
  {
    week: 5,
    title: "Ulcinjs Altstadt — Ein Spaziergang durch die Geschichte",
    body: "Von den Stadtmauern aus dem 12. Jahrhundert bis zu den charmanten Kopfsteinpflastergassen — unser Hotel liegt im Herzen der Altstadt.",
    labels: ["Altstadt", "Geschichte", "Stadtführung"],
  },
  {
    week: 6,
    title: "Ada Bojana — Europas einzigartigster Strand",
    body: "Nur 15 Minuten vom Hotel Maghrib entfernt bietet Ada Bojana ein einzigartiges Inselstrand-Erlebnis mit ausgezeichneten Fischrestaurants.",
    labels: ["Ada Bojana", "Strandtag"],
  },
  {
    week: 7,
    title: "Gebetsmöglichkeiten im Hotel Maghrib",
    body: "Jedes Zimmer verfügt über eine Qibla-Richtungsmarkierung, Gebetsteppich und eine kleine Ausgabe des Korans. Gebetszeiten und Moscheebesuche können arrangiert werden.",
    labels: ["Gebet", "Islamische Einrichtungen"],
  },
  {
    week: 8,
    title: "Warum ein muslimfreundliches Hotel in Montenegro wählen?",
    body: "Hotel Maghrib wurde speziell für muslimische Reisende entwickelt, die sowohl Komfort als auch islamische Gastfreundschaft suchen.",
    labels: ["Muslimisches Reisen", "Montenegro"],
  },
  {
    week: 9,
    title: "Beste Reisezeit für Ulcinj mit der Familie",
    body: "Juni bis September bietet das beste Strandwetter, Mai und Oktober sind ruhiger mit angenehmen Temperaturen und niedrigeren Preisen.",
    labels: ["Reisetipps", "Familienreisen"],
  },
  {
    week: 10,
    title: "Flughafentransfer & Anreise zum Hotel Maghrib",
    body: "Wir bieten private Transfers von Podgorica (TGD, 75 Min.) und Tivat (TIV, 90 Min.). Fahrerin auf Anfrage verfügbar.",
    labels: ["Anreise", "Transfer", "Logistik"],
  },
  {
    week: 11,
    title: "Zimmerguide — Welche Suite passt zu Ihrer Familie?",
    body: "Von der Deluxe Sea View für Paare bis zur Junior Family Suite mit separaten Schlafbereichen — finden Sie das perfekte Zimmer.",
    labels: ["Unterkunft", "Zimmer", "Suites"],
  },
  {
    week: 12,
    title: "Was unsere Gäste sagen — Echte Bewertungen",
    body: "Lesen Sie authentische Bewertungen von Familien und Paaren, die Hotel Maghrib für ihren halalfreundlichen Aufenthalt gewählt haben.",
    labels: ["Bewertungen", "Gästeerfahrungen"],
  },
];

export const gbpCalendar: GBPPost[] = [
  ...enBase.map((p) => ({ ...p, language: "EN" as const })),
  ...bsBase.map((p) => ({ ...p, language: "BS" as const })),
  ...deBase.map((p) => ({ ...p, language: "DE" as const })),
];

export function getWeekPosts(week: number): GBPPost[] {
  return gbpCalendar.filter((p) => p.week === week);
}

export function getLanguagePosts(language: "EN" | "BS" | "DE"): GBPPost[] {
  return gbpCalendar.filter((p) => p.language === language);
}
