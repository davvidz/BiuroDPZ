import Link from "next/link";
import styles from "./Navigation.module.scss";

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.naviList}>
        <li>
          <Link href={"about"}>O biurze</Link>
        </li>
        <li>
          <Link href={"offer"}>Oferta</Link>
        </li>
        <li>
          <Link href={"price-list"}>Cennik</Link>
        </li>

        <li>
          <Link href={"contact"}>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}
