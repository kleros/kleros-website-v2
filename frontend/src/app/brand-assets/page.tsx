import Hero from "@/components/BrandAssets/Hero";
import KlerosLogoSection from "@/components/BrandAssets/KlerosLogoSection";
import LogosPackageSection from "@/components/BrandAssets/LogosPackageSection";
import { heroQuery, HeroQueryType } from "@/queries/brand-assets/hero";
import {
  klerosLogoSectionQuery,
  KlerosLogoSectionQueryType,
} from "@/queries/brand-assets/kleros-logo-section";
import {
  logosPackageSectionQuery,
  LogosPackageSectionQueryType,
} from "@/queries/brand-assets/logos-package-section";
import { request } from "@/utils/graphQLClient";

const BrandAssets: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const logosPackageData = await request<LogosPackageSectionQueryType>(
    logosPackageSectionQuery,
  );
  const klerosLogoSection = await request<KlerosLogoSectionQueryType>(
    klerosLogoSectionQuery,
  );

  return (
    <>
      <Hero {...{ heroData: heroData.brandAssetsPageHero }} />
      <LogosPackageSection
        logosPackageData={logosPackageData.brandAssetsPageLogosPackageSection}
      />
      <KlerosLogoSection
        klerosLogoData={klerosLogoSection.brandAssetsPageKlerosLogoSection}
      />
    </>
  );
};

export default BrandAssets;
