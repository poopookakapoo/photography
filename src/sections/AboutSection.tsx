import Image from "next/image";
import styles from "./AboutSection.module.css";
import Container from "@/components/layout/Container";
import { media } from "@/config/media";

export default function AboutSection() {
  return (
    <section className={styles.section} aria-label="About preview">
      <Container>
        <div className={styles.grid}>
          <div className={styles.photo}>
            <Image
              src={media.about.src}
              alt={media.about.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <div className={styles.kicker}>ABOUT</div>
            <h2 className={styles.heading}>My name is Alexander, and i do beautiful portraits.</h2>
            <p className={styles.paragraph}>
              
            </p>
            <p className={styles.paragraph}>
              Photographing calmly and attentively, helping people feel natural. The results are honest, expressive portraits with character.
            </p>

            <a className={styles.link} href="/about">
              Learn more
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
