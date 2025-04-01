import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiDatabase, FiShield } from "react-icons/fi";

export function Description() {
  return (
    <div className="description-container">
      <div className="value-blocks">
        <div className="value-block">
          <div className="value-icon">
            <FiDatabase size={32} />
          </div>
          <h3>Kompletne rozwiązania</h3>
          <p>Pełny zakres usług księgowych</p>
        </div>

        <div className="value-block">
          <div className="value-icon">
            <FaRegClock size={32} />
          </div>
          <h3>Terminowość</h3>
          <p>100% dotrzymywanych terminów</p>
        </div>

        <div className="value-block">
          <div className="value-icon">
            <FiShield size={32} />
          </div>
          <h3>Bezpieczeństwo</h3>
          <p>Bankowe standardy ochrony</p>
        </div>
      </div>

      <div className="content">
        <div className="title">
          <h2>Profesjonalne biuro rachunkowe dla Twojej firmy</h2>
        </div>
        <div className="item">
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

      <div className="cta-wrapper">
        <Link to="/kontakt" className="cta-button">
          <span>Zapytaj o ofertę dla firmy</span>
          <FaArrowRight className="cta-icon" />
        </Link>
      </div>
    </div>
  );
}
