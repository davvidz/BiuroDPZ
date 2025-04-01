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
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <button className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* <div className={`nav-contact-wrapper ${isMenuOpen ? "active" : ""}`}> */}
        <div
          className={`${styles["nav-contact-wrapper"]} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <Navigation />
          <Contact />
        </div>
      </div>
    </header>
  );
}
