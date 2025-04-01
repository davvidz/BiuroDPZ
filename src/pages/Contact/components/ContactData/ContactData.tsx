import styles from "./ContactData.module.scss";

export function ContactData() {
  return (
    <div className="dane">
      <h2>Dane kontaktowe</h2>
      <div className="dane-item">
        <img src="./icons/iphone.png" alt="iphone" className="icon" />
        <div className="text">
          <div className="title">Telefon</div>
          <div className="value">690 308 425</div>
        </div>
      </div>
      <div className="dane-item">
        <img src="./icons/mail.png" alt="email" className="icon" />
        <div className="text">
          <div className="title">E-mail</div>
          <div className="value">biurodz@outlook.com</div>
        </div>
      </div>
      <div className="dane-item">
        <img src="./icons/location.png" alt="location" className="icon" />
        <div className="text">
          <div className="title">Adres korespondencyjny</div>
          <div className="value"> ul. Franciszka Liszta 4/10</div>
          <div className="value">80-170 Gdańsk</div>
        </div>
      </div>
    </div>
  );
}
