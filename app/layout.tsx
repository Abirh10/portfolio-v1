import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import CRTOverlay from "@/components/CRTOverlay";

const pressStart = Press_Start_2P({
  variable: "--font-pixel-title",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-pixel-body",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abir | Portfolio",
  description: "Software engineer portfolio, retro run-and-gun style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable} h-full`}>
      <body className="min-h-full">
        {children}
        <CRTOverlay />
      </body>
    </html>
  );
}
