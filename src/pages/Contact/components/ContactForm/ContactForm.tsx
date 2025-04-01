import styles from "./ContactForm.module.scss";
import { useState } from "react";

import emailjs from "@emailjs/browser";

const initialValue: FormData = {
  firstName: "",
  secondName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  nip: "",
  message: "",
};

const messages = {
  success: "Wiadomość do nas dotarła, odpowiedmy najszybciej jak możemy.",
  failure: "Coś poszło nie tak, spróbuj ponownie.",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialValue);
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="formularz">
      <h2>Skontaktuj się z nami!</h2>
      <form
        action="https://formsubmit.co/biurodz@outlook.com"
        method="POST"
        className="formularz"
      >
        <input
          type="hidden"
          name="_subject"
          value="Nowa wiadomość ze strony!"
        />
        <input type="hidden" name="_template" value="basic" />
        <input type="text" name="_honey" style={{ display: "none" }} />{" "}
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-item">
            <label htmlFor="surname">Nazwisko</label>
            <input type="text" name="surname" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="number">Numer telefonu</label>
            <input type="text" name="number" required />
          </div>
          <div className="form-item">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="companyName">Nazwa firmy</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-item">
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
        <textarea name="message" required rows={6}></textarea>
        <div className="rodo">
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
        <button type="submit" className="button">
          WYŚLIJ
        </button>
      </form>
    </div>
  );
}
