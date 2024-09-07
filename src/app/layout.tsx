import { PropsWithChildren } from "react";
import LandingLayout from "@/components/Landing/LandingLayout";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Next.js Polar starter kit",
  description: "An easy to use setup for polar.sh with Next.js",
};

export const dynamic = "force-static";
export const dynamicParams = false;

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          "dark:bg-[#0B0C0E] bg-gray-100 h-full md:h-screen dark:text-white",
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <LandingLayout>{children}</LandingLayout>
      </body>
    </html>
  );
}
