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
  title: "ZOVADRI Estates — عقارات فاخرة",
  description:
    "اكتشف فيلات وشقق حصرية وتجارب عقارية فاخرة صممت للحياة العصرية الأنيقة.",
  keywords: [
    "عقارات فاخرة",
    "فيلات للبيع",
    "ZOVADRI",
    "عقارات مصر",
    "استثمار عقاري",
    "لوكسري",
  ],
  openGraph: {
    title: "ZOVADRI Estates — عقارات فاخرة",
    description:
      "اكتشف فيلات وشقق حصرية وتجارب عقارية فاخرة صممت للحياة العصرية الأنيقة.",
    type: "website",
    locale: "ar_EG",
    siteName: "ZOVADRI Estates",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOVADRI Estates — عقارات فاخرة",
    description:
      "اكتشف فيلات وشقق حصرية وتجارب عقارية فاخرة.",
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
      lang="ar"
      dir="rtl"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/estates/sitemap.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
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
                "اكتشف فيلات وشقق حصرية وتجارب عقارية فاخرة.",
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
