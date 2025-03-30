import { ofertaItem } from "../../../data/oferta";
import { OfertaItems } from "./oferta-item";
import "./oferta.scss";

export const Oferta = () => {
  return (
    // <div className="container">
    //   <h1>Zakres usług</h1>
    //   <div className="oferta-wrapper">
    //     <OfertaItems ofertaItem={ofertaItem} />
    //   </div>
    // </div>
    // <div className="offer-container">
    //   {ofertaItem.map((item) => (
    //     <div className="offer-card">
    //       <>
    //         <h3>{item.title}</h3>
    //         <p>{item.text}</p>
    //         {/* <a href="#kontakt" className="cta-button">
    //           Dowiedz się więcej
    //         </a> */}
    //       </>
    //     </div>
    //   ))}
    // </div>

    <div className="services-grid">
      {ofertaItem.map((item) => (
        <div className="service-card" key={item.key}>
          <div className="service-header">
            <span className="service-icon">{item.icon}</span>
            <h3 className="service-title">{item.title}</h3>
          </div>
          <div className="service-content">
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
