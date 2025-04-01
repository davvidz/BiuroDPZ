import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.naviList}>
        <li>
          <NavLink to={"office"}>O biurze</NavLink>
        </li>
        <li>
          <NavLink to={"offer"}>Oferta</NavLink>
        </li>
        <li>
          <NavLink to={"priceList"}>Cennik</NavLink>
        </li>

        <li>
          <NavLink to={"contact"}>Kontakt</NavLink>
        </li>
      </ul>
    </div>
  );
}
