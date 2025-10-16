"use client";

import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

const LOGOS = ["Vogue", "GQ", "Sony", "Leica", "NYT", "WSJ", "Monocle", "Dazed"];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);

  // Duplicate the row for seamless loop
  useEffect(() => {
    const el = ref.current!;
    el.innerHTML = el.innerHTML + el.innerHTML;
  }, []);

  return (
    <section className={styles.wrap} aria-label="Clients">
      <div className={styles.inner} ref={ref}>
        {LOGOS.map((l, i) => (
          <div key={i} className={`${styles.logo} gradientBorder`}>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
