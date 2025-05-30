import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "motion/react";

const nMachina = localFont({
  src: "./fonts/NeueMachina-Regular.otf",
  variable: "--nMachina",
});

export const metadata: Metadata = {
  title: "CreatorsLove",
  description: "Sell Anything Faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${nMachina.className} antialiased`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
