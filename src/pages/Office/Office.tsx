import styles from "./Office.module.scss";
import {
  FaChartLine,
  FaUserTie,
  FaQuoteLeft,
  FaLightbulb,
} from "react-icons/fa";
import poznajmnie from "../../assets/images/poznajmnie.jpg";
import entrance from "../../assets/images/entrance.jpg";
import jakpracujemy from "../../assets/images/jakpracujemy.jpg";

export default function Office() {
  return (
    <div className={styles.biuro}>
      {/* Sekcja 1 - O mnie */}
      <div className={styles.section}>
        <div className={styles.description}>
          <h2>Poznaj mnie bliżej</h2>
          <div className={styles.aboutContent}>
            <div className={styles.textColumn}>
              <p>
                <strong>
                  Diana Pamela Zapadka
                  <br />
                  Księgowa | Przedsiębiorca | Założycielka Biura Rachunkowego
                  <br />
                </strong>
                <br />
                Moja przygoda z księgowością zaczęła się klasycznie – od etatu.
                Po latach zdobywania doświadczenia i pogłębiania wiedzy
                podatkowej postanowiłam wykorzystać swoje kompetencje, aby
                pomagać innym przedsiębiorcom.
              </p>
              <p>
                W ten sposób powstało moje biuro rachunkowe.{" "}
                <strong>
                  Dziś, jako zarówno księgowa, jak i właścicielka firmy,
                  doskonale rozumiem wyzwania,
                </strong>{" "}
                z jakimi mierzą się przedsiębiorcy – zarówno ci prowadzący małe
                biznesy, jak i rozwijający większe przedsięwzięcia.
              </p>
            </div>

            <div className={styles.textColumn}>
              <p>
                Wiem, jak ważne są{" "}
                <strong>
                  przejrzyste rozliczenia, terminowość i spokój związany z
                  bezpieczeństwem finansowym firmy
                </strong>
                . Dlatego stworzyłam miejsce, w którym przedsiębiorcy mogą
                powierzyć wszystkie kwestie podatkowe doświadczonemu ekspertowi.
              </p>
              <p>
                Zaufanie, rzetelność i indywidualne podejście to fundamenty, na
                których opieram współpracę z klientami.{" "}
                <strong>
                  Zapraszam do kontaktu – wspólnie sprawmy, by Twoja księgowość
                  stała się strategiczną przewagą Twojego biznesu!
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            src={poznajmnie}
            alt="Wejście do biura Rachunkowego DPZ"
            loading="lazy"
          />
          <div className={styles.highlight}>
            <FaLightbulb className={styles.quoteIcon} />
            <p>
              Prowadząc własną firmę, poznałam{" "}
              <strong>prawdziwe wyzwania przedsiębiorców</strong>. Dlatego w DPZ
              nie tylko rozliczamy podatki -{" "}
              <strong>dbamy o bezpieczeństwo finansowe Twojego biznesu</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Sekcja 2 - O biurze */}
      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.description}>
          <h2>Nasze Biuro</h2>
          <div className={styles.aboutContent}>
            <div className={styles.textColumn}>
              <p>
                Jesteśmy nowoczesną firmą księgową stworzoną z myślą o
                potrzebach przedsiębiorców.{" "}
                <strong>
                  W DPZ nie tylko prowadzimy księgowość - budujemy długotrwałe
                  relacje, oparte na wzajemnym zrozumieniu i zaufaniu.
                </strong>
              </p>
              <p>
                Nasze wieloletnie doświadczenie w obsłudze firm z różnych
                sektorów pozwala nam precyzyjnie dostosować usługi do specyfiki
                Twojej działalności.{" "}
                <strong>
                  Zapewniamy rzetelne rozliczenia podatkowe, terminowość w
                  składaniu dokumentów oraz fachową pomoc w zakresie
                  optymalizacji kosztów.
                </strong>
              </p>
            </div>

            <div className={styles.textColumn}>
              <p>
                W DPZ stale poszerzamy swoją wiedzę, uczestnicząc w szkoleniach
                i na bieżąco śledząc zmiany przepisów.{" "}
                <strong>
                  Dzięki temu możesz mieć pewność, że Twoja firma działa w pełni
                  zgodnie z prawem.
                </strong>
              </p>
              <p>
                Pracujemy w formie zdalnej, wykorzystując nowoczesne
                technologie, co pozwala nam efektywnie obsługiwać klientów z
                całego kraju.{" "}
                <strong>
                  Współpraca z nami to wygoda, oszczędność czasu i pewność, że
                  wszystkie kwestie finansowe są w profesjonalnych rękach.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            src={entrance}
            alt="Wejście do biura Rachunkowego DPZ"
            loading="lazy"
          />
          <blockquote className={styles.highlight}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p>
              W DPZ nie jesteś kolejnym numerem -{" "}
              <strong>Twój biznes to nasza wspólna sprawa.</strong>
            </p>
          </blockquote>
        </div>
      </div>
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitItem}>
          <FaChartLine className={styles.benefitIcon} />
          <h3>Optymalizacja podatkowa</h3>
          <p>Świadome zarządzanie kosztami firmy</p>
        </div>

        <div className={styles.benefitItem}>
          <FaUserTie className={styles.benefitIcon} />
          <h3>Osobisty opiekun</h3>
          <p>Dedykowany specjalista dla Twojej firmy</p>
        </div>
      </div>

      {/* Sekcja 3 - Jak pracujemy */}
      <div className={styles.section}>
        <div className={styles.description}>
          <h2>Jak pracujemy</h2>
          <div className={styles.processContent}>
            <ul className={styles.processList}>
              <li className={styles.processItem}>
                <span className={styles.step}>01</span>
                <div>
                  <h3>Analiza potrzeb</h3>
                  <p>Indywidualne podejście do każdego klienta</p>
                </div>
              </li>
              <li className={styles.processItem}>
                <span className={styles.step}>02</span>
                <div>
                  <h3>Implementacja</h3>
                  <p>Dostosowane rozwiązania księgowe</p>
                </div>
              </li>
              <li className={styles.processItem}>
                <span className={styles.step}>03</span>
                <div>
                  <h3>Stałe wsparcie</h3>
                  <p>Regularne przeglądy i optymalizacje</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            src={jakpracujemy}
            alt="Nowoczesne rozwiązania księgowe DPZ"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
