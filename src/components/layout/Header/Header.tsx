"use client";
import styles from "./Header.module.scss";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "@components/ui/Logo/Logo";
import { Contact } from "./components/Contact/Contact";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo aria-label="Biuro Rachunkowe Diana Pamela Zapadka" />

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          id="main-navigation"
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
