import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celeb-edge.vercel.app"),
  title: {
    default: "CelebEdge | Verified Celebrity Intel & Complete Archives",
    template: "%s | CelebEdge",
  },
  description: "The authoritative entertainment intelligence portal. Verified celebrity net worth, relationship records, complete filmographies, and zero-rumor biographical archives.",
  keywords: [
    "celebrity net worth",
    "verified celebrity biography",
    "celebrity spouses",
    "filmography archive",
    "hollywood intel",
    "entertainment research"
  ],
  authors: [{ name: "CelebEdge Editorial Board", url: "https://celeb-edge.vercel.app/about" }],
  creator: "CelebEdge Media Network",
  publisher: "CelebEdge Publishing Inc.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://celeb-edge.vercel.app",
    siteName: "CelebEdge",
    title: "CelebEdge | Verified Celebrity Intel & Complete Archives",
    description: "The authoritative entertainment intelligence portal. Verified celebrity net worth, relationship records, and complete filmographies.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "CelebEdge - Verified Celebrity Intel Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CelebEdge | Verified Celebrity Intel & Complete Archives",
    description: "The authoritative entertainment intelligence portal. Verified celebrity net worth, relationship records, and complete filmographies.",
    creator: "@CelebEdgeLive",
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
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
