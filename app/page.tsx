"use client";

import { motion } from "framer-motion";
import { useModal } from "../context/ModalContext";
import InfluencerCard from "../components/InfluencerCard/InfluencerCard";
import CampaignCard from "../components/CampaignCard/CampaignCard";
import styles from "./page.module.css";

const campaigns = [
  {
    influencerName: "silyavkin.nikita",
    brand: "Tiflisi — Georgialainen Cafe & Baari",
    views: "~45 000",
    tiktokUrl: "https://vm.tiktok.com/ZNRu77KVq/",
    thumbnail: "/tiflis.jpeg",
    placeholder: false,
  },
  {
    influencerName: "vaikuttaja2",
    brand: "Kampanja 2",
    views: "—",
    placeholder: true,
  },
  {
    influencerName: "vaikuttaja3",
    brand: "Kampanja 3",
    views: "—",
    placeholder: true,
  },
];

const influencers = [
  {
    name: "Nikita Silyavkin",
    image: "/nikita.jpg",
    tiktok: "https://www.tiktok.com/@silyavkin.nikita",
    views: "~45 000",
    placeholder: false,
  },
  {
    name: "Vaikuttaja 2",
    views: "—",
    placeholder: true,
  },
  {
    name: "Vaikuttaja 3",
    views: "—",
    placeholder: true,
  },
];

const advantages = [
  {
    icon: "🎯",
    title: "Kohdennettu markkinointi",
    desc: "Yhdistämme brändisi juuri oikeaan yleisöön valitsemalla vaikuttajan, jonka seuraajat vastaavat täydellisesti asiakasprofiiliasi.",
  },
  {
    icon: "📈",
    title: "Mitattavat tulokset",
    desc: "Jokainen kampanja on seurattavissa reaaliajassa. Raportoimme näyttömäärät, sitoutumisen ja konversiot selkeästi.",
  },
  {
    icon: "⚡",
    title: "Nopea toteutus",
    desc: "Kampanja voi olla käynnissä muutamassa päivässä. Emme tuhlaa aikaa — me toimimme nopeasti ja tehokkaasti.",
  },
  {
    icon: "🤝",
    title: "Luotettavat kumppanit",
    desc: "Työskentelemme vain sellaisten vaikuttajien kanssa, jotka olemme itse vettaneet. Laatu ja autenttisuus ovat prioriteettimme.",
  },
];

