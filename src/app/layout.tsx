import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Business Moving Group | Commercial Moving in Orange County & LA",
    template: "%s | Business Moving Group",
  },
  description:
    "Professional commercial office, warehouse, and industrial moving services in Orange County and Los Angeles. Specializing in corporate relocations since 1995.",
  keywords: [
    "commercial moving",
    "office moving",
    "warehouse moving",
    "industrial movers",
    "Orange County",
    "Los Angeles",
    "business relocation",
    "commercial moving company",
  ],
  authors: [{ name: "Business Moving Group" }],
  creator: "Business Moving Group",
  publisher: "Business Moving Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://businessmoving.com",
    siteName: "Business Moving Group",
    title: "Business Moving Group | Commercial Moving in Orange County & LA",
    description:
      "Professional commercial office, warehouse, and industrial moving services in Orange County and Los Angeles.",
    images: [
      {
        url: "https://businessmoving.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Moving Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Moving Group | Commercial Moving in Orange County & LA",
    description:
      "Professional commercial office, warehouse, and industrial moving services.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://businessmoving.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
