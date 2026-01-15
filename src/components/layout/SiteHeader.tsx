import styles from "./SiteHeader.module.css";
import Logo from "./Logo";
import { navLeft, navRight } from "@/config/nav";
import NavGroup from "./NavGroup";
import MobileMenu from "./MobileMenu";

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? styles.headerOverlay : styles.header}>
      <div className={styles.shell}>
        <div className={styles.island}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <NavGroup items={navLeft} />
            </div>

            <div className={styles.center}>
              <Logo />
            </div>

            <div className={styles.right}>
              <NavGroup items={navRight} />
            </div>

            <div className={styles.mobile}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
