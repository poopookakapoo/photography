import styles from "./Footer.module.css";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <span>© {new Date().getFullYear()} AP Studio</span>
          <a href="mailto:aleksanya12@yahoo.com" className={styles.link}>aleksanya12@yahoo.com</a>
        </div>
      </Container>
    </footer>
  );
}
