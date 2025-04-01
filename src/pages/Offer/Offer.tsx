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
          // Sprawdzamy czy to punkt listy (linia zaczynająca się od "•")
          const isListItem = paragraph.trim().startsWith("•");
          // Usuwamy znak • jeśli istnieje
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
    <div className="services-grid">
      {offerData.map((item) => {
        const isExpanded = expandedItems[item.key];

        return (
          <div className="service-card" key={item.key}>
            <div className="service-header">
              <span className="service-icon">{item.icon}</span>
              <h3 className="service-title">{item.title}</h3>
            </div>
            <div className="service-content">
              {renderText(item.text, isExpanded)}
              <div className="button-container">
                <button
                  className="read-more-btn"
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
