import { NavLink } from "react-router-dom";
import "./logo.scss";
import logoShort from "../../../assets/images/logoShort.png";

export function Logo() {
  return (
    <div className="logo-wrapper">
      <NavLink to="/">
        <div className="logo">
          <img
            src={logoShort}
            alt="Wejście do biura"
            loading="lazy"
            width={"100px"}
            height={"50px"}
          />
        </div>
      </NavLink>
    </div>
  );
}
