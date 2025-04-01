import styles from "./Offer.module.scss";
import { useState } from "react";
import { offerData } from "./data/offer.config";

export default function Offer() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderText = (text: string[], isExpanded: boolean) => {
    if (!isExpanded) {
      return (
        <>
          <p>{text[0]}</p>
          <p>...</p>
        </>
      );
    }

    return (
      <>
        {text.map((paragraph, index) => {
          const isListItem = paragraph.trim().startsWith("•");
          const cleanText = isListItem
            ? paragraph.replace("•", "").trim()
            : paragraph;

          return isListItem ? (
            <li key={index} className="list-item">
              {cleanText}
            </li>
          ) : (
            <p key={index}>{cleanText}</p>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.servicesGrid}>
      {offerData.map((item) => {
        const isExpanded = expandedItems[item.key];

        return (
          <div className={styles.serviceCard} key={item.key}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceIcon}>{item.icon}</span>
              <h3 className={styles.serviceTitle}>{item.title}</h3>
            </div>
            <div className={styles.serviceContent}>
              {renderText(item.text, isExpanded)}
              <div className={styles.buttonContainer}>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => toggleExpand(item.key)}
                >
                  {isExpanded ? "Zwiń" : "Dowiedz się więcej"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
