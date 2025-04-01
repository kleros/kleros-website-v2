import clsx from "clsx";

import ImageDownload from "@/components/ImageDownload";

import { ILogosQuery } from "./queries";

interface ILogos {
  logosData: ILogosQuery["brandAssetsPageKlerosLogoSection"];
}

const Logos: React.FC<ILogos> = ({ logosData }) => {
  return (
    <div
      className={clsx(
        "relative space-y-12 bg-background-1 px-6 py-12",
        "lg:space-y-16 lg:px-32 lg:py-24",
      )}
    >
      <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
        {logosData.header}
      </h1>
      <div
        className={
          "flex flex-row flex-wrap justify-center gap-x-8 gap-y-12 lg:gap-y-16"
        }
      >
        {logosData.imageDownloads.map((imageDownload) => {
          return <ImageDownload key={imageDownload.name} {...imageDownload} />;
        })}
      </div>
    </div>
  );
};

export default Logos;
