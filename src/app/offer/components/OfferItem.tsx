import styles from "./OfferItem.module.scss";
import { ItemOffer } from "types/types";

interface OfferItemProps {
  offerItem: ItemOffer[];
}

export function OfferItem({ offerItem }: OfferItemProps) {
  return (
    <div className={styles.offer}>
      {offerItem.map((item: ItemOffer) => (
        <div className={styles.offerItem}>
          <div className={styles.title}>
            <h2>{item.title}</h2>
            <img src={item.icon} alt="oferta-item" className={styles.icon} />
          </div>
          <div className={styles.text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