export default function Home() {
  const { openModal } = useModal();
  

  
  

  return (
    <>
      

      <div className={styles.container}>

        {/* ── HERO ── */}
        <section className={styles.hero} id="etusivu">
          <div className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={styles.scanLine} />

          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.heroBadge}>🚀 Vaikuttajamarkkinointi</span>
                <h1 className={styles.heroTitle}>
                  Vie brändisi<br />
                  uudelle tasolle<br />
                  <span className={styles.heroAccent}>vaikuttajien kanssa</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  FinnFluence on moderni alusta yrityksille, jotka haluavat hyödyntää vaikuttajamarkkinointia tehokkaasti.
                </p>
                <div className={styles.heroActions}>
                  <motion.button
                    className={styles.ctaPrimary}
                    onClick={openModal}
                    whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(0,217,255,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Ota yhteyttä
                  </motion.button>
                  <motion.button
                    className={styles.ctaSecondary}
                    onClick={openModal}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Tilaa kampanja →
                  </motion.button>
                </div>

                <div className={styles.heroStats}>
                  {[
                    { value: "50+", label: "Kampanjaa" },
                    { value: "2M+", label: "Näyttöä" },
                    { value: "98%", label: "Tyytyväisiä" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      className={styles.heroStat}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    >
                      <span className={styles.heroStatValue}>{s.value}</span>
                      <span className={styles.heroStatLabel}>{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <div className={styles.phoneTopBar}>
                    <div className={styles.phoneNotch} />
                  </div>
                  <img src="/nikita.jpg" alt="Influencer preview" className={styles.phoneImg} />
                  <div className={styles.phoneOverlay}>
                    <div className={styles.phoneStats}>
                      <span className={styles.phoneStat}>❤️ 24.8K</span>
                      <span className={styles.phoneStat}>💬 1.2K</span>
                      <span className={styles.phoneStat}>🔁 8.4K</span>
                    </div>
                    <div className={styles.phoneViewCount}>👁 45 000 näyttöä</div>
                  </div>
                </div>
                <div className={styles.phoneGlow} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VAIKUTTAJAT ── */}
        <section className={styles.influencers} id="vaikuttajat">
          <div className={styles.sectionBg} />
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>Yhteistyökumppanit</span>
              <h2 className={styles.sectionTitle}>Vaikuttajat</h2>
              <p className={styles.sectionDesc}>
                Tutustuu yhteistyövaikuttajiimme ja löydä sopiva kumppani brändillesi
              </p>
            </motion.div>

            <div className={styles.influencersGrid}>
              {influencers.map((inf, i) => (
                <InfluencerCard key={inf.name} {...inf} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── KUINKA SE TOIMII ── */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>Prosessi</span>
              <h2 className={styles.sectionTitle}>Kuinka se toimii</h2>
              <p className={styles.sectionDesc}>
                Asiantuntijatiimimme valitsee oikean vaikuttajan ja käynnistää viraalin kampanjan
              </p>
            </motion.div>

            <div className={styles.stepsRow}>
              {[
                { icon: "🏢", step: "01", title: "Ota yhteyttä", desc: "Kerro meille tavoitteistasi ja kohdeyleisöstäsi" },
                { icon: "🎯", step: "02", title: "Valitsemme vaikuttajan", desc: "Löydämme brändillesi sopivimman vaikuttajan" },
                { icon: "📢", step: "03", title: "Kampanja julkaistaan", desc: "Sisältö tuotetaan ja julkaistaan strategisesti" },
                { icon: "📊", step: "04", title: "Näkyvyys julkistetaan", desc: "Seuraat tuloksia reaaliajassa dashboardissa" },
                { icon: "📈", step: "05", title: "50+ kampanjaa", desc: "Yli 50 onnistunutta kampanjaa takana" },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  className={styles.stepCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,217,255,0.15)" }}
                >
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  {i < 4 && <div className={styles.stepArrow}>›</div>}
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.startCta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                className={styles.ctaPrimary}
                onClick={openModal}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,217,255,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                Tilaa kampanja
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ── KAMPANJAT ── */}
        <section className={styles.campaigns}>
          <div className={styles.sectionBg} />
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>Esimerkit</span>
              <h2 className={styles.sectionTitle}>Kampanjat, jotka tuottavat tuloksia</h2>
              <p className={styles.sectionDesc}>
                Yhdistämme yritykset Suomen suosituimpiin TikTok-vaikuttajiin
              </p>
            </motion.div>

            <div className={styles.campaignsGrid}>
              {campaigns.map((c, i) => (
                <CampaignCard key={c.brand} {...c} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── MEISTÄ ── */}
        <section className={styles.about} id="meista">
          <div className={styles.sectionBg} />
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>Meistä</span>
              <h2 className={styles.sectionTitle}>Keitä me olemme</h2>
              <p className={styles.sectionDesc}>
                FinnFluence on syntynyt yhdestä ajatuksesta: tehokas vaikuttajamarkkinointi kuuluu kaikille yrityksille
              </p>
            </motion.div>

            <div className={styles.aboutGrid}>
              {/* Left — text block */}
              <motion.div
                className={styles.aboutText}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className={styles.aboutLead}>
                  Olemme dynaaminen tiimi digimarkkinoinnin, sisällöntuotannon ja
                  vaikuttajayhteistyön ammattilaisia. Yhdistämme Suomen kasvavimmat
                  some-vaikuttajat yrityksiin, jotka haluavat tavoittaa uusia asiakkaita
                  aidosti ja tehokkaasti.
                </p>
                <p className={styles.aboutBody}>
                  Meillä on laaja verkosto TikTok-, Instagram- ja YouTube-vaikuttajia eri
                  toimialoilta — ruoasta ja lifestylestä teknologiaan ja urheiluun.
                  Jokainen kampanja räätälöidään asiakkaan tavoitteiden mukaan: valitsemme
                  oikean vaikuttajan, luomme strategian ja seuraamme tuloksia läpinäkyvästi.
                </p>
                <p className={styles.aboutBody}>
                  Yli 50 onnistuneen kampanjan kokemuksella tiedämme, mikä toimii ja
                  mikä ei. Tuloksemme puhuvat puolestaan: keskimäärin <strong>+220&nbsp;%
                  kasvu näkyvyydessä</strong> ensimmäisen kampanjan jälkeen.
                </p>

                <motion.button
                  className={styles.ctaPrimary}
                  onClick={openModal}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(0,217,255,0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ marginTop: "32px" }}
                >
                  Ota yhteyttä
                </motion.button>
              </motion.div>

              {/* Right — advantage cards */}
              <div className={styles.advantagesGrid}>
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv.title}
                    className={styles.advantageCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ borderColor: "rgba(0,217,255,0.45)", y: -4 }}
                  >
                    <span className={styles.advantageIcon}>{adv.icon}</span>
                    <h3 className={styles.advantageTitle}>{adv.title}</h3>
                    <p className={styles.advantageDesc}>{adv.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── YHTEYSTIEDOT CTA ── */}
        <section className={styles.contactCta} id="yhteystiedot">
          <div className={styles.contactCtaGlow} />
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.contactCtaInner}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionBadge}>Yhteystiedot</span>
              <h2 className={styles.contactCtaTitle}>
                Valmis kasvattamaan brändiäsi?
              </h2>
              <p className={styles.contactCtaDesc}>
                Ota yhteyttä tänään ja saat ilmaisen konsultaation — kerromme,
                miten vaikuttajamarkkinointi sopii juuri sinun yrityksellesi.
              </p>

              <div className={styles.contactInfo}>
                <a href="mailto:info@finnfluence.fi" className={styles.contactInfoItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.contactInfoIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  info@finnfluence.fi
                </a>
                <a href="tel:+358401234567" className={styles.contactInfoItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.contactInfoIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +358 40 123 4567
                </a>
              </div>

              <motion.button
                className={styles.ctaPrimary}
                onClick={openModal}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,217,255,0.7)" }}
                whileTap={{ scale: 0.97 }}
              >
                Lähetä hakemus
              </motion.button>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}