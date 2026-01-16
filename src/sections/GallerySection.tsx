"use client";

import styles from "./GallerySection.module.css";
import Container from "@/components/layout/Container";
import MasonryGallery from "@/components/gallery/MasonryCategory";
import { galleryItems } from "@/config/gallery";

export default function GallerySection() {

  return (
    <section className={styles.section} aria-label="Gallery preview">
      <Container>
        <div className={styles.topRow}>
          <div>
            <h2 className={styles.heading}>Portfolio highlights</h2>
                              <a className={styles.ctaButton} href="/portfolio">
            → View full portfolio
          </a>
          </div>
        </div>
        <MasonryGallery items={galleryItems} />
      </Container>
    </section>
  );
}
