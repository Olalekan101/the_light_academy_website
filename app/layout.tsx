import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Contactnavbar from "@/components/contactnavbar";
import Navbar from "@/components/navbar";
import Provider from "./provider";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Light Academy",
  description: "Sample Created By Olalekan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${inter.className} bg-yellow-50 flex flex-col min-h-screen`}
      >
        <Provider>
          <header>
            <Contactnavbar />
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <footer>
            <FooterSection />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
