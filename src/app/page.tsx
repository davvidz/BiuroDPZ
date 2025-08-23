import { Banner } from "@components/ui/Banner/Banner";
import { Description } from "@components/ui/Description/Description";
import Head from "next/head";
import { ImageSection } from "@components/ui/ImageSection/ImageSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biuro Rachunkowe Diana Pamela Zapadka</title>
        <meta
          name="description"
          content="Profesjonalne usługi księgowe z Gdańska dla całej Polski"
        />
        <meta
          property="og:title"
          content="Biuro Rachunkowe Diana Pamela Zapadka"
        />
        <meta
          property="og:description"
          content="Profesjonalne usługi księgowe z Gdańska dla całej Polski"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.main}>
        <ImageSection />
        <Banner />
        <Description />
      </div>
    </>
  );
}
