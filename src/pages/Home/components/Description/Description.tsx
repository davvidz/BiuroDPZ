import styles from "./Description.module.scss";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiDatabase, FiShield } from "react-icons/fi";

export function Description() {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.valueBlocks}>
        <div className={styles.valueBlock}>
          <div className={styles.valueIcon}>
            <FiDatabase size={32} />
          </div>
          <h3>Kompletne rozwiązania</h3>
          <p>Pełny zakres usług księgowych</p>
        </div>

        <div className={styles.valueBlock}>
          <div className={styles.valueIcon}>
            <FaRegClock size={32} />
          </div>
          <h3>Terminowość</h3>
          <p>100% dotrzymywanych terminów</p>
        </div>

        <div className={styles.valueBlock}>
          <div className={styles.valueIcon}>
            <FiShield size={32} />
          </div>
          <h3>Bezpieczeństwo</h3>
          <p>Bankowe standardy ochrony</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Profesjonalne biuro rachunkowe dla Twojej firmy</h2>
        </div>
        <div className={styles.item}>
          <p>
            Jako <strong>zespół doświadczonych księgowych</strong> z Gdańska,
            oferujemy
            <strong>kompleksowe wsparcie finansowe</strong> dla przedsiębiorstw.
            Dzięki <strong>nowoczesnym systemom</strong> i{" "}
            <strong>ścisłej współpracy w zespole</strong>, zapewniamy naszym
            klientom <strong>nieprzerwane wsparcie</strong> i{" "}
            <strong>pełną kontrolę finansową</strong>.
          </p>
        </div>
      </div>

      <div className={styles.ctaWrapper}>
        <Link to="/contact" className={styles.ctaButton}>
          <span>Zapytaj o ofertę dla firmy</span>
          <FaArrowRight className={styles.valueIcon} />
        </Link>
      </div>
    </div>
  );
}
