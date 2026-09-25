"use client";

/**
 * The Redesign home page, ported from `Redesign/src/App.tsx` as client
 * components so all Motion animations keep working. The home route (src/app/page.tsx)
 * composes these sections server-side and passes them as children.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight,
  MapPin, Phone, Mail, Minus, Pause, Play, Plus, Star,
} from "lucide-react";
import Link from "next/link";
import Brand, { ArchOutline, BrandDefs, Eyebrow, Khatim, Monogram, Rule, Seal } from "./Brand";
import Booking, { SpaBooking } from "./Booking";
import Gallery from "./Gallery";
import HotelImage from "./HotelImage";
import MaghribHour from "./MaghribHour";
import Modal from "./BookingModal";
import SuiteDetails from "./SuiteDetails";
import WelcomeRibbon from "./WelcomeRibbon";
import { formatUlcinjTime, sunTimes } from "@/lib/sun";
import {
  experiences, heroPhoto, HOTEL_EMAIL, HOTEL_PHONE, MAP_LINK, PHONE_LINK,
  photo, reviews, suites, whatsappLink, type Suite,
} from "@/data/redesign/hotel";

type Overlay =
  | { type: "booking"; suite?: Suite }
  | { type: "suite"; suite: Suite }
  | { type: "gallery"; photo?: number }
  | { type: "spa" | "menu" | "story" | "reviews" | "ramadan" | "terms" };

const overlayLabels: Record<Exclude<Overlay, null>["type"], string> = {
  booking: "Reservation inquiry", suite: "Room details", gallery: "Hotel photo gallery",
  spa: "Private spa concierge", menu: "Navigation menu", story: "The Maghrib story",
  reviews: "Guest stories", ramadan: "Ramadan at Maghrib", terms: "Reservation information",
};

const sectionNav = [
  { label: "The Hotel", href: "#the-hotel" },
  { label: "Rooms & Suites", href: "#suites" },
  { label: "The Experience", href: "#experience" },
  { label: "Private Spa", href: "#spa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Ulcinj", href: "#ulcinj" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ArchPhoto({ src, alt, className = "", caption }: { src: string; alt: string; className?: string; caption?: string }) {
  return (
    <div className={`arch-photo ${className}`}>
      <ArchOutline className="arch-photo-frame" />
      <div className="arch-photo-crop">
        <HotelImage src={src} alt={alt} loading="lazy" />
      </div>
      {caption && <span className="arch-photo-caption"><Khatim />{caption}</span>}
    </div>
  );
}

function GuestStories() {
  const [filter, setFilter] = useState("All stays");
  const visible = filter === "All stays" ? reviews : reviews.filter((review) => review.group === filter);
  return (
    <div className="info-content review-dialog">
      <p className="eyebrow"><Khatim className="eyebrow-star" />IN OUR GUESTS&rsquo; WORDS</p>
      <h2>A warm welcome.<br /><em>A lasting impression.</em></h2>
      <p className="form-description">Guest stories shared about Hotel Maghrib, Ulcinj.</p>
      <div className="gallery-filters" role="group" aria-label="Filter guest stories">
        {["All stays", "Family", "Vacation", "Couple", "Friends"].map((item) => (
          <button key={item} aria-pressed={filter === item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      {visible.map((review) => (
        <article className="full-review" key={review.name}>
          <p>&ldquo;{review.full}&rdquo;</p>
          <div><strong>{review.name}</strong><span>{review.group} stay / Google review collection</span></div>
        </article>
      ))}
    </div>
  );
}

function Information({ type, onBook }: { type: "story" | "ramadan" | "terms"; onBook: () => void }) {
  return (
    <div className="info-content">
      <Monogram className="form-sun" />
      {type === "story" && (
        <>
          <p className="eyebrow"><Khatim className="eyebrow-star" />THE MAGHRIB WAY</p>
          <h2>Where faith and comfort<br /><em>find their harmony.</em></h2>
          <p className="drop-cap">Built high on a serene hill overlooking the glowing Adriatic Sea, <strong>Hotel Maghrib</strong> is a sanctuary of conservative family hospitality in Ulcinj. Flanked by the iconic, oxygen-rich Mediterranean pine trees (Borici) and located just moments from the soft sands of Small Beach (Mala Plaza), we offer an environment of absolute peace, pristine hygiene, and warm hospitality.</p>
          <p>As experienced global travelers, we understand how challenging it can be to find luxury accommodations that seamlessly honor your religious lifestyle. At Hotel Maghrib, everything is curated to fulfill your needs: from a 100% halal-certified breakfast buffet and an entirely alcohol-free environment to an onsite Masjid (Prayer Room) and clear Qibla indicators in every guest room.</p>
          <p>Our hotel stands out for its high-tech cleanliness, exceptional hospitality from our hosts, Abdullah, Jahja, Arjan, and the manager, and a beautiful, spacious dining terrace that is open to guests 24 hours a day to sit and absorb the cooling breeze and breathtaking sea views.</p>
          <p><em>Maghrib</em> means the sunset, or the West, in Arabic. A name that feels perfectly at home here, where the sun meets the Adriatic.</p>
          <button className="button button--rust" onClick={onBook}>Find your place at Maghrib <ArrowRight size={16} /></button>
        </>
      )}
      {type === "ramadan" && (
        <>
          <p className="eyebrow"><Khatim className="eyebrow-star" />RAMADAN 2027 AT MAGHRIB</p>
          <h2>A blessed month.<br /><em>A peaceful place.</em></h2>
          <p>Spend the blessed month on Montenegro&rsquo;s beautiful coast with special iftar and suhoor packages, extended prayer facilities, and a peaceful family atmosphere.</p>
          <div className="ramadan-details">
            <h3>Daily iftar buffet</h3><p>Break your fast with a halal-certified buffet of traditional Balkan, Turkish, and international dishes, fresh dates, soups, grilled specialties, and traditional desserts.</p>
            <h3>Pre-dawn suhoor</h3><p>Early morning service with light, nutritious options: fresh pastries, fruits, yogurt, and traditional energy-boosting dishes.</p>
            <h3>Prayer and reflection</h3><p>Extended Masjid hours with Taraweeh prayers and separate prayer spaces for brothers and sisters. Sea-view balconies and Qibla direction markings in every room offer space for quiet reflection.</p>
            <h3>Private family wellness</h3><p>Inquire about exclusive evening use of the pool and sauna after iftar, special Ramadan package pricing, and extended checkout.</p>
          </div>
          <Link className="button button--rust" href="/ramadan" onClick={onBook}>Full Ramadan guide <ArrowRight size={16} /></Link>
        </>
      )}
      {type === "terms" && (
        <>
          <p className="eyebrow"><Khatim className="eyebrow-star" />BEFORE YOUR STAY</p>
          <h2>Thoughtful details.<br /><em>No surprises.</em></h2>
          <p>Room prices shown are starting nightly rates from the hotel&rsquo;s original website. Seasonal pricing, occupancy supplements, taxes, cancellation conditions, check-in times, and final availability must be confirmed directly with Hotel Maghrib.</p>
          <p>Submitting a prepared inquiry through WhatsApp or email is not a booking confirmation. No payment is collected by this website. Your reservation is confirmed only after the hotel responds and you agree to its reservation terms.</p>
          <p>Private spa times are preferences, not real-time inventory. The hotel must confirm the time, exclusivity, and any applicable charges. Published wellness hours may change, so please check with reception.</p>
          <p>Sunrise and sunset times are calculated astronomically for Ulcinj. Daily prayer times are posted at the hotel and should be confirmed locally.</p>
          <a className="text-link" href={PHONE_LINK}>Speak with our team <ArrowUpRight size={15} /></a>
        </>
      )}
    </div>
  );
}

function Hero({ onBook, inactive, sunsetLabel }: { onBook: () => void; inactive: boolean; sunsetLabel: string }) {
  const slides = [
    { src: heroPhoto, alt: "Hotel Maghrib, 100% halal hotel in Ulcinj Montenegro, glowing in the evening light among the pines", position: "center 54%" },
    { src: photo(10), alt: "The sunlit open-air sea-view dining terrace at Hotel Maghrib in Ulcinj", position: "center 55%" },
    { src: photo(58), alt: "A private Hotel Maghrib balcony overlooking the Adriatic Sea", position: "center 52%" },
  ];
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const remainingTime = useRef(9000);
  const previousSlide = useRef(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    [10, 58].forEach((number) => {
      const image = new Image();
      image.fetchPriority = "low";
      image.src = photo(number);
    });
  }, []);

  useEffect(() => {
    if (previousSlide.current !== slide) {
      remainingTime.current = 9000;
      previousSlide.current = slide;
    }
    if (paused || reducedMotion || inactive) return;
    const started = Date.now();
    const timer = window.setTimeout(() => setSlide((current) => (current + 1) % slides.length), remainingTime.current);
    return () => {
      window.clearTimeout(timer);
      remainingTime.current = Math.max(0, remainingTime.current - (Date.now() - started));
    };
  }, [slide, paused, reducedMotion, inactive, slides.length]);

  const entrance = (delay: number) => ({
    initial: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.05, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section className="hero" ref={ref} aria-label="Welcome to Hotel Maghrib, Ulcinj">
      <motion.div className="hero-media" style={{ y: reducedMotion ? 0 : imageY }}>
        <AnimatePresence>
          <motion.div
            className="hero-photo"
            key={slide}
            initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: reducedMotion ? 0 : 1.2 }, scale: { duration: 11, ease: "linear" } }}
          >
            <HotelImage src={slides[slide].src} alt={slides[slide].alt} fetchPriority={slide === 0 ? "high" : "auto"} style={{ objectPosition: slides[slide].position }} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grain" />

      <motion.div className="hero-content page-width" style={reducedMotion ? undefined : { y: contentY, opacity: contentFade }}>
        <motion.div {...entrance(0.12)}><Monogram className="hero-monogram" /></motion.div>
        <motion.p className="hero-arabic" lang="ar" dir="rtl" {...entrance(0.2)}>مغرب</motion.p>
        <motion.div {...entrance(0.28)}><Rule className="hero-rule" /></motion.div>
        <motion.h1 {...entrance(0.36)}>MAGHRIB</motion.h1>
        <motion.p className="hero-headline" {...entrance(0.48)}>Where coastal peace <em>meets pure devotion.</em></motion.p>
        <motion.p className="hero-description" {...entrance(0.6)}>
          A hillside sanctuary above the Adriatic in Ulcinj, Montenegro. Sea-view suites, wholly halal kitchens,
          and a stillness that belongs to your family alone.
        </motion.p>
        <motion.div className="hero-actions" {...entrance(0.72)}>
          <button className="button button--gold" onClick={onBook}>Reserve your stay <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          <a className="hero-explore" href="#the-hotel">Discover Maghrib <ArrowRight size={16} strokeWidth={1.5} /></a>
        </motion.div>
      </motion.div>

      <div className="hero-bottom page-width">
        <a className="scroll-cue" href="#the-hotel"><span className="scroll-line"><ArrowDown size={15} strokeWidth={1.4} /></span>A SLOWER PACE AWAITS</a>
        <p className="hero-sunset"><Khatim />TONIGHT&rsquo;S MAGHRIB IN ULCINJ<strong>{sunsetLabel}</strong></p>
        <div className="hero-controls" aria-label="Hotel photograph slideshow">
          <span className="hero-slide-number">0{slide + 1}<span> / 03</span></span>
          <div className="hero-progress" aria-hidden="true"><span key={slide} style={{ animationPlayState: paused || reducedMotion || inactive ? "paused" : "running" }} /></div>
          <button className="hero-arrow" aria-label="Previous hotel photograph" onClick={() => setSlide((slide + 2) % 3)}><ChevronLeft size={18} strokeWidth={1.4} /></button>
          <button className="hero-arrow" aria-label="Next hotel photograph" onClick={() => setSlide((slide + 1) % 3)}><ChevronRight size={18} strokeWidth={1.4} /></button>
          {!reducedMotion && <button className="hero-pause" aria-label={paused ? "Play hotel slideshow" : "Pause hotel slideshow"} onClick={() => setPaused(!paused)}>{paused ? <Play size={11} /> : <Pause size={11} />}</button>}
        </div>
      </div>
    </section>
  );
}

export default function HomeSections() {
  const [overlay, setOverlay] = useState<Overlay | null>(null);
  const [activeSuite, setActiveSuite] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const suite = suites[activeSuite];
  const experience = experiences[activeExperience];
  const review = reviews[reviewIndex];
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  const sunsetLabel = useMemo(() => formatUlcinjTime(sunTimes(new Date()).sunset), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`); });
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    sectionNav.forEach((item) => { const section = document.querySelector(item.href); if (section) observer.observe(section); });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  function closeOverlay() {
    setOverlay(null);
  }

  function chooseSuite(index: number) {
    setActiveSuite(index);
    document.getElementById(`suite-tab-${index}`)?.focus({ preventScroll: true });
  }

  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div id="home" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Brand onNavigate={closeOverlay} />
          <nav className="desktop-nav" aria-label="Main navigation">
            {sectionNav.map((item) => (
              <a key={item.href} className={activeSection === item.href && scrolled ? "is-active" : ""} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <p className="header-sunset"><span>SUNSET IN ULCINJ</span><strong>{sunsetLabel}</strong></p>
            <button className="button button--rust header-reserve" onClick={() => setOverlay({ type: "booking" })}>
              <span className="reserve-desktop">Reserve your stay</span><span className="reserve-mobile">Reserve</span><ArrowUpRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <motion.div className="scroll-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
      </header>

      <main id="main-content">
        <Hero inactive={Boolean(overlay)} sunsetLabel={sunsetLabel} onBook={() => setOverlay({ type: "booking" })} />
        <WelcomeRibbon />

        <section id="the-hotel" className="story-section page-width section-space">
          <Reveal className="story-copy">
            <Eyebrow number="01">THE MAGHRIB WAY</Eyebrow>
            <h2>A slower pace.<br />A deeper sense<br /><em>of belonging.</em></h2>
            <p className="body-copy drop-cap">High on the pine-scented hills of Ulcinj, overlooking the endless Adriatic, there is a place where your comfort and your values feel equally at home.</p>
            <p className="body-copy">Welcome to Hotel Maghrib. A family sanctuary shaped by warm hospitality, thoughtful halal living, and the simple luxury of feeling completely at ease.</p>
            <button className="text-link" onClick={() => setOverlay({ type: "story" })}>Discover our story <ArrowUpRight size={17} strokeWidth={1.5} /></button>
            <div className="story-signature">
              <Monogram />
              <span>THOUGHTFULLY HOSTED.<br />NATURALLY SERENE.</span>
            </div>
          </Reveal>
          <Reveal className="story-visual" delay={0.14}>
            <ArchPhoto
              src={photo(58)}
              alt="A private balcony with two chairs, a table, and a beautiful Adriatic sea view at Hotel Maghrib"
              caption="Just you, the sea, and a little stillness."
            />
            <span className="story-image-note">THE ART OF FEELING AT HOME</span>
          </Reveal>
        </section>

        <MaghribHour />

        <section id="suites" className="suites-section section-space">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <Eyebrow number="02">ROOMS & SUITES</Eyebrow>
                <h2>Your own piece<br /><em>of the Adriatic.</em></h2>
              </div>
              <p className="body-copy">Light-filled spaces. Private sea-view balconies.<br />Every room is an invitation to stay a little longer.</p>
            </Reveal>
            <Reveal>
              <div className="suite-tabs" role="tablist" aria-label="Explore rooms and suites">
                {suites.map((item, index) => (
                  <button
                    key={item.id}
                    id={`suite-tab-${index}`}
                    className={index === activeSuite ? "is-active" : ""}
                    role="tab"
                    aria-selected={index === activeSuite}
                    aria-controls="suite-panel"
                    tabIndex={index === activeSuite ? 0 : -1}
                    onClick={() => setActiveSuite(index)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight") { event.preventDefault(); chooseSuite((activeSuite + 1) % suites.length); }
                      if (event.key === "ArrowLeft") { event.preventDefault(); chooseSuite((activeSuite + suites.length - 1) % suites.length); }
                      if (event.key === "Home") { event.preventDefault(); chooseSuite(0); }
                      if (event.key === "End") { event.preventDefault(); chooseSuite(suites.length - 1); }
                    }}
                  >
                    <span>0{index + 1}</span>{item.shortName}
                  </button>
                ))}
              </div>
              <div id="suite-panel" className="suite-preview" role="tabpanel" aria-labelledby={`suite-tab-${activeSuite}`}>
                <Link className="suite-preview-photo" href={`/rooms/${suite.seoSlug}`} aria-label={`Explore ${suite.name}`}>
                  <ArchOutline className="arch-photo-frame" />
                  <div className="suite-photo-crop">
                    <AnimatePresence mode="wait">
                      <motion.div key={suite.id} className="suite-preview-image" initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                        <HotelImage src={photo(suite.image)} alt={`${suite.name} with private sea-view balcony at Hotel Maghrib`} loading="lazy" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <span className="photo-explore"><ArrowUpRight size={20} strokeWidth={1.3} /></span>
                </Link>
                <AnimatePresence mode="wait">
                  <motion.div key={suite.id} className="suite-preview-copy" initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: 0.35 }}>
                    <p className="eyebrow"><Khatim className="eyebrow-star" />SEA-VIEW COLLECTION</p>
                    <h3>{suite.name}</h3>
                    <p className="suite-subtitle">{suite.subtitle}</p>
                    <div className="suite-specs"><span>{suite.size} m<sup>2</sup></span><i /><span>Up to {suite.guests} guests</span><i /><span>Sea view</span></div>
                    <p className="body-copy">{suite.description}</p>
                    <p className="suite-rate">From <strong>&euro;{suite.price}</strong><span> / night</span></p>
                    <Link className="button button--outline" href={`/rooms/${suite.seoSlug}`}>Explore this room <ArrowRight size={17} strokeWidth={1.5} /></Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
            <p className="suite-footnote"><Khatim />Every room. A private balcony. An uninterrupted sea view.<Khatim /></p>
          </div>
        </section>

        <section id="experience" className="experience-section section-space page-width">
          <Reveal className="experience-copy">
            <Eyebrow number="03">THE MAGHRIB EXPERIENCE</Eyebrow>
            <h2>Considered.<br /><em>In every detail.</em></h2>
            <p className="body-copy experience-intro">True luxury is knowing you do not have to compromise. On your comfort. On your values. On a single moment.</p>
            <div className="experience-accordion">
              {experiences.map((item, index) => (
                <div className={`experience-item ${index === activeExperience ? "is-active" : ""}`} key={item.title}>
                  <h3>
                    <button aria-expanded={index === activeExperience} aria-controls={`experience-panel-${index}`} onClick={() => setActiveExperience(index)}>
                      <Khatim className="experience-star" />
                      <span>{item.title}</span>
                      {index === activeExperience ? <Minus size={18} strokeWidth={1.3} /> : <Plus size={18} strokeWidth={1.3} />}
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {index === activeExperience && (
                      <motion.div id={`experience-panel-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}>
                        <p>{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link className="experience-page-link text-link" href="/experience">The complete halal experience <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
            </div>
          </Reveal>
          <Reveal className="experience-visual" delay={0.12}>
            <div className="experience-frame">
              <AnimatePresence mode="wait">
                <motion.div className="experience-photo" key={experience.image} initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                  <HotelImage src={photo(experience.image)} alt={experience.alt} loading="lazy" />
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="experience-caption"><Khatim />{experience.caption}</span>
          </Reveal>
        </section>

        <section id="spa" className="spa-section">
          <div className="spa-background"><HotelImage src={photo(55)} alt="The beautifully lit private indoor swimming pool of the Hotel Maghrib spa in Ulcinj" loading="lazy" /></div>
          <div className="spa-shade" />
          <div className="hour-texture" aria-hidden="true" />
          <Reveal className="spa-content page-width">
            <p className="eyebrow"><Khatim className="eyebrow-star" />WELLNESS, ON YOUR TERMS</p>
            <h2>A little stillness.<br /><em>All to yourself.</em></h2>
            <p>Our pool, cedar sauna, and jacuzzi.<br />Reserved for your family alone.</p>
            <button className="button button--gold" onClick={() => setOverlay({ type: "spa" })}>Plan your private spa moment <ArrowUpRight size={17} strokeWidth={1.5} /></button>
            <Link className="spa-hours-link" href="/spa">Discover our family-friendly spa hours <ArrowRight size={14} /></Link>
          </Reveal>
        </section>

        <section id="reviews" className="reviews-section section-space page-width">
          <Reveal>
            <p className="eyebrow"><Khatim className="eyebrow-star" />IN OUR GUESTS&rsquo; WORDS</p>
            <h2 className="sr-only">Guest reviews of the halal Hotel Maghrib in Ulcinj</h2>
            <div className="review-stars" aria-label="4.9 out of 5, from 136 Google reviews">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={1} />)}
              <span>4.9 / 5 ON GOOGLE &nbsp;&#10022;&nbsp; 136 REVIEWS</span>
            </div>
            <div className="review-stage" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={review.name} initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: 0.3 }}>
                  <blockquote>{review.excerpt}</blockquote>
                  <p className="review-author">{review.name}<span>{review.group} stay / Google guest review</span></p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="review-controls">
              <button className="icon-button" aria-label="Previous guest story" onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)}><ArrowLeft size={18} strokeWidth={1.3} /></button>
              <div className="review-dots">
                {reviews.map((item, index) => (
                  <button key={item.name} className={index === reviewIndex ? "is-active" : ""} aria-label={`Read ${item.name}'s review`} aria-pressed={index === reviewIndex} onClick={() => setReviewIndex(index)} />
                ))}
              </div>
              <button className="icon-button" aria-label="Next guest story" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}><ArrowRight size={18} strokeWidth={1.3} /></button>
            </div>
            <button className="text-link" onClick={() => setOverlay({ type: "reviews" })}>More guest stories <ArrowUpRight size={15} /></button>
          </Reveal>
        </section>

        <section id="gallery" className="gallery-section section-space">
          <div className="page-width">
            <Reveal className="section-heading">
              <div>
                <Eyebrow number="04">A GLIMPSE OF MAGHRIB</Eyebrow>
                <h2>Wish you<br /><em>were here.</em></h2>
              </div>
              <Link className="text-link" href="/gallery">Explore all photographs <ArrowUpRight size={17} /></Link>
            </Reveal>
            <div className="gallery-preview">
              {[
                { image: 10, title: "Unhurried mornings", category: "THE TERRACE" },
                { image: 32, title: "Room to exhale", category: "YOUR PRIVATE RETREAT" },
                { image: 19, title: "A quieter kind of luxury", category: "THE SPA SANCTUARY" },
              ].map((item, index) => (
                <Reveal key={item.image} className={`gallery-preview-item gallery-preview-item--${index}`} delay={index * 0.1}>
                  <Link href={`/gallery?photo=${item.image}`} aria-label={`View ${item.title} in the hotel gallery`}>
                    <div className="gallery-preview-photo">
                      <HotelImage src={photo(item.image)} alt={`${item.title} at the halal Hotel Maghrib in Ulcinj, Montenegro`} loading="lazy" />
                      <span className="photo-explore"><ArrowUpRight size={20} strokeWidth={1.3} /></span>
                    </div>
                    <span className="gallery-preview-category">{item.category}</span>
                    <span className="gallery-preview-title">{item.title}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ulcinj" className="location-section page-width section-space">
          <Reveal className="location-visual">
            <ArchPhoto src={photo(11)} alt="Open-air Mediterranean terrace at Hotel Maghrib in Ulcinj" caption="A different rhythm, on the Adriatic." />
          </Reveal>
          <Reveal className="location-copy" delay={0.1}>
            <Eyebrow number="05">OUR CORNER OF THE COAST</Eyebrow>
            <h2>Some places<br /><em>stay with you.</em></h2>
            <p className="body-copy">The scent of Mediterranean pines. The winding streets of the Old Town. The soft sands of Mala Plaza. Discover Ulcinj, a meeting of cultures, coastlines, and a beautifully slower way of life.</p>
            <div className="location-details">
              <details><summary>The beaches & the pines <Plus size={16} strokeWidth={1.3} /></summary><p>Find the beloved Small Beach (Mala Plaza) and oxygen-rich Borici pine forest near the hotel. Further along the coast, Velika Plaza offers a long sweep of sand and open Adriatic horizons.</p></details>
              <details><summary>A town with a thousand stories <Plus size={16} strokeWidth={1.3} /></summary><p>Explore the cobbled lanes and historic walls of Ulcinj&rsquo;s Old Town. Venture further to the olive groves of Valdanos and the waters of Ada Bojana. Our hosts will gladly help you plan a day out.</p></details>
              <details><summary>Getting here, effortlessly <Plus size={16} strokeWidth={1.3} /></summary><p>We can help arrange airport transfers from Podgorica (TGD) or Tivat (TIV). Private parking is available at the hotel. Mention your arrival details when you send your stay inquiry.</p></details>
            </div>
            <Link className="text-link" href="/ulcinj">The Ulcinj travel guide <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
          </Reveal>
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <Reveal className="closing-content">
            <div className="closing-seal">
              <Seal className={reducedMotion ? "" : "is-turning"} />
              <Monogram className="closing-monogram" />
            </div>
            <p className="eyebrow"><Khatim className="eyebrow-star" />YOUR ADRIATIC CHAPTER AWAITS</p>
            <h2>Come for the view.<br /><em>Stay for the feeling.</em></h2>
            <p>We look forward to making you feel at home.</p>
            <button className="button button--gold" onClick={() => setOverlay({ type: "booking" })}>Reserve your stay <ArrowUpRight size={17} strokeWidth={1.5} /></button>
          </Reveal>
        </section>
      </main>

      {overlay && (
        <Modal key={overlay.type} onClose={closeOverlay} label={overlayLabels[overlay.type]} variant={overlay.type === "gallery" || overlay.type === "suite" ? "wide" : overlay.type === "menu" ? "menu" : "standard"}>
          {overlay.type === "booking" && <Booking initialSuite={overlay.suite} />}
          {overlay.type === "spa" && <SpaBooking />}
          {overlay.type === "gallery" && <Gallery initialPhoto={overlay.photo} />}
          {overlay.type === "suite" && <SuiteDetails suite={overlay.suite} onBook={() => setOverlay({ type: "booking", suite: overlay.suite })} />}
          {overlay.type === "reviews" && <GuestStories />}
          {(overlay.type === "story" || overlay.type === "ramadan" || overlay.type === "terms") && (
            <Information type={overlay.type} onBook={() => setOverlay({ type: "booking" })} />
          )}
        </Modal>
      )}
    </>
  );
}

