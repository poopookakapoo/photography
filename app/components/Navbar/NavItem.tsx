"use client";

import Link from "next/link";
import styles from "./NavItem.module.css";
import HoverMenu from "./HoverMenu";

type HoverItem = { label: string; href: string };

type NavItemProps = {
  label: string;
  href: string;
  hoverItems?: HoverItem[];
  className?: string;
  hiddenOnMobile?: boolean;
};

export default function NavItem({
  label,
  href,
  hoverItems,
  className,
  hiddenOnMobile,
}: NavItemProps) {
  const liClass = [styles.item, className].filter(Boolean).join(" ");

  return (
    <li className={liClass} role="none" data-hide-mobile={hiddenOnMobile ? "" : undefined}>
      <div className={styles.triggerWrap}>
        <Link
          className={styles.trigger}
          href={href}
          role="menuitem"
          aria-haspopup={hoverItems ? "true" : "false"}
        >
          {label}
        </Link>
        {hoverItems && <HoverMenu items={hoverItems} />}
      </div>
    </li>
  );
}
