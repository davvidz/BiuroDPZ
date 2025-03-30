import { cennikTables } from "../../../data/cennik";
import { CennikTable } from "./cennik-table";
import { Zakladka } from "./cennik-zakladka";
import "./cennik.scss";
import { useState } from "react";

export const Cennik = () => {
  const [activeCard, setActiveCard] = useState(1);
  const handleClick = (index: number) => setActiveCard(index);

  return (
    <div className="containerCennik">
      <div className="cennik">
        <div className="zakladki">
          <Zakladka
            name="Ryczałt Ewidencjonowany"
            index={1}
            isActive={activeCard === 1}
            onClickHandler={handleClick}
          />
          <Zakladka
            name="Podatkowa Księga Przychodów i Rozchodów"
            index={2}
            isActive={activeCard === 2}
            onClickHandler={handleClick}
          />
          <Zakladka
            name="Usługi Dodatkowe"
            index={3}
            isActive={activeCard === 3}
            onClickHandler={handleClick}
          />
          <Zakladka
            name="Kadry i Płace"
            index={4}
            isActive={activeCard === 4}
            onClickHandler={handleClick}
          />
        </div>
        <CennikTable tableData={cennikTables[activeCard - 1]} />
      </div>
    </div>
  );
};
