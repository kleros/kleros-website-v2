import React from "react";

import { Urbanist } from "next/font/google";

import "@/styles/globals.css";

const urbanist = Urbanist({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className={urbanist.className}>{children}</main>
      </body>
    </html>
  );
}
