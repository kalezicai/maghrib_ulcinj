import type { Metadata } from "next";
import { ArticleLayout } from "@/components/redesign/Blog";
import CenteredFaqs from "@/components/redesign/CenteredFaqs";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd, blogPostingLd, faqLd } from "@/data/redesign/schema";
import { getPost } from "@/data/redesign/blog";
import { notFound } from "next/navigation";

const post = getPost("family-holiday-ulcinj");

export const metadata: Metadata = pageMetadata("/blog/family-holiday-ulcinj");

const faqs = [
  {
    question: "Is Ulcinj good for a family holiday?",
    answer:
      "Yes — Ulcinj is Montenegro's most family-oriented beach town: shallow sandy beaches at Mala Plaža and Velika Plaža, a relaxed pace, and family-sized hotel rooms at gentler prices than Budva or Kotor. Hotel Maghrib adds private family spa hours and an onsite Masjid to the mix.",
  },
  {
    question: "What is the best month for a family holiday in Ulcinj?",
    answer:
      "July and August are warmest, but June and September are the sweet spot: sea warm enough for children, beaches quieter, and rates noticeably softer. Ramadan is also a uniquely peaceful time to visit.",
  },
  {
    question: "Are there halal restaurants in Ulcinj?",
    answer:
      "Yes. Ulcinj has many traditional halal-friendly grills and burek bakeries, plus the hotel's own 100% halal breakfast buffet. For dinners, our hosts point families to quiet, family-appropriate venues in the Old Town.",
  },
];

export default function FamilyHolidayPost() {
  if (!post) notFound();
  return (
    <>
      <SiteHeader active="/blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd({
        title: post.title,
        description: post.excerpt,
        date: post.date,
        modified: post.updated,
        path: `/blog/${post.slug}`,
        image: `/images/gallery/hotel-maghrib-gallery-${String(post.image).padStart(2, "0")}.webp`,
        authorName: "Hotel Maghrib Ulcinj",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Journal", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />
      <ArticleLayout post={post}>
        <div className="article-body">
          <p className="article-lede body-copy">The best halal family holiday in Montenegro is a simple equation: a quiet, private base a short walk from a sandy beach, prayer infrastructure that stops being a search, and food that stops being a question. Ulcinj passes all of it — here is a day-by-day guide from our front desk.</p>

          <h2>Day 1 — arrive, exhale</h2>
          <p>Land at Podgorica (TGD, about a 75-minute transfer). Check in from 2 PM, unpack on the balcony, and let the kids discover the Borići pines beside the hotel. Sunset from the terrace is non-negotiable — it is, after all, the maghrib.</p>

          <h2>Day 2 — Small Beach morning, Old Town evening</h2>
          <p>Walk 14 minutes down to Mala Plaža (Small Beach): sand, shallows, and a 10-minute stroll to the fortress walls for dinner. Our hosts will point you to quiet, family-appropriate tables in the Old Town.</p>

          <h2>Day 3 — the long beach</h2>
          <p>Velika Plaža, south of town, is 12 kilometres of fine sand — ample for kite-surf watchers and sandcastle engineers alike. Return for the private spa hour if you reserved one, and end the day on the terrace.</p>

          <h2>Day 4 — olive groves and river islands</h2>
          <p>Drive 15 minutes to Valdanos, a pebble cove in an ancient olive grove, then on to Ada Bojana for its famous sunset fish plates. Ask reception about boat options on the Bojana river — the children never forget it.</p>

          <h2>What to look for in a halal family hotel</h2>
          <ul>
            <li>Family rooms with real sleeping for four to five — not a double plus a rollaway.</li>
            <li>Structured spa hours: women-and-children sessions, men-only hours, exclusive family booking.</li>
            <li>An onsite prayer room and Qibla markers, so the five daily prayers fit the holiday rather than fight it.</li>
            <li>Hidden-view balconies for sunbathing privacy.</li>
            <li>A halal breakfast that is included, plentiful, and certified — not &lsquo;halal options on request&rsquo;.</li>
          </ul>
        </div>
        <CenteredFaqs faqs={faqs} eyebrow="QUICK ANSWERS" title="Family questions, answered" />
      </ArticleLayout>
      <SiteFooter />
    </>
  );
}
