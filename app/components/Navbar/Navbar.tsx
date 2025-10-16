"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header className={styles.islandWrap} role="banner">
      <nav className={`${styles.island} blur-support`} aria-label="Primary">
        <div className={styles.brand}>
          <Link href="/" aria-label="Parunin Photography">PARUNIN</Link>
        </div>
        <ul className={styles.menu} role="menubar" aria-label="Main Menu">
          <NavItem label="Gallery" href="/#gallery"/>
          <NavItem label="About" href="/#about" />
          <NavItem label="Services" href="/#services"/>
          <NavItem label="Contact" href="#contact" />
        </ul>
      </nav>
    </header>
  );
}
