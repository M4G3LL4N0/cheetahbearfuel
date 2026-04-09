import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheetahbearfuel.com"),
  title: {
    default: "CheetahBearFuel",
    template: "%s | CheetahBearFuel"
  },
  description: "Premium performance fuel designed for elite builders - sustained energy, deep focus, and relentless momentum.",
  openGraph: {
    title: "CheetahBearFuel",
    description: "The performance fuel system for builders sustaining peak output.",
    url: "https://cheetahbearfuel.com",
    siteName: "CheetahBearFuel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheetahBearFuel",
    description: "Fuel engineered for execution.",
    images: ["/og-image.jpg"],
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
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
