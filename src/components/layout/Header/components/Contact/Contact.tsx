import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <address className={styles.contact}>
      {/* Telefon */}
      <div className={styles.item}>
        <a href="tel:690308425" aria-label="Zadzwoń pod 690 308 425">
          <FaPhoneAlt className={styles.icon} aria-hidden="true" />
          690 308 425
        </a>
      </div>

      {/* E-mail */}
      <div className={styles.item}>
        <a
          href="mailto:biurodz@outlook.com"
          aria-label="Wyślij e-mail na biurodz@outlook.com"
        >
          <FaEnvelope className={styles.icon} aria-hidden="true" />
          biurodz@outlook.com
        </a>
      </div>
    </address>
  );
}
