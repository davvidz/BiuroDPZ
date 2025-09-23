import styles from "./ryczalt.module.scss";
import { PriceListTable } from "../components/PriceListTable/PriceListTable";
import { priceListData } from "../data/priceListconfig.";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik Ryczałt – Biuro Rachunkowe DPZ",
  description:
    "Poznaj ceny prowadzenia księgowości w formie ryczałtu ewidencjonowanego w Biurze Rachunkowym DPZ.",
  openGraph: {
    title: "Cennik Ryczałt – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź szczegółowy cennik usług księgowych w formie ryczałtu ewidencjonowanego.",
    url: "https://www.biurodpz.pl/price-list/ryczalt",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik Ryczałt Biuro DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik Ryczałt – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź cennik prowadzenia księgowości w ryczałcie w Biurze DPZ.",
    images: ["/og-image.jpg"],
  },
};

export default function PriceListRyczalt() {
  return (
    <div className={styles.containerRyczalt}>
      <h2 className={styles.title}>Cennik – Ryczałt ewidencjonowany</h2>
      <PriceListTable tableData={priceListData[0]} />
    </div>
  );
}
