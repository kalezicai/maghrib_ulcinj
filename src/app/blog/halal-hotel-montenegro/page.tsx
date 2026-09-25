import type { Metadata } from "next";
import { ArticleLayout } from "@/components/redesign/Blog";
import CenteredFaqs from "@/components/redesign/CenteredFaqs";
import { pageMetadata } from "@/lib/page-metadata";
import { SiteFooter, SiteHeader } from "@/components/redesign/Chrome";
import { breadcrumbLd, blogPostingLd, faqLd } from "@/data/redesign/schema";
import { getPost } from "@/data/redesign/blog";
import { notFound } from "next/navigation";

const post = getPost("halal-hotel-montenegro");

export const metadata: Metadata = pageMetadata("/blog/halal-hotel-montenegro");

const faqs = [
  {
    question: "What makes a hotel truly halal?",
    answer:
      "A truly halal hotel combines five things: halal-certified food from certified suppliers, completely alcohol-free premises, a dedicated prayer room with wudu facilities, Qibla direction markers in the rooms, and privacy-respecting amenities such as private spa bookings and hidden balconies. 'Muslim-friendly' usually means a subset of these; '100% halal' means all of them.",
  },
  {
    question: "Is there a difference between halal and Muslim-friendly hotels?",
    answer:
      "Yes. 'Muslim-friendly' typically means some halal food options and maybe a prayer corner. A 100% halal hotel like Hotel Maghrib in Ulcinj goes further: certified kitchen, alcohol-free premises, an onsite Masjid, Qibla markers, women-and-children and men-only spa hours and a conservative family atmosphere throughout.",
  },
  {
    question: "Which Montenegro hotels are 100% halal?",
    answer:
      "Hotel Maghrib in Ulcinj is Montenegro's flagship 100% halal hotel: halal-certified buffet, alcohol-free house, onsite air-conditioned Masjid with wudu, Qibla markers in every room, and a private-bookable family spa with women/children and men-only hours.",
  },
];

export default function HalalHotelPost() {
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
          <p className="article-lede body-copy">A truly halal hotel is not a hotel with halal options. It is a house where the whole system — kitchen, minibar, spa schedule, balcony sightlines, prayer room — is designed around Islamic practice, so a Muslim family never has to ask twice. This is the 2026 checklist, and how Hotel Maghrib in Ulcinj answers every line of it.</p>

          <h2>What defines a halal hotel?</h2>
          <p>A hotel earns &ldquo;100% halal&rdquo; only when all five elements are met:</p>
          <ul>
            <li><strong>Halal-certified kitchen.</strong> Every ingredient from certified suppliers; no alcohol in any preparation, including sauces and desserts.</li>
            <li><strong>Alcohol-free premises.</strong> Not a reduced bar menu — no alcohol served, stored or invited anywhere on the property.</li>
            <li><strong>Prayer infrastructure.</strong> A dedicated, clean prayer room with wudu facilities, plus Qibla direction markers in every guest room.</li>
            <li><strong>Privacy by design.</strong> Private-bookable spa hours, balconies hidden from neighbouring sightlines, and a modest, family-first atmosphere.</li>
            <li><strong>Consistent environment.</strong> Nasheeds instead of club playlists, a calm lobby, and staff who understand why the calendar matters.</li>
          </ul>

          <h2>How does Hotel Maghrib meet each one?</h2>
          <p><strong>The kitchen.</strong> Our breakfast buffet is 100% halal certified — fresh pastries, traditional Balkan and Turkish dishes, seasonal fruit, and prepared egg dishes, with zero alcohol in any preparation.</p>
          <p><strong>The house.</strong> Hotel Maghrib is completely alcohol-free. In its place: soft nasheed instrumentals, a calm aroma through the lobby, and a check-in that begins with &lsquo;welcome&rsquo; in whichever language you arrived in.</p>
          <p><strong>The prayer room.</strong> An air-conditioned Masjid with wudu facilities sits at the heart of the hotel, and every room carries a clear Qibla direction marker — no compass apps required at 5 AM.</p>
          <p><strong>The spa.</strong> Our wellness center runs on structured hours: private family bookings of the entire pool, jacuzzi and sauna, separate women-and-children hours (11–12 and 15–16) and a men-only hour (14–15).</p>

          <h2>Beyond the hotel: is Ulcinj itself halal-friendly?</h2>
          <p>Very. Ulcinj is one of the Balkans&rsquo; most historically Muslim towns — minarets over the Old Town, halal restaurants throughout, the old Ladies&rsquo; Beach tradition, and a conservative stretch of the Long Beach (Velika Plaža). The Borići pine promenade beside our hotel is the evening walk of choice for families across town.</p>
          <p>That mix — a genuinely halal house in a genuinely Muslim-friendly town — is why Muslim families from across Europe put Ulcinj at the centre of their Adriatic summers, and why Hotel Maghrib was built here.</p>
        </div>
        <CenteredFaqs faqs={faqs} eyebrow="QUICK ANSWERS" title="Frequently asked, answered plainly" />
      </ArticleLayout>
      <SiteFooter />
    </>
  );
}
