import React from "react";

import ResponsiveImage from "@/components/ResponsiveImage";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div className="mb-12 lg:mb-16">
      <h2 className="text-primary-purple mb-6 text-lg lg:text-2xl">
        {useCasesData.useCaseTitle}
      </h2>
      <p className="text-secondary-text mb-12 lg:mb-16 lg:text-xl">
        {useCasesData.useCaseDescription}
      </p>
      <ResponsiveImage
        mobileProps={{
          className: "mx-auto",
          src: useCasesData.useCaseBanner.mobile.url,
          alt: "UseCaseBanner mobile",
          width: 294,
          height: 798,
        }}
        desktopProps={{
          className: "mx-auto",
          src: useCasesData.useCaseBanner.desktop.url,
          alt: "UseCaseBanner mobile",
          width: 1182,
          height: 388,
        }}
      />
    </div>
  );
};
export default Header;
