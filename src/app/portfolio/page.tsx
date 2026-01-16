import Container from "@/components/layout/Container";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import { galleryItems } from "@/config/gallery";
import styles from "./page.module.css";

export default function PortfolioPage() {
  return (
    <section className={styles.page} aria-label="Portfolio">
      <Container>
        <header className={styles.header}>
          <p className={styles.kicker}>PORTFOLIO</p>
          <h1 className={styles.title}>Selected work</h1>
          <p className={styles.lead}>
            Focused on people, light and real moments.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/contact">Contact</a>
            <a className={styles.secondary} href="/pricing">View pricing</a>
          </div>
        </header>

        <MasonryGallery items={galleryItems} />
      </Container>
    </section>
  );
}
