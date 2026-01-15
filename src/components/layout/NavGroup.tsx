import { NavItem } from "@/config/nav";
import NavLink from "./NavLink";
import styles from "./SiteHeader.module.css";

export default function NavGroup({ items }: { items: NavItem[] }) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map((i) => (
        <NavLink key={i.href} href={i.href} label={i.label} />
      ))}
    </nav>
  );
}
