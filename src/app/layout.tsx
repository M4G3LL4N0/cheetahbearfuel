import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheetahbearfuel.com"),
  title: {
    default: "Cheetah Bear Fuel",
    template: "%s | Cheetah Bear Fuel",
  },
  description:
    "Cheetah Bear Fuel is a high-octane American performance drink brand for energy, protein, electrolytes, mushroom focus, and sports health drinks.",
  keywords: [
    "energy drink",
    "protein drink",
    "electrolyte drink",
    "performance drink",
    "functional beverage",
    "sports drink",
    "Cheetah Bear Fuel",
  ],
  openGraph: {
    title: "Cheetah Bear Fuel",
    description: "Two beast one can. Why be one beast when you can be two?",
    url: "https://cheetahbearfuel.com",
    siteName: "Cheetah Bear Fuel",
    images: [
      {
        url: "/hero-cheetah-bear.png",
        width: 1536,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetah Bear Fuel",
    description: "Two beast one can. Why be one beast when you can be two?",
    images: ["/hero-cheetah-bear.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
