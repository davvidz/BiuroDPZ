import { ofertaItem } from "../../../data/oferta";
import { OfertaItems } from "./oferta-item";
import "./oferta.scss";

export const Oferta = () => {
  return (
    <div className="container">
      <h1>Zakres usług</h1>
      <div className="oferta-wrapper">
        <OfertaItems ofertaItem={ofertaItem} />
      </div>
    </div>
  );
};
