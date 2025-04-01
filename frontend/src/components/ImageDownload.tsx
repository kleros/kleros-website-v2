import React from "react";

import Image from "next/image";

import DownloadButton from "./DownloadButton";

export interface IImageDownload {
  name: string;
  image: {
    url: string;
  };
  svgDownloadLink?: string;
  pngDownloadLink?: string;
}

const ImageDownload: React.FC<IImageDownload> = ({
  name,
  image,
  svgDownloadLink,
  pngDownloadLink,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={image.url} alt="" width="378" height="200" />
      <div className="flex flex-row items-center gap-4">
        <span className="text-primary-text">{name}</span>
        {svgDownloadLink ? (
          <DownloadButton name="SVG" url={svgDownloadLink} />
        ) : null}
        {pngDownloadLink ? (
          <DownloadButton name="PNG" url={pngDownloadLink} />
        ) : null}
      </div>
    </div>
  );
};

export default ImageDownload;
