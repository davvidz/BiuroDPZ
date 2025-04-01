import styles from "./PriceList.module.scss";

import { PriceListTable } from "./components/PriceListTable/PriceListTable";
import { PriceListTab } from "./components/PriceListTab/PriceListTab";
import { useState } from "react";
import { priceListData } from "./data/priceListconfig.";

export default function PriceList() {
  const [activeCard, setActiveCard] = useState(1);
  const handleClick = (index: number) => setActiveCard(index);

  return (
    <div className="containerCennik">
      <div className="cennik">
        <div className="zakladki">
          <PriceListTab
            name="Ryczałt Ewidencjonowany"
            index={1}
            isActive={activeCard === 1}
            onClickHandler={handleClick}
          />
          <PriceListTab
            name="Podatkowa Księga Przychodów i Rozchodów"
            index={2}
            isActive={activeCard === 2}
            onClickHandler={handleClick}
          />
          <PriceListTab
            name="Usługi Dodatkowe"
            index={3}
            isActive={activeCard === 3}
            onClickHandler={handleClick}
          />
          <PriceListTab
            name="Kadry i Płace"
            index={4}
            isActive={activeCard === 4}
            onClickHandler={handleClick}
          />
        </div>
        <PriceListTable tableData={priceListData[activeCard - 1]} />
      </div>
    </div>
  );
}
