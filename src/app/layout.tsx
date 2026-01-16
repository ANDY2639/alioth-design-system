import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "@/context/ColorContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alioth Design System",
  description: "Sistema de diseño Alioth con Next.js 16, TypeScript y Tailwind CSS v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased font-sans h-full`}
      >
        <ColorProvider>
          {children}
        </ColorProvider>
      </body>
    </html>
  );
}
