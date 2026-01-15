import styles from "./GallerySection.module.css";
import Container from "@/components/layout/Container";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import { galleryItems } from "@/config/gallery";

export default function GallerySection() {
  const highlights = galleryItems.slice(0, 6);

  return (
    <section className={styles.section} aria-label="Gallery preview">
      <Container>
        <div className={styles.topRow}>
          <div>
            <h2 className={styles.heading}>Portfolio highlights</h2>
            <p className={styles.sub}>
              A curated selection from recent sessions. Replace this text when ready.
            </p>
          </div>

          {/* <a className={styles.ctaButton} href="/portfolio">
            View full portfolio
          </a> */}
        </div>

        <MasonryGallery items={highlights} />
      </Container>
    </section>
  );
}
