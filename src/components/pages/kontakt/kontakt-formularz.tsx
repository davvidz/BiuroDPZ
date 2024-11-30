import { useState } from "react";
import "./kontakt-formularz.scss";
import { FormData } from "../../../typescript/types";
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

export const KontaktFormularz = () => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // EmailJS ID's
    const serviceId = "service_29leswc"; // moje
    //const serviceId = "service_9ax7ndr"; //noska
    const templateId = "template_axbt6qt";
    const publicKey = "3-W8b1CaFSSy2reSr";

    // EmailJS template parameters
    const templateParams = {
      from_name: formData.firstName,
      from_surname: formData.secondName,
      from_email: formData.email,
      from_number: formData.phoneNumber,
      from_company: formData.companyName,
      from_nip: formData.nip,
      to_name: "Nosek noskowaty",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setMessage(messages.success);
      })
      .catch((error) => {
        setMessage(messages.failure);
      });

    setFormData(initialValue);
    setIsChecked(false);
  };

  return (
    <div className="formularz">
      <h2>Skontaktuj się z nami !</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="firstName">Imię</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="secondName">Nazwisko</label>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="email">Adres e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="phoneNumber">Numer telefonu</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleOnChange}
            />
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
        <textarea
          name="message"
          value={formData.message}
          onChange={handleOnChange}
          rows={6}
          cols={35}
          required
        />
        <div className="rodo">
          <input
            type="checkbox"
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
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
        <div className="submit-button">
          <button type="submit">WYŚLIJ</button>
        </div>
      </form>

      <div
        className={
          message === messages.success
            ? "message-confirmation"
            : "message-failure"
        }
      >
        {message}
      </div>
    </div>
  );
};
