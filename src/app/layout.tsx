import type { Metadata } from "next";
import { site } from "@/lib/site";
import { assets } from "@/lib/assets";
import "./globals.css";

const description =
  "A keyboard-first file browser for macOS. Navigate with h j k l, jump anywhere in two keystrokes, and never leave the home row. Signed, notarized, and a one-time purchase.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "HomeRun — Keyboard-first file browser for macOS",
  description,
  applicationName: site.name,
  // "HomeRun" collides with baseball and real estate, so the long tail matters.
  keywords: [
    "keyboard file browser macOS",
    "vim file manager mac",
    "Finder replacement",
    "macOS file browser hjkl",
    "Finder alternative keyboard",
    "fuzzy finder macOS files",
    "HomeRun app",
    "CrossLayer",
  ],
  authors: [{ name: site.vendor, url: site.vendorUrl }],
  creator: site.vendor,
  publisher: site.vendor,
  alternates: { canonical: site.url },
  openGraph: {
    title: "HomeRun — Keyboard-first file browser for macOS",
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: assets.og, width: 1200, height: 630, alt: "HomeRun" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeRun — Keyboard-first file browser for macOS",
    description,
    images: [assets.og],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: `macOS ${site.minMacOS}+`,
  softwareVersion: site.version,
  description,
  url: site.url,
  publisher: {
    "@type": "Organization",
    name: site.vendor,
    url: site.vendorUrl,
  },
  offers: {
    "@type": "Offer",
    price: String(site.price.amount),
    priceCurrency: site.price.currency,
    url: site.url,
    category: "One-time purchase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
