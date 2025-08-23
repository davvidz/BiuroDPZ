import styles from "./contact.module.scss";
import Image from "next/image";

export function Contact() {
  return (
    <div className={styles.dane}>
      <h2>Dane kontaktowe</h2>
      <div className={styles.daneItem}>
        <Image
          src="/icons/iphone.png"
          alt="iphone"
          className={styles.icon}
          width={100}
          height={100}
        />
        <div className={styles.text}>
          <div className={styles.title}>Telefon</div>
          <div>690 308 425</div>
        </div>
      </div>
      <div className={styles.daneItem}>
        <Image
          src="/icons/mail.png"
          alt="email"
          className={styles.icon}
          width={100}
          height={100}
        />
        <div className={styles.text}>
          <div className={styles.title}>E-mail</div>
          <div>biurodz@outlook.com</div>
        </div>
      </div>
      <div className={styles.daneItem}>
        <Image
          src="/icons/location.png"
          alt="location"
          className={styles.icon}
          width={100}
          height={100}
        />
        <div className={styles.text}>
          <div className={styles.title}>Adres korespondencyjny</div>
          <div> ul. Franciszka Liszta 4/10</div>
          <div>80-170 Gdańsk</div>
        </div>
      </div>
    </div>
  );
}
