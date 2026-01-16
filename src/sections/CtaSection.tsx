import styles from "./CtaSection.module.css";
import Container from "@/components/layout/Container";

export default function CtaSection() {
  return (
    <section className={styles.section} aria-label="Call to action">
      <Container>
        <div className={styles.card}>
          <h2 className={styles.heading}>Ready to plan something beautiful?</h2>
          <p className={styles.sub}>
            Contact me, and book your photoshoot here.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="/contact">Contact</a>
            <a className={styles.secondary} href="/pricing">View pricing</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
