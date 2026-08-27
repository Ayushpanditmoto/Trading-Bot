import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://panditrader.vercel.app"),
  title: {
    default: "Trading Bot — AI-Powered Market Analysis",
    template: "%s · Trading Bot",
  },
  description:
    "Real-time AI-powered market analysis designed to help traders identify structured trading opportunities with greater clarity. Register on Quotex, deposit $100+, submit your ID, and get access.",
  keywords: [
    "AI trading signals",
    "market analysis",
    "binary options",
    "trading platform",
    "Quotex signals",
  ],
  openGraph: {
    title: "Trading Bot — AI-Powered Market Analysis",
    description:
      "Real-time AI-powered market analysis designed to help traders identify structured trading opportunities with greater clarity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
