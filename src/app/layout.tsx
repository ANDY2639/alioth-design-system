import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ColorProvider } from "@/context/ColorContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
        className={`${poppins.variable} antialiased font-sans h-full`}
      >
        <ColorProvider>
          {children}
        </ColorProvider>
      </body>
    </html>
  );
}
