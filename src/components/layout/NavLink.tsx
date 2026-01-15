import Link from "next/link";
import styles from "./NavLink.module.css";

export default function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link className={styles.link} href={href} onClick={onClick}>
      {label}
    </Link>
  );
}
