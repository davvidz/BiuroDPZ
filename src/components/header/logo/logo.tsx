import { NavLink } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <NavLink to="/">
        <div className="logo">TU BĘDZIE LOGO</div>
      </NavLink>
    </div>
  );
};
