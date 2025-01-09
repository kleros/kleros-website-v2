import Tag from "@/components/Tag";
import { Court } from "@/queries/earn/tabs-data";
import Image from "next/image";
import Link from "next/link";
import PlusIcon from "@/assets/svgs/icons/plus-icon.svg";
import { ArrowLink } from "@/queries/navbar";

interface ICourtsSection {
  mostActiveCourtsHeader: string;
  mostActiveCourts: Court[];
  courtsButton: ArrowLink;
}
const CourtsSection: React.FC<ICourtsSection> = ({
  mostActiveCourtsHeader,
  mostActiveCourts,
  courtsButton
}) => {
  return (
    <>
      <h2 className="text-lg md:text-xlfont-medium md:font-normal ">
        {mostActiveCourtsHeader}
      </h2>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {mostActiveCourts.map((court, index) => (
          <Tag
            key={index}
            text={court.name}
            className="!text-base leading-none"
          />
        ))}
        <Link
          href={courtsButton.link.url}
          target="_blank"
          rel="noreferrer noopenner"
        >
          <button className="w-12 h-12 border-gradient-purple-blue">
            <Image
              src={PlusIcon}
              width="24"
              height="18"
              alt="Arrow link image"
              className="inline"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default CourtsSection;
