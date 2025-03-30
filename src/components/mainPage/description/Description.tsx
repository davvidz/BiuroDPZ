import { BlockItem } from "./block-item/Block-item";
import "./description.scss";
import { GiFist, GiMagnifyingGlass } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

export const Description = () => {
  return (
    <div className="description-container">
      <div className="block-items">
        <BlockItem icon={<GiFist size={60} />} title="Solidność" />
        <BlockItem icon={<FaPeopleGroup size={60} />} title="Profesjonalizm" />
        <BlockItem icon={<GiMagnifyingGlass size={60} />} title="Rzetelność" />
      </div>
      <div className="content">
        <div className="title">
          <h2>Biuro księgowe dla Twojego biznesu</h2>
        </div>
        <div className="item">
          Szukasz księgowości, która pomoże Ci w prowadzeniu swojej
          działalności? Chcesz zaoszczędzić swój czas, który jest tak cenny dla
          przedsiębiorców? Dobrze trafiłeś! Sprawdź nasze usługi księgowe i
          zobacz co możemy zrobić dla Twojego biznesu.
        </div>
      </div>
    </div>
  );
};
