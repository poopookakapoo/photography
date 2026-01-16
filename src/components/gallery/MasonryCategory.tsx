"use client";

import { useMemo, useState } from "react";
import MasonryGrid from "./MasonryGrid";
import styles from "./MasonryGallery.module.css";
import type { GalleryItem, Category } from "@/config/gallery";

export default function MasonryGallery({
  items,
  defaultCategory,
}: {
  items: GalleryItem[];
  defaultCategory?: Category;
}) {
  const categories = useMemo<Category[]>(() => {
    const set = new Set<Category>();
    items.forEach((i) => i.categories.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [items]);

  const initialCategory =
    defaultCategory && categories.includes(defaultCategory)
      ? defaultCategory
      : categories[0];

  const [active, setActive] = useState<Category>(initialCategory);

  const filtered = useMemo(
    () => items.filter((i) => i.categories.includes(active)),
    [items, active]
  );

  if (!categories.length) return null;

  return (
    <div className={styles.wrap}>
      <div
        className={styles.filters}
        role="tablist"
        aria-label="Gallery categories"
      >
        {categories.map((category) => {
          const isActive = category === active;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={isActive ? styles.filterActive : styles.filter}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <MasonryGrid items={filtered} />
    </div>
  );
}
