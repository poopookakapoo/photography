"use client";

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.wrap} aria-labelledby="about-heading">
      <div className={styles.grid}>
        <div className={styles.media}>
          <div className={styles.frame}>
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait"
              width={720}
              height={900}
              className={styles.img}
              priority
            />
          </div>
        </div>
        <div className={styles.copy}>
          <h2 id="about-heading" className={styles.title}>About</h2>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
}
