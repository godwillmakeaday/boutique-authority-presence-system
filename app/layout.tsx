import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boutique Authority Presence System | Premium Retail Identity Website",
  description:
    "A premium website and business identity system for boutiques, fashion stores, modest fashion shops, luxury retail sellers, and accessories brands.",
  keywords: [
    "boutique website",
    "fashion store website",
    "luxury retail identity",
    "lookbook website",
    "boutique order system",
    "premium fashion presentation",
  ],
  openGraph: {
    title: "Boutique Authority Presence System",
    description:
      "Turn your boutique into a premium style destination with curated collections, lookbook presentation, trust elements, and inquiry-ready ordering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
