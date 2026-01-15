import Image from "next/image";
import Container from "@/components/layout/Container";
import { media } from "@/config/media";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.page} aria-label="About">
      <Container>
        <header className={styles.header}>
          <p className={styles.kicker}>ABOUT</p>
          <h1 className={styles.title}>A calm, documentary approach</h1>
          <p className={styles.lead}>
            Replace this line with a short, confident summary of your work: how you shoot,
            how you make people feel, and what the final images are like.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <Image
              src={media.about.src}       // e.g. /images/about-portrait.jpg
              alt={media.about.alt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            <p className={styles.body}>
              Use this space for a slightly longer paragraph. Keep it simple: what you value, how you work
              on the day, and how you approach light and composition.
            </p>
            <p className={styles.body}>
              Add one more paragraph describing your process and coverage. Minimal copy reads as premium
              when the hierarchy, spacing, and rhythm are correct.
            </p>

            <div className={styles.rule} />

            <ul className={styles.list} aria-label="Highlights">
              <li className={styles.item}>
                <div className={styles.itemTitle}>Direction, not posing</div>
                <p className={styles.itemText}>
                  Gentle prompts, honest moments, flattering composition.
                </p>
              </li>

              <li className={styles.item}>
                <div className={styles.itemTitle}>Editorial colour</div>
                <p className={styles.itemText}>
                  Natural tones, consistent skin, refined contrast.
                </p>
              </li>

              <li className={styles.item}>
                <div className={styles.itemTitle}>Clear delivery</div>
                <p className={styles.itemText}>
                  Predictable timelines and a simple, organised gallery.
                </p>
              </li>
            </ul>

            <div className={styles.ctaRow}>
              <a className={styles.primary} href="/contact">
                Contact
              </a>
              <a className={styles.secondary} href="/portfolio">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
