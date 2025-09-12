import styles from "./Offer.module.scss";
import { offerData } from "./data/offer.config";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta – Biuro Rachunkowe DPZ",
  description:
    "Poznaj pełen zakres usług księgowych Biura Rachunkowego DPZ – księgowość online, doradztwo podatkowe i obsługa firm w całej Polsce.",
};

export default function Offer() {
  return (
    <div className={styles.servicesGrid}>
      {offerData.map((item) => (
        <div className={styles.serviceCard} key={item.key}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceIcon}>{item.icon}</span>
            <h3 className={styles.serviceTitle}>{item.title}</h3>
          </div>
          <div className={styles.serviceContent}>
            {item.text.map((paragraph, index) => {
              const isLast = index === item.text.length - 1;

              return isLast ? (
                <p key={index}>
                  <strong>{paragraph}</strong>
                </p>
              ) : (
                <ul key={index}>
                  <li className={styles.listItem}>{paragraph}</li>
                </ul>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
