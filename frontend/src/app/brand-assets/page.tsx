import type { Metadata } from "next";

import Hero from "@/components/BrandAssets/Hero";
import KlerosBadgesSection from "@/components/BrandAssets/KlerosBadgesSection";
import KlerosColorsSection from "@/components/BrandAssets/KlerosColorsSection/index";
import KlerosFontsSection from "@/components/BrandAssets/KlerosFontsSection";
import KlerosLogoSection from "@/components/BrandAssets/KlerosLogoSection";
import LogosPackageSection from "@/components/BrandAssets/LogosPackageSection";
import PnkTokenSection from "@/components/BrandAssets/PnkTokenSection";
import StyledImagesSection from "@/components/BrandAssets/StyledImagesSection";
import { heroQuery, HeroQueryType } from "@/queries/brand-assets/hero";
import {
  klerosBadgesSectionQuery,
  KlerosBadgesSectionQueryType,
} from "@/queries/brand-assets/kleros-badges-section";
import {
  klerosColorsSectionQuery,
  KlerosColorsSectionQueryType,
} from "@/queries/brand-assets/kleros-colors-section";
import {
  klerosFontsSectionQuery,
  KlerosFontsSectionQueryType,
} from "@/queries/brand-assets/kleros-fonts-section";
import {
  klerosLogoSectionQuery,
  KlerosLogoSectionQueryType,
} from "@/queries/brand-assets/kleros-logo-section";
import {
  logosPackageSectionQuery,
  LogosPackageSectionQueryType,
} from "@/queries/brand-assets/logos-package-section";
import {
  pnkTokenSectionQuery,
  PnkTokenSectionQueryType,
} from "@/queries/brand-assets/pnk-token-section";
import {
  styledImagesSectionQuery,
  StyledImagesSectionQueryType,
} from "@/queries/brand-assets/styled-images-section";
import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("brandAssetsPageSeo");
};

const BrandAssets: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const logosPackageData = await request<LogosPackageSectionQueryType>(
    logosPackageSectionQuery,
  );
  const klerosLogoSection = await request<KlerosLogoSectionQueryType>(
    klerosLogoSectionQuery,
  );
  const klerosFontsSection = await request<KlerosFontsSectionQueryType>(
    klerosFontsSectionQuery,
  );
  const klerosColorsSection = await request<KlerosColorsSectionQueryType>(
    klerosColorsSectionQuery,
  );
  const klerosBadgesSection = await request<KlerosBadgesSectionQueryType>(
    klerosBadgesSectionQuery,
  );
  const styledImagesSection = await request<StyledImagesSectionQueryType>(
    styledImagesSectionQuery,
  );
  const pnkTokenSection =
    await request<PnkTokenSectionQueryType>(pnkTokenSectionQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.brandAssetsPageHero }} />
      <LogosPackageSection
        logosPackageData={logosPackageData.brandAssetsPageLogosPackageSection}
      />
      <KlerosLogoSection
        klerosLogoData={klerosLogoSection.brandAssetsPageKlerosLogoSection}
      />
      <KlerosFontsSection
        klerosFontsData={klerosFontsSection.brandAssetsPageKlerosFontsSection}
      />
      <KlerosColorsSection
        klerosColorsData={
          klerosColorsSection.brandAssetsPageKlerosColorsSection
        }
      />
      <KlerosBadgesSection
        klerosBadgesData={
          klerosBadgesSection.brandAssetsPageKlerosBadgesSection
        }
      />
      <StyledImagesSection
        styledImagesData={
          styledImagesSection.brandAssetsPageStyledImagesSection
        }
      />
      <PnkTokenSection
        pnkTokenData={pnkTokenSection.brandAssetsPagePnkTokenSection}
      />
    </>
  );
};

export default BrandAssets;
