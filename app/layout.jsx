import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenShop",
  description: "GreenShop - Your Online Plant Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
