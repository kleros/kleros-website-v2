import React from "react";

import clsx from "clsx";
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
      <body className="bg-background-1 min-w-80 antialiased">
        <main className={clsx(urbanist.className)}>
          <Navbar {...{ navbarData }} />
          <div className="mx-auto max-w-(--breakpoint-2xl)"> {children} </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
