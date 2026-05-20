import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "My Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AppLayout>
          <Navbar />

          <main>{children}</main>

          <Footer>
            <h2>2026, My First React</h2>
          </Footer>
        </AppLayout>
      </body>
    </html>
  );
}