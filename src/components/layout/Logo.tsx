import Link from "next/link";
import styles from "./Logo.module.css";
import { site } from "@/config/site";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Home">
      <span className={styles.brand}>{site.brand}</span>
      <span className={styles.sub}>{site.subbrand}</span>
    </Link>
  );
}
