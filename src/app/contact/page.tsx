import { Contact as ContactSection } from "./components/contact/contact";
import { Form } from "./components/form/form";
import { OpenHours } from "./components/open-hours/open-hours";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.kontaktWrapper}>
        <div className={styles.kontakt}>
          <ContactSection />
          <OpenHours />
          <Form />
        </div>
      </div>
    </div>
  );
}
