import { Banner } from "@components/ui/Banner/Banner";
import { Description } from "@components/ui/Description/Description";
import Head from "next/head";
import { ImageSection } from "@components/ui/ImageSection/ImageSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Biuro Rachunkowe Diana Pamela Zapadka – Gdańsk i zdalna księgowość dla
          całej Polski
        </title>
        <meta
          name="description"
          content="Profesjonalne usługi księgowe z Gdańska i zdalna księgowość dla firm z całej Polski. Doradztwo, księgowość online i obsługa finansowa firm."
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Biuro Rachunkowe Diana Pamela Zapadka"
        />
        <meta
          property="og:description"
          content="Profesjonalne usługi księgowe z Gdańska dla klientów z całej Polski. Doradztwo, księgowość online i obsługa finansowa firm."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />{" "}
        {/* obrazek do social media */}
        <meta property="og:url" content="https://twojadomena.pl" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Biuro Rachunkowe Diana Pamela Zapadka"
        />
        <meta
          name="twitter:description"
          content="Profesjonalne usługi księgowe z Gdańska dla klientów z całej Polski. Doradztwo, księgowość online i obsługa finansowa firm."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <main className={styles.main}>
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
    </>
  );
}
