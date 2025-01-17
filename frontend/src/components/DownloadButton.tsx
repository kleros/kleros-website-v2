"use client";

import React from "react";

import clsx from "clsx";
import Image from "next/image";

import DownloadIcon from "@/assets/svgs/icons/download.svg";

const baseStyle = clsx("px-4 py-1 rounded transition duration-75");

const primaryStyle = clsx(
  baseStyle,
  "bg-primary-blue",
  "hover:bg-primary-blue/90",
  "disabled:bg-stroke",
  "text-background-2",
);

interface IDownloadButton {
  name: string;
  url: string;
}

const DownloadButton: React.FC<IDownloadButton> = ({ name, url }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch the file.");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const filename = url.split("/").pop() || "download";

      const link = Object.assign(document.createElement("a"), {
        href: blobUrl,
        download: filename,
      });

      link.click();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={clsx(primaryStyle, "flex flex-row gap-2")}
    >
      {name}
      <Image src={DownloadIcon} alt={name} width="14" height="14" />
    </button>
  );
};

export default DownloadButton;
