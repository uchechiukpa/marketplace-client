import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jost } from 'next/font/google';
import "./globals.css";


const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jost',
})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketPlace",
  description: "MarketPlace for digital assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.variable}>{children}</body>
    </html>
  );
}
