import { ContactData } from "./components/ContactData/ContactData";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactOpenHours } from "./components/ContactOpenHours/ContactOpenHours";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.kontaktWrapper}>
        <div className={styles.kontakt}>
          <ContactData />
          <ContactOpenHours />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
