import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top glow line */}
      <div className={styles.topLine} />

      <div className={styles.inner}>

        {/* Col 1 — Brand + about */}
        <div className={styles.col}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandFinn}>FINN</span>
            <span className={styles.brandFluence}>FLUENCE</span>
          </Link>
          <p className={styles.about}>
            Moderni vaikuttajamarkkinointialusta, joka yhdistää yritykset Suomen
            parhaisiin TikTok- ja some-vaikuttajiin. Luomme viraaleja kampanjoita,
            jotka tuottavat mitattavia tuloksia.
          </p>
          {/* Social icons */}
          <div className={styles.socials}>
            <a href="https://www.tiktok.com/@silyavkin.nikita" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigointi</h4>
          <nav className={styles.navList}>
            <Link href="/" className={styles.navLink}>Etusivu</Link>
            <Link href="/vaikuttajat" className={styles.navLink}>Vaikuttajat</Link>
            <Link href="/meista" className={styles.navLink}>Meistä</Link>
          </nav>
        </div>

        {/* Col 3 — Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Palvelut</h4>
          <nav className={styles.navList}>
            <span className={styles.navText}>TikTok-markkinointi</span>
            <span className={styles.navText}>Instagram-vaikuttajat</span>
            <span className={styles.navText}>YouTube-yhteistyö</span>
            <span className={styles.navText}>Kampanjastrategia</span>
            <span className={styles.navText}>Analytiikka & raportointi</span>
          </nav>
        </div>

        {/* Col 4 — Contacts */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Yhteystiedot</h4>
          <div className={styles.contacts}>
            <a href="mailto:info@finnfluence.fi" className={styles.contactRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.contactIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@finnfluence.fi
            </a>
            <a href="tel:+358401234567" className={styles.contactRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.contactIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +358 40 123 4567
            </a>
            <div className={styles.contactRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.contactIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Helsinki, Suomi
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span className={styles.copyright}>© FinnFluence 2026. Kaikki oikeudet pidätetään.</span>
          <div className={styles.bottomLinks}>
            <a href="/tietosuoja" className={styles.bottomLink}>Tietosuoja</a>
            <span className={styles.divider}>·</span>
            <a href="/kayttoehdot" className={styles.bottomLink}>Käyttöehdot</a>
          </div>
        </div>
      </div>
    </footer>
  );
}