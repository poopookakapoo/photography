import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { media } from "@/config/media";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Alexander – Portrait and Wedding Photographer",
  description:
    "Alexander is a professional portrait and wedding photographer specialising in sincere emotion, thoughtful shooting, and timeless, honest imagery.",
};

export default function AboutPage() {
  return (
    <section className={styles.page} aria-label="About">
      <Container>
        <header className={styles.header}>
          <p className={styles.kicker}>ABOUT</p>
          <h1 className={styles.title}>My name is Alexander, I make beautiful portraits. </h1>
          <p className={styles.lead}>
            Thoughfull shooting, comfortable process, honest portraits.
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
              For me, photography is a new way to see the world and campture special moments. I've been working as a photographer for years, specializing in portraits and wedding photos. In my work, I strive to capture sincere emotions and the beauty of the moment.
            </p>

            <div className={styles.rule} />

            <ul className={styles.list} aria-label="Highlights">
              <li className={styles.item}>
                <div className={styles.itemTitle}>Observant approach</div>
                <p className={styles.itemText}>
                  Attentive to people and atmosphere, allowing moments to unfold naturally.
                </p>
              </li>

              <li className={styles.item}>
                <div className={styles.itemTitle}>Sincere emotion</div>
                <p className={styles.itemText}>
                  A focus on genuine expressions and quiet interactions rather than staged poses.
                </p>
              </li>

              <li className={styles.item}>
                <div className={styles.itemTitle}>Timeless imagery</div>
                <p className={styles.itemText}>
                  Clean composition and natural colour that preserve the feeling of the moment.
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
