const GREETINGS = [
  { text: 'Mirë se vini', lang: 'sq' },
  { text: 'أهلاً وسهلاً', lang: 'ar' },
  { text: 'Dobrodošli', lang: 'bs' },
  { text: 'Hoş geldiniz', lang: 'tr' },
  { text: 'Herzlich willkommen', lang: 'de' },
  { text: 'Welcome', lang: 'en' },
];

/**
 * Our hosts greet guests in each of these languages every season.
 * Duplicated once so the marquee can loop seamlessly.
 */
export default function WelcomeRibbon() {
  return (
    <div className="welcome-ribbon" aria-label="Welcome, in the languages spoken by our hosts">
      <div className="ribbon-track">
        {[0, 1].map((copy) => (
          <div className="ribbon-run" key={copy} aria-hidden={copy === 1}>
            {GREETINGS.map((greeting) => (
              <span className="ribbon-item" key={`${copy}-${greeting.lang}`}>
                <span lang={greeting.lang} dir={greeting.lang === 'ar' ? 'rtl' : undefined}>
                  {greeting.text}
                </span>
                <i aria-hidden="true">&#10022;</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
