"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send — replace with real API call later
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", company: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Glow top border */}
            <div className={styles.glowTop} />

            {/* Close button */}
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Sulje">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                /* Success state */
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Kiitos yhteydenotosta!</h3>
                  <p className={styles.successDesc}>
                    Olemme vastaanottaneet viestisi ja otamme sinuun yhteyttä pian.
                  </p>
                  <button className={styles.submitBtn} onClick={handleClose}>
                    Sulje
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className={styles.header}>
                    <span className={styles.badge}>Ota yhteyttä</span>
                    <h2 id="modal-title" className={styles.title}>Tilaa kampanja</h2>
                    <p className={styles.subtitle}>
                      Täytä lomake ja otamme sinuun yhteyttä 24 tunnin sisällä
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label className={styles.label}>Nimi *</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Matti Virtanen"
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Puhelinnumero *</label>
                        <input
                          className={styles.input}
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+358 40 123 4567"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label className={styles.label}>Sähköposti *</label>
                        <input
                          className={styles.input}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="matti@yritys.fi"
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Yritys</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Yritys Oy"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Viesti</label>
                      <textarea
                        className={styles.textarea}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Kerro lyhyesti kampanjasi tavoitteista ja kohdeyleisöstä..."
                        rows={4}
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className={styles.spinner} />
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.sendIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Lähetä hakemus
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}