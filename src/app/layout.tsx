import { Header } from "@components/layout/Header/Header";
import "./globals.css"; // tutaj wgrasz swoje globalne style
import { Inter } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "@components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biuro Rachunkowe Diana Pamela Zapadka",
  description: "Profesjonalne usługi księgowe z Gdańska dla całej Polski",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
