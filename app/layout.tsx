import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Charm, Domine } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header/header";
import Footer7 from "./components/footer/footer";
import FloatingWhatsappIcon from "./components/floating-whatsapp-icon";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanz Tech landing page",
  description: "Dubai based auto repair and maintenance service center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11036759643"
          strategy="beforeInteractive"
        />

        <Script id="google-ads-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11036759643');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${charm.variable} ${domine.variable} antialiased relative`}
      >
        <Header />
        <FloatingWhatsappIcon />
        {children}
        <Footer7 />
      </body>
    </html>
  );
}
