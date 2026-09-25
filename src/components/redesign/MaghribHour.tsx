import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Khatim, Rule } from './Brand';
import { formatUlcinjTime, sunTimes } from '@/lib/sun';

const ARC = { cx: 160, cy: 116, rx: 150, ry: 96 };

function pointOnArc(progress: number) {
  const angle = Math.PI * Math.min(1, Math.max(0, progress));
  return {
    x: ARC.cx - ARC.rx * Math.cos(angle),
    y: ARC.cy - ARC.ry * Math.sin(angle),
  };
}

export default function MaghribHour() {
  const reducedMotion = useReducedMotion();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  const sun = useMemo(() => sunTimes(now), [now]);
  const sunPoint = pointOnArc(sun.progress);
  const daylightMinutes = Math.round((sun.sunset.valueOf() - sun.sunrise.valueOf()) / 60000);
  const untilSunset = Math.round((sun.sunset.valueOf() - now.valueOf()) / 60000);

  const status = sun.hasSet
    ? 'The sun has slipped below the Adriatic. The terrace stays open all night.'
    : sun.isDaylight
      ? untilSunset > 90
        ? `About ${Math.floor(untilSunset / 60)}h ${untilSunset % 60}m of daylight left over the bay.`
        : `Golden hour is close — around ${untilSunset} minutes until the sun meets the sea.`
      : 'Dawn is on its way. The kettle in your room is always ready.';

  return (
    <section id="maghrib-hour" className="maghrib-hour" aria-labelledby="maghrib-hour-title">
      <div className="hour-texture" aria-hidden="true" />
      <div className="hour-glow" aria-hidden="true" />
      <div className="page-width hour-inner">
        <div className="hour-copy">
          <p className="eyebrow"><Khatim className="eyebrow-star" />THE HOUR WE ARE NAMED FOR</p>
          <h2 id="maghrib-hour-title">
            <span lang="ar" dir="rtl" className="arabic-accent">مغرب</span>
            Maghrib
            <em>the sunset.</em>
          </h2>
          <p className="hour-description">
            In Arabic, <em>maghrib</em> is the moment the sun meets the horizon, and the prayer that follows it.
            From our hillside, that moment arrives over the open Adriatic. Every evening, the terrace turns gold.
          </p>
          <Rule className="hour-rule" />
          <dl className="hour-figures">
            <div>
              <dt>Sunset today in Ulcinj</dt>
              <dd>{formatUlcinjTime(sun.sunset)}</dd>
            </div>
            <div>
              <dt>First light</dt>
              <dd>{formatUlcinjTime(sun.sunrise)}</dd>
            </div>
            <div>
              <dt>Hours of Adriatic sun</dt>
              <dd>{Math.floor(daylightMinutes / 60)}<span>h</span> {daylightMinutes % 60}<span>m</span></dd>
            </div>
          </dl>
          <p className="hour-note">
            Astronomical times for Ulcinj, updating live. Daily prayer times are posted at reception and in our Masjid.
          </p>
        </div>

        <div className="hour-visual">
          <svg viewBox="0 0 320 132" className="sun-arc" role="img" aria-label={`The sun's path over Ulcinj today. ${status}`}>
            <path d={`M${ARC.cx - ARC.rx},${ARC.cy} A${ARC.rx},${ARC.ry} 0 0 1 ${ARC.cx + ARC.rx},${ARC.cy}`} className="arc-track" />
            <motion.path
              d={`M${ARC.cx - ARC.rx},${ARC.cy} A${ARC.rx},${ARC.ry} 0 0 1 ${ARC.cx + ARC.rx},${ARC.cy}`}
              className="arc-travelled"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: sun.progress }}
              transition={{ duration: reducedMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <line x1="2" y1={ARC.cy} x2="318" y2={ARC.cy} className="arc-horizon" />
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: sunPoint.x, y: sunPoint.y }}
              transition={{ duration: reducedMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <circle r="15" className="sun-halo" />
              <circle r="7" className="sun-body" />
            </motion.g>
          </svg>
          <p className="hour-status">{status}</p>
        </div>
      </div>
    </section>
  );
}
