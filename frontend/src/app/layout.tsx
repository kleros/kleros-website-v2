import React from "react";

import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import "@/styles/globals.css";
import { request } from "@/utils/graphQLClient";

const urbanist = Urbanist({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarData = await request<NavbarQueryType>(navbarQuery);

  return (
    <html lang="en">
      <body className="antialiased">
        <main className={urbanist.className}>
          <Navbar {...{ navbarData }} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
