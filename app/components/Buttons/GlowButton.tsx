import styles from "./GlowButton.module.css";

export default function GlowButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={`${styles.btn} gradientBorder cardHover`}>
      <span className={styles.inner}>{children}</span>
    </a>
  );
}
