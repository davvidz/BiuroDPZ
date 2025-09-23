import styles from "./ImageSection.module.scss";
import Image from "next/image";

export function ImageSection() {
  return (
    <section
      aria-label="Zdjęcia biura i informacje o zdalnej księgowości"
      className={styles.photo}
    >
      <figure className={styles.title}>
        <Image
          src="/images/logoPionowe.png"
          alt="Logo Biura Rachunkowego Diana Pamela Zapadka – zdalna księgowość dla firm z całej Polski"
          width={1400}
          height={1000}
          className={styles.responsiveLogo}
        />
        <figcaption>
          <h2 className={styles.mainText}>Profesjonalne usługi księgowe</h2>
          <p className={styles.subText}>
            - z Gdańska dla całej Polski, w tym zdalna księgowość online
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
