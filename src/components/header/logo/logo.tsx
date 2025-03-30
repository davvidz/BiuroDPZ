import { NavLink } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <NavLink to="/">
        <div className="logo">
          <img
            src="/photos/logoShort.png"
            alt="Wejście do biura" // Lepszy alt tekst
            loading="lazy" // Lazy loading
            width={"100px"}
            height={"50px"}
          />
        </div>
      </NavLink>
    </div>
  );
};
