import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const fonte = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Seu evento começa aqui",
  description: "Aplicação fullstack de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonte.className}>{children}</body>
    </html>
  );
}
