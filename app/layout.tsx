import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import { hero, site, theme } from "@/config/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-sans", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, title: site.title, description: site.description, siteName: site.name, images: [{ url: hero.image.src, alt: hero.image.alt }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [hero.image.src] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: theme.colors.background, width: "device-width", initialScale: 1 };

const tokens = {
  "--bg": theme.colors.background,
  "--text": theme.colors.text,
  "--muted": theme.colors.muted,
  "--line": theme.colors.line,
  "--surface": theme.colors.surface,
  "--metal": theme.metallic.gradient,
  "--stroke": theme.metallic.strokeWidth,
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "AutoDealer", name: site.name, url: site.url, brand: { "@type": "Brand", name: "JETOUR" } };
  return (
    <html lang={site.locale} className={manrope.variable} style={tokens}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
