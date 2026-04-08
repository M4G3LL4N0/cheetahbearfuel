import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Main font with fallback to system sans
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

// Monospace font with fallback to system mono
const mono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheetah Bear Fuel | The Ultimate Performance Drink",
  description: "The perfect fusion of speed and strength in every can. Join the waitlist to be first.",
  openGraph: {
    images: [
      {
        url: '/hero-cheetah-bear.png',
        width: 1200,
        height: 630,
      },
    ],
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
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
