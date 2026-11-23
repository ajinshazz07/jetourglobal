import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JETOUR | Explore Beyond Boundaries",
  description:
    "JETOUR — Travel+ SUVs engineered for adventure, comfort, and modern life. Discover the T2, Dashing, and X70 Plus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

