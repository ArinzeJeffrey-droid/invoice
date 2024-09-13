import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../components/layout";

const NeueSans = localFont({
  src: "./fonts/NeueHaasDisplayRoman.ttf",
  variable: "--font-neue",
  weight: "400",
});

const NeueSansMono = localFont({
  src: "./fonts/NeueHaasDisplayBold.ttf",
  variable: "--font-neue-mono",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Numeris Book",
  description: "Accounting software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NeueSans.variable} ${NeueSansMono.variable} antialiased bg-[#F5F6FA] text-black`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
