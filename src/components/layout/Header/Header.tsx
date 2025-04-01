import styles from "./Header.module.scss";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "../../ui/Logo/Logo";
import { Contact } from "./components/Contact/Contact";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-contact-wrapper ${isMenuOpen ? "active" : ""}`}>
          <Navigation />
          <Contact />
        </div>
      </div>
    </header>
  );
}
