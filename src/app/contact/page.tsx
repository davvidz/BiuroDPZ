import styles from "./contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Biuro Rachunkowe DPZ",
  description:
    "Skontaktuj się z Biurem Rachunkowym DPZ. Zadzwoń, napisz e-mail lub skorzystaj z formularza kontaktowego online.",
  openGraph: {
    title: "Kontakt – Biuro Rachunkowe DPZ",
    description:
      "Biuro Rachunkowe DPZ – kontakt telefoniczny, e-mail oraz formularz kontaktowy. Sprawdź godziny otwarcia i wyślij wiadomość online.",
    url: "https://www.biurodpz.pl/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt z Biurem Rachunkowym DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Biuro Rachunkowe DPZ",
    description:
      "Skontaktuj się z Biurem Rachunkowym DPZ. Telefon, e-mail i formularz kontaktowy online.",
    images: ["/og-image.jpg"],
  },
};

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1>Kontakt</h1>
      <div className={styles.grid}>
        {/* Kontakt */}
        <div className={styles.box}>
          <h2>Skontaktuj się z nami</h2>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} aria-hidden="true" />
            <a href="tel:690308425" aria-label="Zadzwoń do biura DPZ">
              690 308 425
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} aria-hidden="true" />
            <a
              href="mailto:biurodz@outlook.com"
              aria-label="Napisz e-mail do biura DPZ"
            >
              biurodz@outlook.com
            </a>
          </div>
          {/* <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.478238013013!2d18.5913!3d54.352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd734dfdd9ffb1%3A0x123456789!2sFranciszka%20Liszta%204%2C%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1690000000000!5m2!1spl!2spl"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>

        {/* Godziny otwarcia */}
        <div className={styles.box}>
          <h2>
            <FaClock className={styles.icon} aria-hidden="true" /> Godziny
            otwarcia
          </h2>
          <ul className={styles.hoursList}>
            <li>
              <span>Poniedziałek – Czwartek</span>
              <span>8:00 – 16:00</span>
            </li>
            <li>
              <span>Piątek</span>
              <span>8:00 – 15:00</span>
            </li>
          </ul>
        </div>

        {/* Formularz */}
        <div className={styles.box}>
          <h2>Napisz do nas</h2>
          <form
            action="https://formsubmit.co/biurodz@outlook.com"
            method="POST"
            className={styles.form}
          >
            <input
              type="hidden"
              name="_subject"
              value="Nowa wiadomość ze strony"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className={styles.row}>
              <input type="text" name="name" placeholder="Imię" required />
              <input
                type="text"
                name="surname"
                placeholder="Nazwisko"
                required
              />
            </div>
            <div className={styles.row}>
              <input type="tel" name="number" placeholder="Telefon" required />
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Twoja wiadomość..."
              required
            ></textarea>

            <div className={styles.rodo}>
              <input type="checkbox" id="rodo" required />
              <label htmlFor="rodo">
                Wyrażam zgodę na przetwarzanie danych osobowych przez Biuro
                Rachunkowe DPZ w celu odpowiedzi na moje zapytanie.
              </label>
            </div>

            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </section>
  );
}
