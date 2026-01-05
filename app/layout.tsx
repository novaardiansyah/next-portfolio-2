import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nova Ardiansyah - Full Stack Developer Portfolio",
  description: "Passionate full-stack developer creating modern web applications with React, TypeScript, and cutting-edge technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "TypeScript", "Next.js", "Portfolio"],
  authors: [{ name: "Nova Ardiansyah" }],
  creator: "Nova Ardiansyah",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaardiansyah.id",
    title: "Nova Ardiansyah - Full Stack Developer Portfolio",
    description: "Passionate full-stack developer creating modern web applications with React, TypeScript, and cutting-edge technologies.",
    siteName: "Nova Ardiansyah Portfolio",
    images: [
      {
        url: "https://novaardiansyah.id/logo-dark-circle.png",
        width: 512,
        height: 512,
        alt: "Nova Ardiansyah Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Ardiansyah - Full Stack Developer Portfolio",
    description: "Passionate full-stack developer creating modern web applications with React, TypeScript, and cutting-edge technologies.",
    creator: "@novaardiansyah",
    images: ["https://novaardiansyah.id/logo-dark-circle.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
