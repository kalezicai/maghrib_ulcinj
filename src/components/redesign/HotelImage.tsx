"use client";

/**
 * Backwards-compatible wrapper around SmartImage (responsive srcset).
 * Older call sites pass loading / fetchPriority / style directly.
 */

import SmartImage from "./SmartImage";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  style?: CSSProperties;
  sizes?: string;
  className?: string;
  onError?: () => void;
};

export default function HotelImage({ alt = "", ...props }: Props) {
  return (
    <SmartImage
      src={props.src}
      alt={alt}
      priority={props.loading === "eager"}
      fetchPriority={props.fetchPriority}
      style={props.style}
      sizes={props.sizes}
      className={props.className}
    />
  );
}
