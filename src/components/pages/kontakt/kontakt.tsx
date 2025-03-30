import { KontaktDane } from "./kontakt-dane";
import { KontaktFormularz } from "./kontakt-formularz";
import { KontaktZapraszamy } from "./kontakt-zapraszamy";
import "./kontakt.scss";

export const Kontakt = () => {
  return (
    <div className="container">
      <div className="kontakt-wrapper">
        <div className="kontakt">
          <KontaktDane />
          <KontaktZapraszamy />
          <KontaktFormularz />
        </div>
      </div>
    </div>
  );
};
