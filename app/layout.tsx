import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css"; 

const instrumentSerif = Instrument_Serif({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-display", 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", 
});

export const metadata: Metadata = {
  title: "Aethera",
  description: "Beyond silence, we build the eternal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="font-body bg-white antialiased">
        {children}
      </body>
    </html>
  );
}