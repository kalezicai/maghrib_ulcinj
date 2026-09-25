"use client";

/**
 * AEO FAQ accordion, centered on the Redesign information-panel style.
 * Rendered inside a <details> system so text is crawlable without JS.
 */

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Khatim } from "./Brand";

export default function CenteredFaqs({
  faqs,
  title = "Questions guests ask before they book",
  eyebrow = "SIMPLE ANSWERS, BEFORE YOU ASK",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-block">
      <p className="eyebrow"><Khatim className="eyebrow-star" />{eyebrow}</p>
      <h2>{title}</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div className={`experience-item ${open === index ? "is-active" : ""}`} key={faq.question}>
            <h3>
              <button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                <Khatim className="experience-star" />
                <span>{faq.question}</span>
                {open === index ? <Minus size={18} strokeWidth={1.3} /> : <Plus size={18} strokeWidth={1.3} />}
              </button>
            </h3>
            {open === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
