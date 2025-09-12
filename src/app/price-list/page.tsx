import styles from "./price-list.module.scss";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik usług księgowych – Biuro Rachunkowe DPZ",
  description:
    "Sprawdź aktualny cennik usług Biura Rachunkowego DPZ. Wybierz kategorię: ryczałt, KPiR, usługi dodatkowe lub kadry i płace.",
  openGraph: {
    title: "Cennik usług księgowych – Biuro Rachunkowe DPZ",
    description:
      "Poznaj ceny usług Biura Rachunkowego DPZ. Ryczałt, KPiR, usługi dodatkowe i kadry oraz płace.",
    url: "https://www.biurodpz.pl/price-list",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik usług księgowych Biura DPZ",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik usług księgowych – Biuro Rachunkowe DPZ",
    description:
      "Sprawdź cennik usług księgowych DPZ. Kompleksowa obsługa firm – ryczałt, KPiR, kadry i płace.",
    images: ["/og-image.jpg"],
  },
};

export default function PriceListPage() {
  return (
    <div className={styles.containerCennik}>
      {/* <h1 className={styles.pageTitle}>Cennik usług księgowych</h1> */}
      <p className={styles.pageSubtitle}>
        Wybierz kategorię, aby zobaczyć szczegółowe ceny usług księgowych.
      </p>

      <nav className={styles.zakladki} aria-label="Kategorie cennika">
        <Link href="/price-list/ryczalt" className={styles.zakladka}>
          Ryczałt Ewidencjonowany
        </Link>
        <Link href="/price-list/kpir" className={styles.zakladka}>
          Podatkowa Księga Przychodów i Rozchodów
        </Link>
        <Link href="/price-list/uslugi-dodatkowe" className={styles.zakladka}>
          Usługi dodatkowe
        </Link>
        <Link href="/price-list/kadry-place" className={styles.zakladka}>
          Kadry i płace
        </Link>
      </nav>
    </div>
  );
}
