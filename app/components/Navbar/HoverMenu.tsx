"use client";

import Link from "next/link";
import styles from "./HoverMenu.module.css";

export default function HoverMenu({
  items
}: { items: { label: string; href: string }[] }) {
  return (
    <div className={`${styles.menu} blur-support`} role="menu" aria-label="Submenu">
      {items.map((it) => (
        <Link key={it.href} href={it.href} role="menuitem" className={styles.item}>
          {it.label}
        </Link>
      ))}
    </div>
  );
}
