import styles from "./Image.module.scss";
import logoPionowe from "../../../assets/images/logoPionowe.png";

export function Image() {
  return (
    <div className="photo">
      <div className="title">
        <img
          src={logoPionowe}
          alt="Logo Biura Rachunkowego Diana Pamela Zapadka"
          loading="lazy"
          className="responsive-logo"
        />
        <p className="location">
          <span className="main-text">Profesjonalne usługi księgowe</span>
          <span className="sub-text">- z Gdańska dla całej Polski</span>
        </p>
      </div>
    </div>
  );
}
