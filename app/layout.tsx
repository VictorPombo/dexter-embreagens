import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dexterembreagens.com.br"),
  title: "Dexter Embreagens | A Força Que o Seu Caminhão Precisa",
  description: "Embreagens remanufaturadas para caminhões, ônibus e guindastes. Qualidade e durabilidade com +20 anos de mercado.",
  keywords: ["embreagem", "caminhão", "remanufaturada", "autopeças", "ônibus", "guindaste", "dexter", "embreagens"],
  openGraph: {
    title: "Dexter Embreagens | A Força Que o Seu Caminhão Precisa",
    description: "Embreagens remanufaturadas para caminhões, ônibus e guindastes. Qualidade e durabilidade com +20 anos de mercado.",
    url: "https://www.dexterembreagens.com.br",
    siteName: "Dexter Embreagens",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter Embreagens",
    description: "Embreagens remanufaturadas para caminhões, ônibus e guindastes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              name: "Dexter Embreagens",
              url: "https://www.dexterembreagens.com.br",
              telephone: "+55-11-91916-9977",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Flor da Lua, 30",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              image: "https://www.dexterembreagens.com.br/icon.png",
              openingHours: ["Mo-Fr 07:00-16:15", "Sa 08:00-15:30"],
            }),
          }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
