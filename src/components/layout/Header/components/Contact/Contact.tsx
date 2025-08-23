import styles from "./Contact.module.scss";
import Link from "next/link";

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.phone}>
        <div className="material-symbols-outlined">call</div>
        <Link href={"tel:690308425"}>690 308 425</Link>
      </div>
      <div className={styles.email}>
        <div className="material-symbols-outlined">mail</div>
        <Link href={"mailto:biurodz@outlook.com"}>biurodz@outlook.com</Link>
      </div>
    </div>
  );
}
