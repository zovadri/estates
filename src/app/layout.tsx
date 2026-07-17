import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZOVADRI Estates — Luxury Real Estate",
  description:
    "Discover exclusive villas, apartments, and premium real estate experiences crafted for modern living by ZOVADRI Estates.",
  keywords: [
    "luxury real estate",
    "premium villas",
    "ZOVADRI",
    "exclusive properties",
    "luxury living",
    "real estate egypt",
  ],
  openGraph: {
    title: "ZOVADRI Estates — Luxury Real Estate",
    description:
      "Discover exclusive villas, apartments, and premium real estate experiences crafted for modern living.",
    type: "website",
    locale: "en_US",
    siteName: "ZOVADRI Estates",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOVADRI Estates — Luxury Real Estate",
    description:
      "Discover exclusive villas, apartments, and premium real estate experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/estates/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "ZOVADRI Estates",
              url: "https://zovadri.github.io/estates",
              logo: "https://zovadri.github.io/estates/logo.png",
              description:
                "Discover exclusive villas, apartments, and premium real estate experiences crafted for modern living.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
              },
              sameAs: [
                "https://instagram.com/zovadri",
                "https://linkedin.com/company/zovadri",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-dark text-light">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
