import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/custom/Footer";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Syaamil Faiq",
  description: "personal portfolio site of the great Syaamil Faiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          manrope.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
