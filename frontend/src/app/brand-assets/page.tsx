import type { Metadata } from "next";

import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

import Badges from "./components/Badges";
import { badgesQuery, IBadgesQuery } from "./components/Badges/queries";
import Colors from "./components/Colors";
import { colorsQuery, IColorsQuery } from "./components/Colors/queries";
import Fonts from "./components/Fonts";
import { fontsQuery, IFontsQuery } from "./components/Fonts/queries";
import Hero from "./components/Hero";
import { heroQuery, IHeroQuery } from "./components/Hero/queries";
import Logos from "./components/Logos";
import { logosQuery, ILogosQuery } from "./components/Logos/queries";
import LogosPackage from "./components/LogosPackage";
import {
  logosPackageQuery,
  ILogosPackageQuery,
} from "./components/LogosPackage/queries";
import PnkToken from "./components/PnkToken";
import { pnkTokenQuery, IPnkTokenQuery } from "./components/PnkToken/queries";
import StyledImages from "./components/StyledImages";
import {
  styledImagesQuery,
  IStyledImagesQuery,
} from "./components/StyledImages/queries";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("brandAssetsPageSeo");
};

const BrandAssets: React.FC = async () => {
  const heroData = await request<IHeroQuery>(heroQuery);
  const logosPackageData = await request<ILogosPackageQuery>(logosPackageQuery);
  const logosSection = await request<ILogosQuery>(logosQuery);
  const fontsSection = await request<IFontsQuery>(fontsQuery);
  const colorsSection = await request<IColorsQuery>(colorsQuery);
  const badgesSection = await request<IBadgesQuery>(badgesQuery);
  const styledImagesSection =
    await request<IStyledImagesQuery>(styledImagesQuery);
  const pnkTokenSection = await request<IPnkTokenQuery>(pnkTokenQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.brandAssetsPageHero }} />
      <LogosPackage
        logosPackageData={logosPackageData.brandAssetsPageLogosPackageSection}
      />
      <Logos logosData={logosSection.brandAssetsPageKlerosLogoSection} />
      <Fonts fontsData={fontsSection.brandAssetsPageKlerosFontsSection} />
      <Colors colorsData={colorsSection.brandAssetsPageKlerosColorsSection} />
      <Badges badgesData={badgesSection.brandAssetsPageKlerosBadgesSection} />
      <StyledImages
        styledImagesData={
          styledImagesSection.brandAssetsPageStyledImagesSection
        }
      />
      <PnkToken pnkTokenData={pnkTokenSection.brandAssetsPagePnkTokenSection} />
    </>
  );
};

export default BrandAssets;
