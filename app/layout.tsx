import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/core/navbar";

import "./globals.css";
import CartProvider from "@/lib/stores/CartProvider";
import { ShoppingCartModal } from "@/components/cart/shoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
