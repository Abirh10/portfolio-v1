import type { Metadata } from "next";
import {
  Press_Start_2P,
  VT323,
  DotGothic16,
  Silkscreen,
  Jacquarda_Bastarda_9,
  EB_Garamond,
} from "next/font/google";
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

// Per-theme heading typefaces — each page gets its own retro voice.
const dotGothic = DotGothic16({
  variable: "--font-cyber",
  weight: "400",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-arcade",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jacquarda = Jacquarda_Bastarda_9({
  variable: "--font-gothic",
  weight: "400",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-library",
  weight: ["400", "600"],
  style: ["normal", "italic"],
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
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} ${dotGothic.variable} ${silkscreen.variable} ${jacquarda.variable} ${ebGaramond.variable} h-full`}
    >
      <body className="min-h-full">
        <div className="crt-boot">{children}</div>
        <CRTOverlay />
      </body>
    </html>
  );
}
