import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Futureline Education — Unlock Your Future",
  description:
    "Futureline Education is a premium educational consultancy that transforms dreams into global opportunities. Expert guidance for study abroad, visa processing, test preparation, and career counselling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-white antialiased">
        {children}
      </body>
    </html>
  );
}