"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="FinnFluence etusivu">
          <span className={styles.brandText}>
            <span className={styles.brandFinn}>FINN</span>
            <span className={styles.brandFluence}>FLUENCE</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Päävalikko">
          <Link className={styles.navLink} href="/">ETUSIVU</Link>
          <Link className={styles.navLink} href="/vaikuttajat">VAIKUTTAJAT</Link>
          <Link className={styles.navLink} href="/meista">MEISTÄ</Link>
          <Link className={styles.navLink} href="/yhteystiedot">YHTEYSTIEDOT</Link>
          <Link className={styles.navCta} href="/tilaa-kampanja">Tilaa kampanja</Link>
        </nav>

        {/* Бургер кнопка для мобильных */}
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Мобильное меню */}
      <nav
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Мобильное меню"
      >
        <Link className={styles.mobileNavLink} href="/" onClick={closeMenu}>ETUSIVU</Link>
        <Link className={styles.mobileNavLink} href="/vaikuttajat" onClick={closeMenu}>VAIKUTTAJAT</Link>
        <Link className={styles.mobileNavLink} href="/meista" onClick={closeMenu}>MEISTÄ</Link>
        <Link className={styles.mobileNavLink} href="/yhteystiedot" onClick={closeMenu}>YHTEYSTIEDOT</Link>
        <Link className={styles.mobileNavCta} href="/tilaa-kampanja" onClick={closeMenu}>Tilaa kampanja</Link>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}