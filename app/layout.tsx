import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers/Providers";
import Loader from "@/components/loader/Loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prana Bar & Kitchen",
  description:
    "Experience luxury rooftop dining, handcrafted cocktails and unforgettable evenings at Prana Bar & Kitchen, Ranchi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#0b0b0b] text-white">

        {/* Luxury Background Glow */}
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_55%)]" />

        {/* Loader */}
        <Loader />

        {/* Website */}
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}