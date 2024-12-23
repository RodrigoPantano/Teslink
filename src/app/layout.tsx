// este layout es el global que si cambiamos algo se lo va a aplicar a todas las pantallas
import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "../config/font";



export const metadata: Metadata = {
  title: "Teslink",
  description: "una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
