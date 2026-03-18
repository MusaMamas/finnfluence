"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "../components/ContactModal/ContactModal";

interface ModalContextType {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}