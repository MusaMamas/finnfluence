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
          <Link className={styles.navLink} href="/yritys">YRITYS</Link>
          <Link className={styles.navLink} href="/palvelut">PALVELUT</Link>
          <Link className={styles.navLink} href="/referenssit">REFERENSSIT</Link>
          <Link className={styles.navLink} href="/blogi">BLOGI</Link>
          <Link className={styles.navLink} href="/ota-yhteyttä">OTA YHTEYTTÄ</Link>
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
        <Link className={styles.mobileNavLink} href="/yritys" onClick={closeMenu}>YRITYS</Link>
        <Link className={styles.mobileNavLink} href="/palvelut" onClick={closeMenu}>PALVELUT</Link>
        <Link className={styles.mobileNavLink} href="/referenssit" onClick={closeMenu}>REFERENSSIT</Link>
        <Link className={styles.mobileNavLink} href="/blogi" onClick={closeMenu}>BLOGI</Link>
        <Link className={styles.mobileNavLink} href="/ota-yhteyttä" onClick={closeMenu}>OTA YHTEYTTÄ</Link>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}

