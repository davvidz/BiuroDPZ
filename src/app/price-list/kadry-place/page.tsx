import styles from "../price-list.module.scss";
import { PriceListTable } from "../components/PriceListTable/PriceListTable";
import { priceListData } from "../data/priceListconfig.";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik Kadry i Płace – Biuro Rachunkowe DPZ",
  description:
    "Poznaj ceny obsługi kadrowo-płacowej w Biurze Rachunkowym DPZ – rozliczanie pracowników i umów.",
  openGraph: {
    title: "Cennik Kadry i Płace – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź szczegółowy cennik obsługi kadrowo-płacowej w Biurze DPZ.",
    url: "https://www.biurodpz.pl/price-list/kadry-place",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik Kadry i Płace Biuro DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik Kadry i Płace – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź ceny obsługi kadr i płac w Biurze Rachunkowym DPZ – profesjonalna obsługa pracowników i umów.",
    images: ["/og-image.jpg"],
  },
};

export default function PriceListHR() {
  return (
    <div className={styles.containerCennik}>
      <h1 className={styles.pageTitle}>Cennik – Kadry i płace</h1>
      <PriceListTable tableData={priceListData[3]} />
    </div>
  );
}
