import Image from "next/image";
import styles from "./MasonryGrid.module.css";
import type { GalleryItem } from "@/config/gallery";

export default function MasonryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className={styles.grid} aria-label="Image gallery">
      {items.map((item) => (
        <figure key={item.id} className={styles.item}>
          <div className={styles.card}>
            <Image
              src={item.src}
              alt={item.alt}
              placeholder="blur"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={styles.image}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
