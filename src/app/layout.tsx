import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalBackground from "@/components/GlobalBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeNax — AI-Powered Software Studio",
    template: "%s | CodeNax",
  },
  description:
    "CodeNax builds websites, mobile apps, and custom AI agents. 9.5+ years experience, 120+ live applications, 99.5% client retention.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    siteName: "CodeNax",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <GlobalBackground />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
