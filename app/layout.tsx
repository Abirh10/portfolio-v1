import type { Metadata } from "next";
import { Silkscreen, VT323 } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { WindowManagerProvider } from "@/components/WindowManager";

const silkscreen = Silkscreen({
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
  description: "Software engineer portfolio, Y2K desktop OS style.",
};

// Sets data-theme before first paint so there's no flash of the wrong palette.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("portfolio-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="en"
      className={`${silkscreen.variable} ${vt323.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <WindowManagerProvider>{children}</WindowManagerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
