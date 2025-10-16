"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Masonry.module.css";
import Lightbox from "../Lightbox/Lightbox";

const IMAGES = [
  { src: "/images/1.jpg", alt: "Portrait study" },
  { src: "/images/2.jpg", alt: "Editorial" },
  { src: "/images/3.jpg", alt: "Wedding" },
  { src: "/images/4.jpg", alt: "Street" },
  { src: "/images/5.jpg", alt: "Candid" },
  { src: "/images/6.jpg", alt: "Atmosphere" },
  { src: "/images/7.jpg", alt: "Details" },
  { src: "/images/8.jpg", alt: "Landscape" },
  { src: "/images/9.jpg", alt: "Fashion" },
];

export default function Masonry() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="masonry-heading">
      <h2 id="masonry-heading" className={styles.title}>Gallery</h2>

      <div className={styles.masonry}>
        {IMAGES.map((img, i) => (
          <button key={i} className={styles.item} onClick={() => setOpenIndex(i)} aria-label={`Open ${img.alt || "image"}`}>
            <span className={styles.inner}>
              <Image src={img.src} alt={img.alt || ""} width={600} height={800} style={{ width: "100%", height: "auto" }} />
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={IMAGES}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}