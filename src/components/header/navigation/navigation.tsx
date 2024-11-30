import { NavLink } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navi-list">
        <li>
          <NavLink to={"biuro"}>O biurze</NavLink>
        </li>
        <li>
          <NavLink to={"oferta"}>Oferta</NavLink>
        </li>
        <li>
          <NavLink to={"cennik"}>Cennik</NavLink>
        </li>

        <li>
          <NavLink to={"kontakt"}>Kontakt</NavLink>
        </li>
      </ul>
    </div>
  );
};
