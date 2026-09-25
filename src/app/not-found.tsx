import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { Eyebrow, Monogram, Khatim } from "@/components/redesign/Brand";

export const metadata = pageMetadata("/404");

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & suites" },
  { href: "/experience", label: "The halal experience" },
  { href: "/spa", label: "Private spa" },
  { href: "/gallery", label: "Gallery" },
  { href: "/ulcinj", label: "Ulcinj guide" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="legal-page">
      <section className="legal-inner page-width section-space">
        <Eyebrow>LOST IN THE PINES?</Eyebrow>
        <h1><span className="section-number">404</span><br />This path doesn&rsquo;t<br /><em>lead to the sea.</em></h1>
        <p className="body-copy">The page you&rsquo;re looking for doesn&rsquo;t exist. Follow one of these back to the water:</p>
        <div className="not-found-links">
          {links.map((link) => (
            <Link key={link.href} className="button button--outline" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="story-signature">
          <Monogram />
          <span>HOTEL MAGHRIB &nbsp;<Khatim />&nbsp; ULCINJ, MONTENEGRO</span>
        </div>
      </section>
    </main>
  );
}
