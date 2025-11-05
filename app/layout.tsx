import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme-context';
import { I18nProvider } from './i18n-provider';

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almonzer Fadl - Portfolio",
  description: "Electrical & Electronics Engineering Student | Software Developer | Available for work",
  keywords: ["portfolio", "software developer", "electrical engineering", "react", "nextjs", "typescript"],
  authors: [{ name: "Almonzer Fadl" }],
  creator: "Almonzer Fadl",
  icons: {
    icon: [
      { url: "/logos/logoBlack.png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logoWhite.png", media: "(prefers-color-scheme: dark)" }
    ],
    shortcut: "/logos/logoBlack.png",
    apple: "/logos/logoBlack.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almonzerfadl.dev",
    title: "Almonzer Fadl - Portfolio",
    description: "Software Developer",
    siteName: "Almonzer Fadl Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almonzer Fadl - Portfolio",
    description: "Electrical & Electronics Engineering Student | Software Developer",
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

import { DynamicDirection } from './dynamic-direction';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sourceSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <I18nProvider>
          <ThemeProvider>
            <DynamicDirection>{children}</DynamicDirection>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}