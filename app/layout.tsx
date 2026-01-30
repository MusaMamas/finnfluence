import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinnFluence - Digitaalisen markkinoinnin asiantuntija",
  description: "Strateginen kumppanisi sosiaalisessa mediassa ja digitaalisessa markkinoinnissa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fi">
      <head>
        {/* Google Fonts - Montserrat для логотипа */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,900;1,900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
