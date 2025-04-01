import clsx from "clsx";

import CtaCard from "@/components/CtaCard";

import { IFontsQuery } from "./queries";

interface IFonts {
  fontsData: IFontsQuery["brandAssetsPageKlerosFontsSection"];
}

const Fonts: React.FC<IFonts> = ({ fontsData }) => {
  return (
    <div
      className={clsx(
        "relative space-y-8 bg-background-1 px-6 pb-12",
        "lg:space-y-16 lg:px-32 lg:pb-24 lg:pt-8",
      )}
    >
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {fontsData.header}
      </h1>
      <CtaCard
        className="max-w-[583px] [&>p]:mb-14 [&>p]:text-base"
        key={fontsData.linkCard.title}
        title={fontsData.linkCard.title}
        description={fontsData.linkCard.subtitle}
        arrowLink={fontsData.linkCard.link}
      />
    </div>
  );
};

export default Fonts;
