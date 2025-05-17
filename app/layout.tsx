import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const nMachina = localFont({
  src: './fonts/NeueMachina-Regular.otf',
  variable: "--nMachina"
})

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
      <body
        className={`${nMachina.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
