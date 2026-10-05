import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.celebledger.com"),
  title: {
    default: "CelebLedger | Official Celebrity Profiles & Financial Archives",
    template: "%s",
  },
  description: "The official entertainment intelligence portal. Confirmed celebrity net worth, relationship records, filmographies, and biographical dossiers.",
  keywords: [
    "celebrity net worth",
    "confirmed celebrity biography",
    "celebrity spouses",
    "filmography archive",
    "hollywood intel",
    "entertainment research"
  ],
  authors: [{ name: "CelebLedger Editorial Board", url: "https://www.celebledger.com/about" }],
  creator: "CelebLedger Editorial Network",
  publisher: "CelebLedger Publishing Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "q2emKewZlbhbSRbaQl44k4BqviYm0__f4ki9sdtRan0",
    other: {
      "msvalidate.01": "98533D5A610C8BB068BDE589D75E9C6F",
      "google-adsense-account": "ca-pub-2350272227833258",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.celebledger.com",
    siteName: "CelebLedger",
    title: "CelebLedger | Official Celebrity Profiles & Financial Archives",
    description: "The authoritative entertainment intelligence portal. Confirmed celebrity net worth, relationship records, and filmographies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CelebLedger - Official Celebrity Profiles Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CelebLedger | Verified Celebrity Intel & Complete Archives",
    description: "The authoritative entertainment intelligence portal. Verified celebrity net worth, relationship records, and complete filmographies.",
    creator: "@CelebLedgerLive",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2350272227833258"
          crossOrigin="anonymous"
        />
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GJRMVZ94D2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GJRMVZ94D2');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
