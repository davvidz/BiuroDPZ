import styles from "./ContactForm.module.scss";
import { FormData } from "types/types";
import { useState } from "react";

const initialValue: FormData = {
  name: "",
  surname: "",
  email: "",
  number: "",
  company: "",
  nip: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialValue);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.formularz}>
      <h2>Skontaktuj się z nami!</h2>
      <form
        action="https://formsubmit.co/biurodz@outlook.com"
        method="POST"
        className={styles.formularz}
      >
        <input
          type="hidden"
          name="_subject"
          value="Nowa wiadomość ze strony!"
        />
        <input type="hidden" name="_template" value="basic" />
        <input type="text" name="_honey" style={{ display: "none" }} />{" "}
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="surname">Nazwisko</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label htmlFor="number">Numer telefonu</label>
            <input
              type="text"
              name="number"
              required
              value={formData.number}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label htmlFor="company">Nazwa firmy</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="nip">NIP</label>
            <input
              type="text"
              name="nip"
              value={formData.nip}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <label htmlFor="message">Wiadomość</label>
        <textarea
          name="message"
          value={formData.message}
          required
          rows={6}
          onChange={handleOnChange}
        ></textarea>
        <div className={styles.rodo}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            required
          />
          <label htmlFor="checkbox">
            Wyrażam zgodę na przetwarzanie danych osobowych przez Biuro
            Rachunkowe DPZ Diana Pamela Zapadka, przekazanych w formularzu
            powyżej na potrzeby przedstawienia oferty usług księgowych.
            Jednocześnie przyjmuję do wiadomości, że przysługuje mi prawo
            dostępu do moich danych, możliwość ich poprawienia oraz żądania
            zaprzestania ich przetwarzania przez wysłanie wiadomości e-mail na
            adres biurodz@outlook.com
          </label>
        </div>
        <button type="submit" className={styles.button}>
          WYŚLIJ
        </button>
      </form>
    </div>
  );
}
