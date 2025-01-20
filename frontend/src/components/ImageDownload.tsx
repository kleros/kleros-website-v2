import React from "react";

import Image from "next/image";

import { ImageDownloadType } from "@/queries/brand-assets/kleros-logo-section";

import DownloadButton from "./DownloadButton";

interface IImageDownload {
  imageDownload: ImageDownloadType;
}

const ImageDownload: React.FC<IImageDownload> = ({ imageDownload }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={imageDownload.image.url} alt="" width="378" height="200" />
      <div className="flex flex-row items-center gap-4">
        <span>{imageDownload.name}</span>
        {imageDownload.svgDownloadLink ? (
          <DownloadButton name="SVG" url={imageDownload.svgDownloadLink} />
        ) : null}
        {imageDownload.pngDownloadLink ? (
          <DownloadButton name="PNG" url={imageDownload.pngDownloadLink} />
        ) : null}
      </div>
    </div>
  );
};
export default ImageDownload;
