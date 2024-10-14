import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./root-layout/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Z-Ink",
  description: "Crafted zamanShahed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cMainBgBlack text-cTextPrimary min-h-screen w-full p-3`}
      >
        <div className="pb-5">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
