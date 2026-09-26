"use client";

/**
 * /blog — halal travel journal hub + article layouts, in the Redesign style.
 */

import SmartImage from "./SmartImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import Brand, { BrandDefs, Eyebrow, Khatim, Monogram, Rule } from "./Brand";
import Reveal, { ArchPhoto } from "./Reveal";
import CenteredFaqs from "./CenteredFaqs";
import { photo } from "@/data/redesign/hotel";
import { blogPosts } from "@/data/redesign/blog";

const DATE_FMT = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function BlogIndex() {
  return (
    <>
      <BrandDefs />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">

        <section className="interior-hero">
          <div className="page-width interior-hero-inner">
            <Eyebrow number="10">THE TRAVEL JOURNAL</Eyebrow>
            <h1>Halal travel,<br /><em>on the Adriatic.</em></h1>
            <p className="body-copy interior-hero-lede">
              Guides from our front desk: what a truly halal hotel looks like, how Ulcinj works for families, and which
              Montenegro coast town deserves your family week. Written by the team at Hotel Maghrib.
            </p>
          </div>
        </section>

        <section className="blog-index page-width section-space">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug}>
              <Link className={`blog-row ${index % 2 === 1 ? "is-flipped" : ""}`} href={`/blog/${post.slug}`}>
                <div className="blog-row-photo">
                  <SmartImage src={photo(post.image)} alt={`${post.title} — ${post.excerpt.slice(0, 90)}`} width={960} height={720} priority={index === 0} loading={index === 0 ? undefined : "lazy"} sizes="(max-width: 900px) 100vw, 46vw" />
                </div>
                <div className="blog-row-copy">
                  <p className="eyebrow"><Khatim className="eyebrow-star" />{DATE_FMT(post.date)}</p>
                  <h2>{post.title}</h2>
                  <p className="body-copy">{post.excerpt}</p>
                  <span className="text-link">Read the guide <ArrowRight size={15} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>

        <section className="closing-section">
          <div className="hour-texture" aria-hidden="true" />
          <div className="closing-glow" aria-hidden="true" />
          <div className="closing-content">
            <Monogram className="closing-monogram" />
            <p className="eyebrow"><Khatim className="eyebrow-star" />READ. THEN STAY.</p>
            <h2>See the guide,<br /><em>then the guide book.</em></h2>
            <p>Our reservations team answers within two hours.</p>
            <Link className="button button--gold" href="/contact">Plan your stay <ArrowUpRight size={17} strokeWidth={1.5} /></Link>
          </div>
        </section>
      </main>
    </>
  );
}

export function ArticleLayout({ post, children }: { post: (typeof blogPosts)[number]; children: React.ReactNode }) {
  return (
    <main id="main-content" className="article-page">
      <article className="article-inner page-width section-space">
        <Eyebrow>The halal travel journal</Eyebrow>
        <h1>{post.title}</h1>
        <p className="article-meta"><Calendar size={13} /> Updated <strong>{DATE_FMT(post.updated ?? post.date)}</strong> &nbsp;&#10022;&nbsp; By the Hotel Maghrib team in Ulcinj</p>
        <div className="arch-photo article-photo">
          <div className="arch-photo-crop">
            <SmartImage src={photo(post.image)} alt={post.heroAlt} width={1400} height={900} priority sizes="(max-width: 1200px) 94vw, 1100px" fetchPriority="high" />
          </div>
          {post.heroCaption && <span className="arch-photo-caption"><Khatim />{post.heroCaption}</span>}
        </div>
        {children}
        <div className="article-footer">
          <Link className="text-link" href="/blog"><ArrowRight size={15} style={{ transform: "rotate(180deg)" }} /> Back to the journal</Link>
          <Link className="button button--gold" href="/rooms">Reserve your stay <ArrowUpRight size={15} /></Link>
        </div>
      </article>
    </main>
  );
}
