import styles from "./extra.module.scss";
import { PriceListTable } from "../components/PriceListTable/PriceListTable";
import { priceListData } from "../data/priceListconfig.";
import type { Metadata } from "next";
import tableStyles from "../components/PriceListTable/PriceListTable.module.scss";

export const metadata: Metadata = {
  title: "Cennik Usługi dodatkowe – Biuro Rachunkowe DPZ",
  description:
    "Sprawdź ceny usług dodatkowych w Biurze Rachunkowym DPZ – konsultacje podatkowe, doradztwo i inne.",
  openGraph: {
    title: "Cennik Usługi dodatkowe – Biuro Rachunkowe DPZ",
    description:
      "Poznaj szczegółowy cennik usług dodatkowych oferowanych przez Biuro Rachunkowe DPZ.",
    url: "https://www.biurodpz.pl/price-list/uslugi-dodatkowe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik Usługi dodatkowe Biuro DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik Usługi dodatkowe – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź cennik usług dodatkowych w Biurze DPZ, m.in. konsultacje podatkowe i doradztwo.",
    images: ["/og-image.jpg"],
  },
};

export default function PriceListExtra() {
  return (
    <div className={styles.containerExtra}>
      <h2 className={styles.title}>Cennik – Usługi dodatkowe</h2>
      <div className={tableStyles.leftAligned}>
        <PriceListTable tableData={priceListData[2]} table="left" />
      </div>
    </div>
  );
}
