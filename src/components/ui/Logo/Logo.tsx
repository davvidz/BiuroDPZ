import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
import logoShort from "../../../assets/images/logoShort.png";

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img
            src={logoShort}
            alt="Wejście do biura"
            loading="lazy"
            width={"100px"}
            height={"50px"}
          />
        </div>
      </NavLink>
    </div>
  );
}
