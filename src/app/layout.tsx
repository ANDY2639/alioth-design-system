import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootMainLayout from "@/presentation/components/Layouts/RootMainLayout";
import Providers from "@/presentation/components/Providers/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alioth Design System",
  description: "Sistema de diseño Alioth con Next.js 16, TypeScript y Tailwind CSS v4",
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} antialiased font-sans h-full`}>
        <Providers>
          <RootMainLayout>{children}</RootMainLayout>
        </Providers>
      </body>
    </html>
  );
}
