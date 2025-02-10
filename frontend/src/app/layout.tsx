import React from "react";

import clsx from "clsx";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import "@/styles/globals.css";
import { request } from "@/utils/graphQLClient";
import { HeroQueryType, herosQuery } from "@/queries/heros";

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
  const herosImgs = await request<HeroQueryType>(herosQuery);

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href={herosImgs.earnPageHero.background.url}
          imageSizes="100vw"
        />
        <link
          rel="preload"
          as="image"
          href={herosImgs.pnkTokenPageHero.background.url}
          imageSizes="100vw"
        />
      </head>
      <body className="min-w-80 bg-background-1 antialiased">
        <main className={clsx(urbanist.className)}>
          <Navbar {...{ navbarData }} />
          <div className="mx-auto max-w-screen-2xl"> {children} </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
