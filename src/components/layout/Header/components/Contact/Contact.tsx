import styles from "./Contact.module.scss";
import { NavLink } from "react-router-dom";

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.phone}>
        <div className="material-symbols-outlined">call</div>
        <NavLink to={"tel:690308425"}>690 308 425</NavLink>
      </div>
      <div className={styles.email}>
        <div className="material-symbols-outlined">mail</div>
        <NavLink to={"mailto:biurodz@outlook.com"}>biurodz@outlook.com</NavLink>
      </div>
    </div>
  );
}
