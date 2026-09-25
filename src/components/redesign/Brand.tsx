import type { ReactNode } from 'react';

/**
 * The Maghrib identity kit.
 * The name means "sunset" in Arabic, so the marks are built from a sun
 * descending behind a pointed arch, paired with the eight-point khatim star.
 */

export function Monogram({ className = '' }: { className?: string }) {
  return (
    <svg className={`monogram ${className}`} viewBox="0 0 56 62" fill="none" aria-hidden="true">
      <path
        d="M4 60V26C4 13.8 14.7 2 28 2s24 11.8 24 24v34"
        stroke="currentColor"
        strokeWidth="1.15"
        className="monogram-arch"
      />
      <circle cx="28" cy="33" r="9.5" stroke="currentColor" strokeWidth="1.15" className="monogram-sun" />
      <path d="M13 42h30M17 48h22M22 54h12" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path
        d="M28 14v5M16.2 18.8l2.7 3.3M39.8 18.8l-2.7 3.3M9 30.5h4M43 30.5h4"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        className="monogram-rays"
      />
    </svg>
  );
}

/** Kept for existing imports across the booking and detail views. */
export const SunMark = Monogram;

export function Khatim({ className = '' }: { className?: string }) {
  return (
    <svg className={`khatim ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0.8l2.6 5.9 5.9-2.6-2.6 5.9 5.9 2.6-5.9 2.6 2.6 5.9-5.9-2.6L12 23.2l-2.6-5.9-5.9 2.6 2.6-5.9L0.2 11.4l5.9-2.6-2.6-5.9 5.9 2.6z"
        fill="currentColor"
      />
    </svg>
  );
}

/** A hairline rule with the khatim star set into it. */
export function Rule({ className = '' }: { className?: string }) {
  return (
    <span className={`gold-rule ${className}`} aria-hidden="true">
      <i />
      <Khatim />
      <i />
    </span>
  );
}

export function Eyebrow({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <p className="eyebrow">
      <Khatim className="eyebrow-star" />
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}

/** Hairline arch that sits behind or beside an arch-cropped photograph. */
export function ArchOutline({ className = '' }: { className?: string }) {
  return (
    <svg className={`arch-outline ${className}`} viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,1 L0,0.46 C0.015,0.225 0.235,0.035 0.5,0 C0.765,0.035 0.985,0.225 1,0.46 L1,1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Rotating maker's seal used in the closing panel. */
export function Seal({ className = '' }: { className?: string }) {
  return (
    <svg className={`seal ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="seal-path" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
      <circle cx="100" cy="100" r="61" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
      <text className="seal-text" fill="currentColor">
        <textPath href="#seal-path" startOffset="0">
          HOTEL MAGHRIB &nbsp;&#10022;&nbsp; ULCINJ, MONTENEGRO &nbsp;&#10022;&nbsp; HALAL HOSPITALITY &nbsp;&#10022;&nbsp;
        </textPath>
      </text>
    </svg>
  );
}

/** Shared clip path so every arch-cropped photograph matches exactly. */
export function BrandDefs() {
  return (
    <svg className="brand-defs" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="maghrib-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.46 C0.015,0.225 0.235,0.035 0.5,0 C0.765,0.035 0.985,0.225 1,0.46 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Brand({ footer = false, onNavigate }: { footer?: boolean; onNavigate?: () => void }) {
  return (
    <a className={`brand ${footer ? 'brand--footer' : ''}`} href="#home" onClick={onNavigate} aria-label="Hotel Maghrib home">
      <Monogram className="brand-symbol" />
      <span className="brand-type">
        <span className="brand-name">MAGHRIB</span>
        <span className="brand-location">
          <i />HOTEL<span>&#10022;</span>ULCINJ<i />
        </span>
      </span>
    </a>
  );
}
