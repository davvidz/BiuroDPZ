import styles from "./pkpir.module.scss";
import { PriceListTable } from "../components/PriceListTable/PriceListTable";
import { priceListData } from "../data/priceListconfig.";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik KPiR – Biuro Rachunkowe DPZ",
  description:
    "Sprawdź ceny prowadzenia księgowości w formie podatkowej księgi przychodów i rozchodów (KPiR) w Biurze DPZ.",
  openGraph: {
    title: "Cennik KPiR – Biuro Rachunkowe DPZ",
    description:
      "Poznaj szczegółowy cennik usług księgowych w ramach prowadzenia KPiR.",
    url: "https://www.biurodpz.pl/price-list/kpir",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik KPiR Biuro DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik KPiR – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź cennik prowadzenia księgowości KPiR w Biurze Rachunkowym DPZ.",
    images: ["/og-image.jpg"],
  },
};

export default function PriceListKpir() {
  return (
    <div className={styles.containerKpir}>
      <h2 className={styles.title}>
        Cennik – Podatkowa Księga Przychodów i Rozchodów
      </h2>
      <PriceListTable tableData={priceListData[1]} />
    </div>
  );
}
