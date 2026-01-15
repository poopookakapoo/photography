"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./MobileMenu.module.css";
import Icon from "@/components/ui/Icon";
import { navLeft, navRight } from "@/config/nav";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/lockBodyScroll";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(() => [...navLeft, ...navRight], []);

  // Close the menu on route change (useful when navigating).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [open]);

  // Focus + Escape handling.
  useEffect(() => {
    if (!open) return;

    // Focus the close button for accessibility.
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
      // Return focus to the trigger.
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Icon name="menu" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onMouseDown={() => setOpen(false)}
        >
          <div className={styles.panel} onMouseDown={(e) => e.stopPropagation()}>
            <div className={styles.topRow}>
              <div className={styles.titleBlock}>
                <div className={styles.menuTitle}>Menu</div>
                <div className={styles.menuSub}>Navigate the site</div>
              </div>

              <button
                ref={closeRef}
                className={styles.close}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>

            <nav className={styles.links} aria-label="Mobile navigation">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className={i.href === "/contact" ? styles.linkEmphasis : styles.link}
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className={styles.footerRow}>
              <span className={styles.hint}>Press X to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
