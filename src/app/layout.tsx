// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@components/layout/Header/Header";
import { Footer } from "@components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biuro Rachunkowe Diana Pamela Zapadka",
  description: "Profesjonalne usługi księgowe z Gdańska dla całej Polski",
  metadataBase: new URL("https://www.biurodpz.pl"),
  alternates: {
    canonical: "https://www.biurodpz.pl",
  },
  openGraph: {
    title: "Biuro Rachunkowe Diana Pamela Zapadka",
    description: "Profesjonalne usługi księgowe z Gdańska dla całej Polski",
    url: "https://www.biurodpz.pl",
    siteName: "Biuro Rachunkowe Diana Pamela Zapadka",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biuro Rachunkowe Diana Pamela Zapadka",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biuro Rachunkowe Diana Pamela Zapadka",
    description: "Profesjonalne usługi księgowe z Gdańska dla całej Polski",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/images/logoShort.png", // 👈 favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="page-wrapper">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
