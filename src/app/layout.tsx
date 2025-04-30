import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/sonner";
import { FavoriteProvider } from "@/contexts/favorite-context";
import { AuthProvider } from "@/contexts/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Loja de equipamentos eletrônicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <FavoriteProvider>
              {children}
            </FavoriteProvider>
          </CartProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
