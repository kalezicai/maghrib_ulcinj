// Compact NOAA/SunCalc-style solar position math.
// Used for the hotel's signature "Maghrib hour" — the sunset over Ulcinj.

const RAD = Math.PI / 180;
const J1970 = 2440588;
const J2000 = 2451545;
const DAY_MS = 86400000;
const OBLIQUITY = 23.4397 * RAD;

// Ulcinj, Montenegro — the hotel's hillside above the Adriatic.
export const ULCINJ = { lat: 41.9225, lng: 19.2161, timeZone: 'Europe/Podgorica' };

const toDays = (date: Date) => date.valueOf() / DAY_MS - 0.5 + J1970 - J2000;
const fromJulian = (j: number) => new Date((j + 0.5 - J1970) * DAY_MS);
const solarMeanAnomaly = (d: number) => RAD * (357.5291 + 0.98560028 * d);

function eclipticLongitude(m: number) {
  const center = RAD * (1.9148 * Math.sin(m) + 0.02 * Math.sin(2 * m) + 0.0003 * Math.sin(3 * m));
  return m + center + RAD * 102.9372 + Math.PI;
}

const declination = (l: number) => Math.asin(Math.sin(OBLIQUITY) * Math.sin(l));
const julianCycle = (d: number, lw: number) => Math.round(d - 0.0009 - lw / (2 * Math.PI));
const approxTransit = (ht: number, lw: number, n: number) => 0.0009 + (ht + lw) / (2 * Math.PI) + n;
const solarTransitJ = (ds: number, m: number, l: number) => J2000 + ds + 0.0053 * Math.sin(m) - 0.0069 * Math.sin(2 * l);

function hourAngle(h: number, phi: number, dec: number) {
  const cos = (Math.sin(h) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec));
  return Math.acos(Math.min(1, Math.max(-1, cos)));
}

export interface SunTimes {
  sunrise: Date;
  sunset: Date;
  /** 0 at sunrise, 1 at sunset, clamped outside daylight hours. */
  progress: number;
  isDaylight: boolean;
  hasSet: boolean;
}

export function sunTimes(date: Date, lat = ULCINJ.lat, lng = ULCINJ.lng): SunTimes {
  const lw = -lng * RAD;
  const phi = lat * RAD;
  const d = toDays(date);
  const n = julianCycle(d, lw);
  const ds = approxTransit(0, lw, n);
  const m = solarMeanAnomaly(ds);
  const l = eclipticLongitude(m);
  const dec = declination(l);
  const noon = solarTransitJ(ds, m, l);
  // -0.833 degrees accounts for atmospheric refraction and the solar disc.
  const w = hourAngle(-0.833 * RAD, phi, dec);
  const setJ = solarTransitJ(approxTransit(w, lw, n), m, l);

  const sunset = fromJulian(setJ);
  const sunrise = fromJulian(noon - (setJ - noon));
  const span = sunset.valueOf() - sunrise.valueOf();
  const elapsed = date.valueOf() - sunrise.valueOf();
  const progress = span > 0 ? Math.min(1, Math.max(0, elapsed / span)) : 0;

  return {
    sunrise,
    sunset,
    progress,
    isDaylight: date >= sunrise && date <= sunset,
    hasSet: date > sunset,
  };
}

export function formatUlcinjTime(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: ULCINJ.timeZone,
  }).format(date);
}
