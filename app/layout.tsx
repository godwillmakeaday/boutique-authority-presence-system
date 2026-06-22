import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://boutique-authority-presence-system.vercel.app"),
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
    "modest fashion website",
    "fashion WhatsApp order website",
  ],
  openGraph: {
    title: "Boutique Authority Presence System",
    description:
      "Turn your boutique into a premium style destination with curated collections, lookbook presentation, trust elements, and inquiry-ready ordering.",
    type: "website",
    url: "/",
    siteName: "Boutique Authority Presence System",
    images: [
      {
        url: "/og-boutique.svg",
        width: 1200,
        height: 630,
        alt: "Boutique Authority Presence System preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Authority Presence System",
    description: "Premium retail identity, lookbook, trust, and inquiry website system for boutiques.",
    images: ["/og-boutique.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
