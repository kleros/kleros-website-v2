import React from "react";

import clsx from "clsx";
import { Anek_Odia } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { HeroImagesQueryType, herosImagesQuery } from "@/queries/heroImages";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import "@/styles/globals.css";
import { getHeroImgsProps } from "@/utils/getHeroImgsProps";
import { request } from "@/utils/graphQLClient";

const font = Anek_Odia({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarData = await request<NavbarQueryType>(navbarQuery);
  const herosImgs = await request<HeroImagesQueryType>(herosImagesQuery);
  const props = getHeroImgsProps(herosImgs);

  return (
    <html lang="en">
      <head>
        {props.map((prop) => (
          <link
            key={prop.props.alt}
            rel="preload"
            as="image"
            imageSizes="100vw"
            imageSrcSet={prop.props.srcSet}
            href={prop.props.src}
          ></link>
        ))}
      </head>
      <body className="min-w-80 antialiased">
        <AnimatedBackground />
        <main className={clsx(font.className, "z-1 relative")}>
          <Navbar {...{ navbarData }} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
