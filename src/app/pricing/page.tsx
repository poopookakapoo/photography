import Container from "@/components/layout/Container";
import styles from "./page.module.css";

type Package = {
  name: string;
  note: string;
  bullets: string[];
  featured?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Essential",
    note: "For intimate sessions and short coverage.",
    bullets: ["Up to 2 hours", "Planning call", "Online gallery", "High-resolution downloads"],
  },
  {
    name: "Signature",
    note: "The balanced option for most weddings.",
    bullets: [
      "Up to 6 hours",
      "Timeline guidance",
      "Online gallery",
      "High-resolution downloads",
      "Preview set within 72 hours",
    ],
    featured: true,
  },
  {
    name: "Full Day",
    note: "Comprehensive coverage from start to finish.",
    bullets: [
      "Up to 10 hours",
      "Second photographer option",
      "Online gallery",
      "High-resolution downloads",
      "Extended preview set",
    ],
  },
];

const ADDONS = [
  { title: "Engagement session", text: "A relaxed session to get comfortable in front of the camera." },
  { title: "Second photographer", text: "Additional angles and expanded coverage." },
  { title: "Rush editing", text: "Prioritised delivery where available." },
  { title: "Fine-art prints", text: "Museum-grade prints, curated sizes, and framing guidance." },
];

const FAQ = [
  {
    q: "How far in advance should we book?",
    a: "If you have a date in mind, booking earlier is best—especially for peak weekends. If you are flexible, reach out and we can explore options.",
  },
  {
    q: "Do you travel?",
    a: "Yes. Travel terms depend on location and scope. For destinations, I will provide a simple, transparent estimate.",
  },
  {
    q: "When will we receive our photos?",
    a: "Delivery timelines vary by season and coverage. I will confirm a clear delivery window during booking.",
  },
  {
    q: "Do you help with posing?",
    a: "Yes—light direction and natural prompts. The goal is to keep things comfortable and authentic rather than overly posed.",
  },
];

export default function PricingPage() {
  return (
    <section className={styles.page} aria-label="Pricing">
      <Container>
        <header className={styles.header}>
          <p className={styles.kicker}>PRICING</p>
          <h1 className={styles.title}>Simple packages. Thoughtful coverage.</h1>
          <p className={styles.lead}>
            Packages below outline typical coverage. Final pricing is tailored to your date, location, and the level of
            coverage you need. Enquire for a personalised quote.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/contact">
              Contact
            </a>
            <a className={styles.secondary} href="/portfolio">
              View portfolio
            </a>
          </div>
        </header>

        <div className={styles.grid} aria-label="Packages">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={p.featured ? styles.cardFeatured : styles.card}
              aria-label={`${p.name} package`}
            >
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.packageName}>{p.name}</div>
                  <div className={styles.packageNote}>{p.note}</div>
                </div>

                <div className={styles.priceBlock} aria-label="Pricing note">
                  <div className={styles.price}>Tailored</div>
                  <div className={styles.priceMeta}>Quoted per client</div>
                </div>
              </div>

              <div className={styles.rule} />

              <ul className={styles.bullets}>
                {p.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    {b}
                  </li>
                ))}
              </ul>

              <a className={styles.cardCta} href="/contact">
                Check availability
              </a>
            </article>
          ))}
        </div>

        <section className={styles.inclusions} aria-label="Inclusions and add-ons">
          <div className={styles.inclusionsHead}>
            <h2 className={styles.h2}>What is included</h2>
            <p className={styles.sub}>
              Every booking includes planning support, a consistent edit, and a private gallery for viewing and
              downloads.
            </p>
          </div>

          <div className={styles.twoCol}>
            <div className={styles.box}>
              <div className={styles.boxTitle}>Standard inclusions</div>
              <ul className={styles.checklist}>
                <li>Planning guidance and location support</li>
                <li>Curated edit with consistent colour</li>
                <li>Private online gallery</li>
                <li>High-resolution downloads</li>
              </ul>
            </div>

            <div className={styles.box}>
              <div className={styles.boxTitle}>Optional add-ons</div>
              <div className={styles.addons}>
                {ADDONS.map((a) => (
                  <div key={a.title} className={styles.addon}>
                    <div className={styles.addonTitle}>{a.title}</div>
                    <p className={styles.addonText}>{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-label="Frequently asked questions">
          <h2 className={styles.h2}>FAQ</h2>
          <div className={styles.faqList}>
            {FAQ.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{item.q}</summary>
                <div className={styles.faqA}>
                  <p className={styles.faqText}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
