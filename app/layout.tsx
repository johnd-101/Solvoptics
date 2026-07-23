import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Solv Support",
  description: "Optometry Support Management System",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}