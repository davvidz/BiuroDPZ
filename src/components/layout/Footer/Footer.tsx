import styles from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { Logo } from "../../ui/Logo/Logo";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div>Biuro Rachunkowe DPZ</div>
        <div>Diana Pamela Zapadka</div>
        <div>NIP: 7393611855</div>
        <div>REGON: 526956553</div>
      </div>

      <div className={styles.item}>
        <h3>Godziny otwarcia</h3>
        <div>Pon-Czw: 8:00-16:00</div>
        <div>Piątek: 8:00-15:00</div>
      </div>

      <div className={styles.item}>
        <h3>Kontakt</h3>
        <div>tel: 690 308 425</div>
        <div>email: biurodz@outlook.com</div>
        <div>
          <Link
            href="https://www.facebook.com/profile.php?id=61553866601415"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </Link>
        </div>
        <div>
          <Link href="/contact">Formularz</Link>
        </div>
      </div>
    </footer>
  );
}
