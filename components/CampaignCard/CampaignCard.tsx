"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CampaignCard.module.css";

interface CampaignCardProps {
  influencerName: string;
  brand: string;
  views: string;
  tiktokUrl?: string;
  thumbnail?: string;
  index: number;
  placeholder?: boolean;
}

export default function CampaignCard({
  influencerName,
  brand,
  views,
  tiktokUrl,
  thumbnail,
  index,
  placeholder = false,
}: CampaignCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract TikTok video ID for embed
  // vm.tiktok.com links need to be opened directly
  const handleWatch = () => {
    if (tiktokUrl) {
      window.open(tiktokUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className={styles.wrapper}
      >
        <motion.div
          className={`${styles.card} ${placeholder ? styles.cardPlaceholder : ""}`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 40px rgba(0,217,255,0.3), 0 20px 60px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow border animation */}
          <div className={styles.glowBorder} />

          {/* Video / Thumbnail area */}
          <div className={styles.videoWrap}>
            {placeholder ? (
              <div className={styles.placeholderBg}>
                <div className={styles.placeholderIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className={styles.comingLabel}>Tulossa pian</span>
              </div>
            ) : (
              <>
                {/* TikTok thumbnail */}
                <div className={styles.tiktokThumb}>
                  {thumbnail ? (
                    <img src={thumbnail} alt={brand} className={styles.thumbImg} />
                  ) : (
                    <div className={styles.thumbOverlay} />
                  )}
                  <div className={styles.tiktokLogo}>
                    <svg viewBox="0 0 24 24" fill="white" className={styles.tiktokIcon}>
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                  </div>
                  <div className={styles.viewsOnThumb}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.eyeMini}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {views}
                  </div>
                </div>
              </>
            )}

            {/* Play button + Katso overlay */}
            <AnimatePresence>
              {isHovered && !placeholder && (
                <motion.div
                  className={styles.hoverOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    className={styles.playBtn}
                    onClick={handleWatch}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Katso
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Play circle always visible for real cards */}
            {!placeholder && !isHovered && (
              <div className={styles.playCircle}>
                <svg viewBox="0 0 24 24" fill="white" className={styles.playCircleIcon}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>

          {/* Info */}
          <div className={styles.info}>
            <div className={styles.infoTop}>
              <div>
                <h3 className={styles.brand}>{brand}</h3>
                <p className={styles.influencer}>@ {influencerName}</p>
              </div>
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

            {!placeholder && (
              <motion.button
                className={styles.viraaBtn}
                onClick={handleWatch}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(0,217,255,0.15)" }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.viràIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Katso TikTokissa
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}