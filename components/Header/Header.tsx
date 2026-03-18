"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "ETUSIVU",     href: "#etusivu" },
  { label: "VAIKUTTAJAT", href: "#vaikuttajat" },
  { label: "MEISTÄ",      href: "#meista" },
  { label: "YHTEYSTIEDOT",href: "#yhteystiedot" },
];

interface HeaderProps {
  onOpenModal?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a
          href="#etusivu"
          className={styles.brand}
          aria-label="FinnFluence etusivu"
          onClick={(e) => { e.preventDefault(); scrollTo("#etusivu"); }}
        >
          <span className={styles.brandText}>
            <span className={styles.brandFinn}>FINN</span>
            <span className={styles.brandFluence}>FLUENCE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Päävalikko">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={styles.navLink}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <button className={styles.navCta} onClick={onOpenModal}>
            Tilaa kampanja
          </button>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Valikko"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobiilinavigaatio"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={styles.mobileNavLink}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <button
          className={styles.mobileNavCta}
          onClick={() => { setIsMenuOpen(false); onOpenModal?.(); }}
        >
          Tilaa kampanja
        </button>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}