import { NavLink } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
  return (
    <NavLink to="/">
      <div className="logo">LOGO</div>
    </NavLink>
  );
};
