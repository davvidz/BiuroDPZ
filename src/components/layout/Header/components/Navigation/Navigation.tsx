"use client";

import Link from "next/link";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navigation} aria-label="Główna nawigacja">
      <ul className={styles.naviList}>
        <li>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            O biurze
          </Link>
        </li>
        <li>
          <Link
            href="/offer"
            aria-current={pathname === "/offer" ? "page" : undefined}
          >
            Oferta
          </Link>
        </li>

        <li
          className={styles.dropdown}
          ref={dropdownRef}
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            className={styles.dropdownToggle}
            aria-expanded={open}
            aria-controls="price-submenu"
            onClick={() => setOpen((o) => !o)} // klik też otwiera/zamyka
          >
            Cennik <FaChevronDown className={styles.icon} aria-hidden="true" />
          </button>

          <ul
            id="price-submenu"
            className={`${styles.dropdownMenu} ${open ? styles.open : ""}`}
            role="menu"
            aria-label="Podmenu Cennik"
          >
            <li>
              <Link href="/price-list/ryczalt">Ryczałt</Link>
            </li>
            <li>
              <Link href="/price-list/pkpir">PKPiR</Link>
            </li>
            <li>
              <Link href="/price-list/uslugi-dodatkowe">Usługi dodatkowe</Link>
            </li>
            <li>
              <Link href="/price-list/kadry-place">Kadry i płace</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            href="/vlog"
            aria-current={pathname === "/vlog" ? "page" : undefined}
          >
            Vlog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
