import { NavLink } from "react-router-dom";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { Logo } from "../header/logo/logo";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="item">
        <div className="logo">
          <Logo />
        </div>
        <div>Biuro Rachunkowe DPZ</div>
        <div>Diana Pamela Zapadka</div>
        <div>NIP: 7393611855</div>
        <div>REGON: 526956553</div>
      </div>
      <div className="item">
        <h3>Godziny otwarcia</h3>
        <div>Pon-Czw: 8:00-16:00</div>
        <div>Piątek: 8:00-16:00</div>
      </div>
      <div className="item">
        <h3>Kontakt</h3>
        <div>tel: 690 308 425</div>
        <div>email: biurodz@outlook.com</div>
        <div>
          <NavLink
            to={"https://www.facebook.com/profile.php?id=61553866601415"}
            target="blank"
          >
            <FaFacebook size={"30"} />
          </NavLink>
        </div>
        <div>
          <NavLink to={"kontakt"}>Formularz</NavLink>
        </div>
      </div>
    </div>
  );
};
