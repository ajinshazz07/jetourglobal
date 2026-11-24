import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JETOUR | Explore Beyond Boundaries",
  description:
    "JETOUR — Travel+ SUVs engineered for adventure, comfort, and modern life. Discover the T2, Dashing, and X70 Plus.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1a1a2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-gold/30 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
