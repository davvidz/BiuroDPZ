"use client";
import styles from "./Header.module.scss";
import { useState, useRef, useEffect } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "@components/ui/Logo/Logo";
import { Contact } from "./components/Contact/Contact";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  // ✅ zamykanie menu po kliknięciu poza nim
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

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
          ref={wrapperRef}
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
