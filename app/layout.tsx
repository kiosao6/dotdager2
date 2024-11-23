import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components";
import Lennis from "@/components/prodivers/Lennis";
import { MouseFollowerr } from "@/components/prodivers/Cursor";

export const soehne = localFont({
  src: [
    {
      path: "./fonts/test-soehne-buch.woff2",
      weight: "400",
    },
    {
      path: "./fonts/test-soehne-kraftig.woff2",
      weight: "500",
    },
    {
      path: "./fonts/test-soehne-halbfett.woff2",
      weight: "600",
    }
  ],
});


export const metadata: Metadata = {
  title: "I am Dot Dager",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soehne.className} antialiased`}
      >
        <MouseFollowerr />
        <Lennis />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
