import Container from "./Container";
import styles from "./SiteFooter.module.css";
import { site } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.name}>{site.brand}</span>
            <span className={styles.sub}>{site.subbrand}</span>
          </div>
          <div className={styles.meta}>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
