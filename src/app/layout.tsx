import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Turtle Pond Ventures - Transiciones Generacionales PYMES España",
    template: "%s | Turtle Pond Ventures"
  },
  description: "Especialistas en adquisición y transformación de PYMES maduras en España. Lideramos transiciones generacionales con retornos de 18-24% IRR preservando el legado empresarial.",
  keywords: ["PYMES España", "transiciones generacionales", "adquisiciones empresariales", "private equity", "sucesión empresarial", "inversión España", "transformación digital PYMES"],
  authors: [{ name: "Turtle Pond Ventures" }],
  creator: "Turtle Pond Ventures",
  publisher: "Turtle Pond Ventures",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Turtle Pond Ventures",
    title: "Turtle Pond Ventures - Transiciones Generacionales PYMES España",
    description: "Especialistas en adquisición y transformación de PYMES maduras en España. Retornos atractivos preservando el legado empresarial.",
    url: "https://turtlepondventures.com",
    images: [
      {
        url: "/turtle-pond-ventures-og.jpg",
        width: 1200,
        height: 630,
        alt: "Turtle Pond Ventures - Transiciones Generacionales PYMES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turtle Pond Ventures - Transiciones Generacionales PYMES España",
    description: "Especialistas en adquisición y transformación de PYMES maduras en España.",
    images: ["/turtle-pond-ventures-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
