import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ModalProvider } from "../context/ModalContext";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinnFluence - Digitaalisen markkinoinnin asiantuntija",
  description: "Strateginen kumppanisi sosiaalisessa mediassa ja digitaalisessa markkinoinnissa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ModalProvider>
          <HeaderWrapper />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
