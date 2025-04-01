import styles from "./ContactData.module.scss";
import location from "../../../../assets/icons/location.png";
import iphone from "../../../../assets/icons/iphone.png";
import mail from "../../../../assets/icons/mail.png";

export function ContactData() {
  return (
    <div className={styles.dane}>
      <h2>Dane kontaktowe</h2>
      <div className={styles.daneItem}>
        <img src={iphone} alt="iphone" className={styles.icon} />
        <div className={styles.text}>
          <div className={styles.title}>Telefon</div>
          <div>690 308 425</div>
        </div>
      </div>
      <div className={styles.daneItem}>
        <img src={mail} alt="email" className={styles.icon} />
        <div className={styles.text}>
          <div className={styles.title}>E-mail</div>
          <div>biurodz@outlook.com</div>
        </div>
      </div>
      <div className={styles.daneItem}>
        <img src={location} alt="location" className={styles.icon} />
        <div className={styles.text}>
          <div className={styles.title}>Adres korespondencyjny</div>
          <div> ul. Franciszka Liszta 4/10</div>
          <div>80-170 Gdańsk</div>
        </div>
      </div>
    </div>
  );
}
