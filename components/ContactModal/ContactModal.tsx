"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormFields {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Nimi on pakollinen";
  if (!form.phone.trim()) {
    errors.phone = "Puhelinnumero on pakollinen";
  } else if (!/^\+?[\d\s\-()]{6,}$/.test(form.phone.trim())) {
    errors.phone = "Tarkista puhelinnumeron muoto";
  }
  if (!form.email.trim()) {
    errors.email = "Sähköposti on pakollinen";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Tarkista sähköpostiosoite";
  }
  return errors;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormFields]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

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
      setErrors({});
      setTouched({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.glowTop} />

            <button className={styles.closeBtn} onClick={handleClose} aria-label="Sulje">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
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
                          className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ""}`}
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Matti Virtanen"
                        />
                        {touched.name && errors.name && (
                          <span className={styles.errorMsg}>{errors.name}</span>
                        )}
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Puhelinnumero *</label>
                        <input
                          className={`${styles.input} ${touched.phone && errors.phone ? styles.inputError : ""}`}
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+358 40 123 4567"
                        />
                        {touched.phone && errors.phone && (
                          <span className={styles.errorMsg}>{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label className={styles.label}>Sähköposti *</label>
                        <input
                          className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ""}`}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="matti@yritys.fi"
                        />
                        {touched.email && errors.email && (
                          <span className={styles.errorMsg}>{errors.email}</span>
                        )}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}