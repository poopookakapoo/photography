"use client";

import Link from "next/link";
import styles from "./NavItem.module.css";
import HoverMenu from "./HoverMenu";

type HoverItem = { label: string; href: string };

export default function NavItem({
  label, href, hoverItems
}: { label: string; href: string; hoverItems?: HoverItem[] }) {
  // CSS handles hover/focus; no JS state needed
  return (
    <li className={styles.item} role="none">
      <div className={styles.triggerWrap}>
        <Link className={styles.trigger} href={href} role="menuitem" aria-haspopup={hoverItems ? "true" : "false"}>
          {label}
        </Link>
        {hoverItems && <HoverMenu items={hoverItems} />}
      </div>
    </li>
  );
}
