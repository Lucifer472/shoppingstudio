import Script from "next/script";
import { Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import Footer from "@/components/footer/Footer";
import { CardImage, description, keywords, title, url } from "@/constant";
// import { CustomAnchorAd } from "@/components/ads/ads";

import "@/app/globals.css";

// Fonts
const poppins = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Meta Data

export const metadata: Metadata = {
  title: `${title}`,
  description: description,
  keywords: keywords,
  robots: "index follow",
  twitter: {
    card: "summary_large_image",
    site: title,
    title: `${title}`,
    description: description,
    images: CardImage,
  },
  openGraph: {
    type: "website",
    siteName: `${title}`,
    description: description,
    url: url,
    countryName: "USA",
    images: CardImage,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  publisher: "Truepub Media",
  icons: "/favicon.ico",
};

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3985697571961561"
          async
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
        <Toaster position="top-center" />
        <LoadingWrapper />
        {children}
        <Footer />
        {/* <CustomAnchorAd /> */}
      </body>
    </html>
  );
}
