import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

import Navbar from "@/ui/navbar/Navbar";
import Footer from "@/ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Now & Forever",
  description: "Love story written in the stars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
