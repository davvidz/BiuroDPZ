import { Header } from "@components/layout/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Footer } from "@components/layout/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string; // opcjonalnie dla Open Graph
  url?: string; // opcjonalnie dla canonical
}

export default function RootLayout({
  children,
  title = "Biuro Rachunkowe Diana Pamela Zapadka",
  description = "Profesjonalne usługi księgowe z Gdańska dla całej Polski",
  image,
  url,
}: RootLayoutProps) {
  return (
    <html lang="pl">
      <Head>
        {/* Podstawowe meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        {/* Tytuł strony */}
        <title>{title}</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
