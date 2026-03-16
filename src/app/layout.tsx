import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: 'Occult | Engineered Growth Firm',
  description: 'Visibility without infrastructure is a liability. Occult bridges the gap between massive market attention and hardcore backend operations in Bengaluru, India.',
  openGraph: {
    title: 'Occult | Engineered Growth Firm',
    description: 'No standard agency fluff—just deployable growth architectures. We engineer massive visibility and backend automation.',
    url: 'https://anirudhkatti18.github.io/occult-web-platform/',
    siteName: 'Occult',
    images: [
      {
        url: 'https://anirudhkatti18.github.io/occult-web-platform/logos/occult-logo.svg', // Will update to a full OG image later
        width: 1200,
        height: 630,
        alt: 'Occult Engineered Growth Firm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/occult-web-platform/logos/occult-logo.svg',
    shortcut: '/occult-web-platform/logos/occult-logo.svg',
    apple: '/occult-web-platform/logos/occult-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-noise flex flex-col min-h-screen relative`}
      >
        <GoogleAnalytics gaId="G-BESM3FZ1GV" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Occult",
              "alternateName": "Engineered Growth Firm",
              "url": "https://anirudhkatti18.github.io/occult-web-platform/",
              "logo": "https://anirudhkatti18.github.io/occult-web-platform/logos/occult-logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressCountry": "IN"
              },
              "description": "Engineered Growth Firm bridging massive market attention with hardcore backend automation.",
              "knowsAbout": [
                "AI-Driven Automation",
                "n8n Workflow Engineering",
                "Meta WhatsApp Business API Integrations",
                "Open-Source Intelligence (OSINT)",
                "Pan-India Theatrical Rollouts",
                "Proprietary Data Pipelines",
                "Performance Marketing"
              ]
            })
          }}
        />
        <ParticleBackground />
        <Navbar />
        <main className="flex-grow flex flex-col pt-24 md:pt-32 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
