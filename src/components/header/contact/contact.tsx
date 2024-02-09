import { NavLink } from "react-router-dom";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="material-symbols-outlined">call</div>
      <div className="phone">
        <NavLink to={"tel:690308425"}>690 308 425</NavLink>
      </div>
      <div className="material-symbols-outlined">mail</div>
      <div className="email">
        <NavLink to={"mailto:biurodz@outlook.com"}>biurodz@outlook.com</NavLink>
      </div>
    </div>
  );
};
