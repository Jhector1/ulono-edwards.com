import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empowering the world through intergenerational knowledge",
  description:
    "Book Dr. Davis for consulting, lectures, and heritage program development",
  keywords: [
    "Dr. Davis",
    "heritage program",
    "consulting",
    "lectures",
    "intergenerational knowledge",
    "education",
    "cultural heritage",
  ],
  authors: [{ name: "Dr. Davis" }],
  metadataBase: new URL("https://ulonogps.com"), // change this to your actual domain
  openGraph: {
    title: "Empowering the world through intergenerational knowledge",
    description:
      "Book Dr. Davis for consulting, lectures, and heritage program development",
    url: "https://ulonogps.com", // change to actual URL
    siteName: "Dr. Davis Consulting",
    images: [
      {
        url: "https://ulonogps.com/images/hero.jpg", // must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Dr. Davis profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering the world through intergenerational knowledge",
    description:
      "Book Dr. Davis for consulting, lectures, and heritage program development",
    site: "@your_twitter_handle", // Optional
    creator: "@your_twitter_handle", // Optional
    images: [
      "https://ulonogps.com/images/hero.jpg", // same image as OG
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
