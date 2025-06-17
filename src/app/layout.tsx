import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nem Sothea - Senior iOS Engineer & Team Leader",
  description: "Senior iOS Engineer and Mobile Department Team Leader at KOSIGN. Expert in Swift, SwiftUI, and enterprise mobile app development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>


        {children}

      </body>
    </html>
  );
}
