import Image from "next/image";
import styles from "./HeroSection.module.css";
import Container from "@/components/layout/Container";
import { media } from "@/config/media";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <Image
        src={media.hero.src}
        alt={media.hero.alt}
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <Container>
        <div className={styles.content}>
          <div className={styles.eyebrow}>CALIFORNIA-BASED WEDDING & ELOPEMENT PHOTOGRAPHER</div>
          <h1 className={styles.title}>
            Bold Phrase, Catch the Eye, super short.
          </h1>
          <div className={styles.actions}>
            <Button href="/contact">Enquire</Button>
            <a className={styles.secondary} href="/portfolio">View portfolio</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
