import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// pages/_app.js



const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pixelFontMedium = localFont({
  src: "./fonts/PixelifySans-Medium.ttf",
  variable: "--font-pixel-medium",
  display: 'swap',
})

const pixelFont = localFont({
  src: "./fonts/PixelifySans-Regular.ttf",
  variable: "--font-pixel",
  display: 'swap',
})

const pixelFontBold = localFont({
  src: "./fonts/PixelifySans-Bold.ttf",
  variable: "--font-pixel-bold",
  display: 'swap',
})

const pixelFontSemibold = localFont({
  src: "./fonts/PixelifySans-SemiBold.ttf",
  variable: "--font-pixel-semibold",
  display: 'swap',
})



export const metadata: Metadata = {
  title: "LOCKD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pixelFont.variable} ${pixelFontBold.variable} ${pixelFontMedium.variable} ${pixelFontSemibold.variable} antialiased bg-oat text-black`}
      >
        {children}
      </body>
    </html>
  );
}
