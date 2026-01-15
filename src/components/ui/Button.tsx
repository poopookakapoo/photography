import styles from "./Button.module.css";

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
