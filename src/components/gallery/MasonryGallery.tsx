"use client";

import { useMemo, useState } from "react";
import MasonryGrid from "./MasonryGrid";
import styles from "./MasonryGallery.module.css";
import type { GalleryItem, Category } from "@/config/gallery";

type Filter = "All" | Category;

export default function MasonryGallery({
  items,
  defaultFilter = "All",
}: {
  items: GalleryItem[];
  defaultFilter?: Filter;
}) {
  const [active, setActive] = useState<Filter>(defaultFilter);

  const filters = useMemo<Filter[]>(() => {
    const set = new Set<Category>();
    items.forEach((i) => i.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.categories.includes(active));
  }, [items, active]);

  return (
    <div className={styles.wrap}>
      <div className={styles.filters} role="tablist" aria-label="Gallery categories">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              className={isActive ? styles.filterActive : styles.filter}
              aria-pressed={isActive}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          );
        })}
      </div>

      <MasonryGrid items={filtered} />
    </div>
  );
}
