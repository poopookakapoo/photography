import Container from "./Container";
import styles from "./SiteFooter.module.css";
import { site } from "@/config/site";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.name}>{site.brand}</span>
            <span className={styles.sub}>{site.subbrand}</span>
          </div>

          <div className={styles.right}>
            <nav className={styles.links} aria-label="Footer links">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className={styles.link}
              >
                <FiMail aria-hidden="true" />
              </a>

              <a
                href={site.social?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.link}
              >
                <FaInstagram aria-hidden="true" />
              </a>

              <a
                href={site.social?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.link}
              >
                <FaFacebookF aria-hidden="true" />
              </a>
            </nav>

            <div className={styles.meta}>
              © {new Date().getFullYear()} {site.brand}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
