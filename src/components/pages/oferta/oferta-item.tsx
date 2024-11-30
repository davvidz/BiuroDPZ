import { OfertaItem } from "../../../typescript/types";
import "./oferta-item.scss";

interface OfertaItemsProps {
  ofertaItem: OfertaItem[];
}

export const OfertaItems = ({ ofertaItem }: OfertaItemsProps) => {
  return (
    <div className="oferta">
      {ofertaItem.map((item: OfertaItem) => (
        <div className="oferta-item">
          <div className="title">
            <h2>{item.title}</h2>
            <img src={item.icon} alt="oferta-item" className="icon" />
          </div>
          <div className="text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};
