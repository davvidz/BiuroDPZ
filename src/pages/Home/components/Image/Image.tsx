import styles from "./Image.module.scss";
import logoPionowe from "../../../../assets/images/logoPionowe.png";

export function Image() {
  return (
    <div className={styles.photo}>
      <div className={styles.title}>
        <img
          src={logoPionowe}
          alt="Logo Biura Rachunkowego Diana Pamela Zapadka"
          loading="lazy"
          className={styles.responsiveLogo}
        />
        <p className={styles.location}>
          <span className={styles.mainText}>Profesjonalne usługi księgowe</span>
          <span className={styles.subText}>- z Gdańska dla całej Polski</span>
        </p>
      </div>
    </div>
  );
}
