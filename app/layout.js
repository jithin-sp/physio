import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import WebVitals from "./components/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Eternal Physios - Expert Physiotherapy Care",
  description: "Professional physiotherapy services with experienced doctors. God Bless. We Heal. Book your appointment today for personalized treatment and care.",
  keywords: "physiotherapy, physical therapy, sports physiotherapy, orthopedic care, rehabilitation, pain management",
  authors: [{ name: "Eternal Physios" }],
  openGraph: {
    title: "Eternal Physios - Expert Physiotherapy Care",
    description: "Professional physiotherapy services with experienced doctors",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#FEFCFB]`}
      >
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
