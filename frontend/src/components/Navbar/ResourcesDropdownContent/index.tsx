import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { ResourceSection, Social } from "@/queries/navbar";

const hoverScaleUp = clsx("transform transition duration-75");
const hoverScaleUpLink = clsx(hoverScaleUp, "hover:scale-[1.01]");
const hoverScaleUpLogo = clsx(hoverScaleUp, "hover:scale-[1.10]");
const borderStyle = clsx(
  "border-stroke border-t lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 pt-5"
);

interface ResourcesDropdownContentProps {
  resourceSections: ResourceSection[];
  socials: Social[];
}

const ResourcesDropdownContent: React.FC<ResourcesDropdownContentProps> = ({
  resourceSections,
  socials,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col mt-4 bg-background-2",
        "items-center lg:mt-0"
      )}
    >
      <div
        className={clsx(
          "w-full grid gap-4 grid-cols-1",
          "max-w-screen-lg lg:py-12 lg:grid-cols-3"
        )}
      >
        {resourceSections?.map((section, index) => (
          <div
            key={section.title}
            className={clsx(
              "flex items-start gap-4",
              index !== 0 && borderStyle
            )}
          >
            <div className="flex flex-col gap-4 bg-background-2 rounded-lg w-full lg:w-96">
              <h3 className="text-primary-purple font-bold text-base">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links?.map((link) => (
                  <li key={link.url} className={hoverScaleUpLink}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "w-full flex justify-start py-3 gap-6",
          "lg:py-8 lg:gap-8 lg:bg-background-1 lg:justify-center"
        )}
      >
        {socials?.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={hoverScaleUpLogo}
          >
            <Image
              src={social.icon.url}
              alt={social.name}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropdownContent;
