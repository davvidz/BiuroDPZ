import { ContactData } from "./components/ContactData/ContactData";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactOpenHours } from "./components/ContactOpenHours/ContactOpenHours";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className="container">
      <div className="kontakt-wrapper">
        <div className="kontakt">
          <ContactData />
          <ContactOpenHours />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
