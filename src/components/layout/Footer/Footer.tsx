import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaRegPaperPlane,
} from "react-icons/fa";
import { Logo } from "@components/ui/Logo/Logo";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo + dane firmy */}
      <div className={styles.item}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div>Biuro Rachunkowe DPZ</div>
        <div>Diana Pamela Zapadka</div>
        <div>NIP: 7393611855</div>
        <div>REGON: 526956553</div>
      </div>

      {/* Godziny otwarcia */}
      <div className={styles.item}>
        <h3>Godziny otwarcia</h3>
        <div>Pon–Czw: 8:00–16:00</div>
        <div>Piątek: 8:00–15:00</div>
      </div>

      {/* Kontakt */}
      <address className={styles.item}>
        <h3>Kontakt</h3>
        <div className={styles.contactRow}>
          <FaPhoneAlt className={styles.icon} aria-hidden="true" />
          <a href="tel:690308425" aria-label="Zadzwoń pod 690 308 425">
            690 308 425
          </a>
        </div>
        <div className={styles.contactRow}>
          <FaEnvelope className={styles.icon} aria-hidden="true" />
          <a
            href="mailto:biurodz@outlook.com"
            aria-label="Wyślij e-mail na biurodz@outlook.com"
          >
            biurodz@outlook.com
          </a>
        </div>
        <div className={styles.contactRow}>
          <FaRegPaperPlane className={styles.icon} aria-hidden="true" />
          <Link href="/contact" aria-label="Przejdź do formularza kontaktowego">
            Formularz
          </Link>
        </div>

        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61553866601415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na Facebooku"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/biuro_rachunkowe_dpz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na Instagramie"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.youtube.com/@biurorachunkowedpz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na YouTube"
          >
            <FaYoutube size={28} />
          </a>
        </div>
      </address>
    </footer>
  );
}
