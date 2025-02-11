import { getImageProps } from "next/image";

import { HeroImagesQueryType } from "@/queries/heroImages";

export const getHeroImgsProps = (data: HeroImagesQueryType) => {
  type Keys = keyof HeroImagesQueryType;
  const keys = Object.keys(data) as Keys[];
  return keys.map((key) =>
    getImageProps({
      // these should match the props we will define for Background Image in Heros.tsx
      src: data[key].background.url,
      alt: data[key].background.name,
      fill: true,
      unoptimized: true,
    }),
  );
};
