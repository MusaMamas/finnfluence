import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero секция с фоновым изображением */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Muutamme brändisi<br />
            <span className={styles.highlight}>digitaaliseksi menestykseksi</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Strateginen kumppanisi sosiaalisessa mediassa ja digitaalisessa markkinoinnissa
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
