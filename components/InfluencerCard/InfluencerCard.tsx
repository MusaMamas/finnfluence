"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import styles from "./InfluencerCard.module.css";

interface InfluencerCardProps {
  name: string;
  image?: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  views: string;
  index: number;
  placeholder?: boolean;
}

export default function InfluencerCard({
  name,
  image,
  tiktok,
  instagram,
  youtube,
  views,
  index,
  placeholder = false,
}: InfluencerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.12}
        glareColor="#5FF4FF"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={600}
        className={styles.tiltWrapper}
      >
        <motion.div
          className={`${styles.card} ${placeholder ? styles.cardPlaceholder : ""}`}
          whileHover={{ boxShadow: "0 0 40px rgba(0, 217, 255, 0.45), 0 0 80px rgba(0, 217, 255, 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow ring animation */}
          <div className={styles.glowRing} />

          {/* Photo */}
          <div className={styles.imageWrap}>
            {image ? (
              <img src={image} alt={name} className={styles.image} />
            ) : (
              <div className={styles.avatarPlaceholder}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.avatarIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className={styles.comingLabel}>Tulossa pian</span>
              </div>
            )}

            {/* Hover overlay with button */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {!placeholder && (
                <motion.a
                  href="#"
                  className={styles.lisatiedotBtn}
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  Lisätiedot
                </motion.a>
              )}
            </motion.div>

            {/* Views badge */}
            {!placeholder && (
              <div className={styles.viewsBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.eyeIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views}
              </div>
            )}
          </div>

          {/* Info */}
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>

            <div className={styles.socials}>
              {tiktok && (
                <a href={tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                  </svg>
                  TikTok
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              )}
              {youtube && (
                <a href={youtube} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              )}
            </div>

            {!placeholder && (
              <div className={styles.statsRow}>
                <span className={styles.statChip}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.statIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {views} / video
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}