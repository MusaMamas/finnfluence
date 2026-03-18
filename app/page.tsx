import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero секция с фоновым изображением */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Vie brändisi uudelle tasolle<br />
            <span className={styles.highlight}>vaikuttajien kanssa</span>
          </h1>
          <p className={styles.heroSubtitle}>
            FinnFluence on moderni alusta yrityksille, jotka haluavat hyödyntää vaikuttajamarkkinointia tehokkaasti.
          </p>
          <button className={styles.ctaButton}>
            Ota yhteyttä
          </button>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Mitä me teemme -osio */}
      <section className={styles.whatWeDo} id="whatWeDo">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Mitä me teemme</h2>
          <p className={styles.sectionDescription}>
            Autamme yrityksiä kasvamaan digitaalisesti tarjoamalla kokonaisvaltaisia markkinointiratkaisuja
          </p>

          <div className={styles.servicesGrid}>
            {/* Palvelu 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Strategia ja konsultointi</h3>
              <p className={styles.serviceDescription}>
                Luomme räätälöidyn digitaalisen strategian, joka sopii yrityksesi tavoitteisiin ja kohdeyleisöön
              </p>
            </div>

            {/* Palvelu 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Sisällöntuotanto</h3>
              <p className={styles.serviceDescription}>
                Tuotamme laadukasta ja sitouttavaa sisältöä sosiaaliseen mediaan, blogeihin ja verkkosivuille
              </p>
            </div>

            {/* Palvelu 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Sosiaalisen median hallinta</h3>
              <p className={styles.serviceDescription}>
                Hoidamme yrityksesi some-kanavat ammattitaidolla ja kasvattamme seuraajamääriä orgaanisesti
              </p>
            </div>

            {/* Palvelu 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Maksettu mainonta</h3>
              <p className={styles.serviceDescription}>
                Optimoimme mainoskampanjat Facebookissa, Instagramissa, TikTokissa ja Googlessa maksimaalisen ROI:n saavuttamiseksi
              </p>
            </div>

            {/* Palvelu 5 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Analytiikka ja raportointi</h3>
              <p className={styles.serviceDescription}>
                Seuraamme kampanjoidesi suorituskykyä ja toimitamme selkeitä raportteja tuloksista
              </p>
            </div>

            {/* Palvelu 6 */}
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Influencer-markkinointi</h3>
              <p className={styles.serviceDescription}>
                Yhdistämme brändisi oikeiden vaikuttajien kanssa aidoille ja vaikuttaville kampanjoille
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaikuttajat-osio */}
      <section className={styles.influencers} id="vaikuttajat">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Vaikuttajat</h2>
          <p className={styles.sectionDescription}>
            Tutustuu yhteistyövaikuttajiimme ja löydä sopiva kumppani brändillesi
          </p>

          <div className={styles.influencersGrid}>

            {/* Nikita */}
            <div className={styles.influencerCard}>
              <div className={styles.influencerImageWrap}>
                <img src="/nikita.jpg" alt="Nikita Silyavkin" className={styles.influencerImage} />
                <div className={styles.influencerOverlay}>
                  <a href="/vaikuttajat/nikita" className={styles.lisatiedotBtn}>Lisätiedot</a>
                </div>
              </div>
              <div className={styles.influencerInfo}>
                <h3 className={styles.influencerName}>Nikita Silyavkin</h3>
                <div className={styles.socialLinks}>
                  <a href="https://www.tiktok.com/@silyavkin.nikita" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    {/* TikTok icon */}
                    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                    TikTok
                  </a>
                </div>
                <div className={styles.influencerStats}>
                  <span className={styles.statItem}>
                    <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    ~45 000 näyttöä / video
                  </span>
                </div>
              </div>
            </div>

            {/* Placeholder 1 */}
            <div className={styles.influencerCard}>
              <div className={styles.influencerImageWrap}>
                <div className={styles.influencerPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.placeholderIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className={styles.influencerOverlay}>
                  <span className={styles.comingSoon}>Tulossa pian</span>
                </div>
              </div>
              <div className={styles.influencerInfo}>
                <h3 className={styles.influencerName}>Vaikuttaja 2</h3>
                <div className={styles.socialLinks}>
                  <span className={styles.socialLinkPlaceholder}>
                    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    Instagram
                  </span>
                </div>
                <div className={styles.influencerStats}>
                  <span className={styles.statItem}>
                    <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    — näyttöä / video
                  </span>
                </div>
              </div>
            </div>

            {/* Placeholder 2 */}
            <div className={styles.influencerCard}>
              <div className={styles.influencerImageWrap}>
                <div className={styles.influencerPlaceholder}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.placeholderIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className={styles.influencerOverlay}>
                  <span className={styles.comingSoon}>Tulossa pian</span>
                </div>
              </div>
              <div className={styles.influencerInfo}>
                <h3 className={styles.influencerName}>Vaikuttaja 3</h3>
                <div className={styles.socialLinks}>
                  <span className={styles.socialLinkPlaceholder}>
                    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                    TikTok
                  </span>
                </div>
                <div className={styles.influencerStats}>
                  <span className={styles.statItem}>
                    <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    — näyttöä / video
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Placeholder muille osioille */}
      <section className={styles.placeholder}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Referenssit</h2>
          <p className={styles.placeholderText}>Tulossa pian...</p>
        </div>
      </section>
    </div>
  );
}