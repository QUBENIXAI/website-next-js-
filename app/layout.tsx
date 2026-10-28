import type { Metadata } from "next";
import { Caveat, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qubenix AI: Automate. Integrate. Elevate.",
  description: "Qubenix helps businesses streamline operations through AI-powered automation, intelligent integrations, and scalable digital solutions built for growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
