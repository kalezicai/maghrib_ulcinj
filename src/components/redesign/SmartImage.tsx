"use client";

/**
 * Responsive image with build-time srcset.
 *
 * Static export cannot optimize images per-request, so the variant ladder
 * (-w640 / -w1080 / -w1600 / -w2160|w2400) is generated at build time by
 * sharp and the browser picks the right file via srcset + sizes.
 * High-res base files remain the canonical src for any crawler snapshot.
 */

import { useCallback, useState, type CSSProperties } from "react";

const WIDTH_LADDER = [640, 1080, 1600];

function buildSrcSet(src: string): string | undefined {
  const match = /^(.*?)(hotel-maghrib-(?:gallery-\d{2}|hero))\.webp$/.exec(src);
  if (!match) return undefined;
  const prefix = match[1];
  const stem = match[2];
  const isHero = stem.endsWith("hero");
  const maxW = isHero ? 2400 : 2160;
  const entries = [...WIDTH_LADDER.map((w) => `${prefix}${stem}-w${w}.webp ${w}w`), `${prefix}${stem}.webp ${maxW}w`];
  return entries.join(", ");
}

interface SmartImageProps {
  src: string;
  alt: string;
  /** Layout hint; the ladder supplies real pixels. */
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** Explicit alias accepted for parity with next/image call sites. */
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  style?: CSSProperties;
  draggable?: boolean;
}

export default function SmartImage({ src, alt, width, height, sizes, priority, loading, fetchPriority, className, style, draggable }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);
  const eager = priority || loading === "eager";

  if (failed) {
    return (
      <div className={className ? `image-unavailable ${className}` : "image-unavailable"} role="img" aria-label={alt}>
        <span>MAGHRIB</span>
        <small>This photograph is temporarily unavailable.</small>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={buildSrcSet(src)}
      sizes={sizes ?? "100vw"}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={fetchPriority ?? (eager ? "high" : "auto")}
      decoding="async"
      className={className}
      style={style}
      draggable={draggable}
      onError={onError}
    />
  );
}
