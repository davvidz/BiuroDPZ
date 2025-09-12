import { Banner } from "@components/ui/Banner/Banner";
import { Description } from "@components/ui/Description/Description";
import { ImageSection } from "@components/ui/ImageSection/ImageSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="sr-only">
        Biuro Rachunkowe Diana Pamela Zapadka – Profesjonalna księgowość
      </h1>

      {/* Sekcja obrazkowa */}
      <section aria-label="Zdjęcia i grafiki biura">
        <ImageSection />
      </section>

      {/* Baner główny */}
      <section aria-label="Baner z ofertą biura">
        <Banner />
      </section>

      {/* Opis usług */}
      <section aria-label="Opis usług księgowych">
        <Description />
      </section>
    </main>
  );
}
