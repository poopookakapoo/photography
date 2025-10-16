"use client";

import { useEffect, useRef } from "react";
import styles from "./Spotlight.module.css";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div aria-hidden ref={ref} className={styles.spotlight} />;
}
