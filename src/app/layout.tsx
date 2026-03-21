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
  title: 'Occult | Elite Marketing, Ads & Engineered Growth',
  description: 'Scale your enterprise with precision. Occult delivers high-impact digital marketing, social media campaigns, and web development, powered by AI automation and hardcore backend infrastructure.',
  keywords: [
    'Marketing Agency', 
    'Digital Advertising', 
    'Social Media Campaigns', 
    'Marketing Automation', 
    'B2B Growth Strategy',
    'Website Development',
    'Next.js Web Design',
    'AI Marketing Integration',
    'Lead Generation Campaigns',
    'Performance Marketing',
    'Engineered Growth Firm',
    'n8n Automation Agency'
  ],
  openGraph: {
    title: 'Occult | Marketing, Ads & Engineered Growth',
    description: 'Bridging massive market visibility with automated backend operations.',
    url: 'https://occult.marketing',
    siteName: 'Occult',
    images: [
      {
        url: 'https://occult.marketing/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Occult - Master The Signal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/logos/occult-logo.svg', 
    shortcut: '/logos/occult-logo.svg',
    apple: '/logos/occult-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Occult',
    url: 'https://occult.marketing',
    logo: 'https://occult.marketing/logos/occult-logo.png',
    description: 'An engineered growth firm bridging massive market visibility with hardcore backend operations. We specialize in digital marketing, advertising, web development, and AI-driven automation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing and Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing & Advertising Campaigns' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Strategy & Campaigns' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development & Next.js Architecture' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Automation & CRM Webhooks' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Deployment & Growth Operations' } }
      ]
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-noise flex flex-col min-h-screen relative`}
      >
        <GoogleAnalytics gaId="G-BESM3FZ1GV" />
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
