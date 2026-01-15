import Container from "./Container";
import styles from "./PageShell.module.css";

export default function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>
        {children ? <div className={styles.body}>{children}</div> : null}
      </Container>
    </section>
  );
}
