import Link from "next/link";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation} aria-label="Główna nawigacja">
      <ul className={styles.naviList}>
        <li>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            O biurze
          </Link>
        </li>
        <li>
          <Link
            href="/offer"
            aria-current={pathname === "/offer" ? "page" : undefined}
          >
            Oferta
          </Link>
        </li>
        <li>
          <Link
            href="/price-list"
            aria-current={pathname === "/price-list" ? "page" : undefined}
          >
            Cennik
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
