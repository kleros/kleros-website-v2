import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import { ResourceSection, Social } from "@/queries/navbar";

interface ResourcesDropdownContentProps {
  resourceSections: ResourceSection[];
  socials: Social[];
}

const ResourcesDropdownContent: React.FC<ResourcesDropdownContentProps> = ({
  resourceSections,
  socials,
}) => {
  return (
    <div className="flex flex-col items-center bg-background-2">
      <div
        className={clsx(
          "grid w-full max-w-screen-lg grid-cols-1 divide-y-2 lg:grid-cols-3",
          "lg:divide-x-2 lg:divide-y-0 lg:py-8",
        )}
      >
        {resourceSections?.map((section) => (
          <div
            key={section.title}
            className={clsx(
              "flex w-full flex-col gap-4 border-stroke bg-background-2",
              "py-4 lg:px-4 lg:py-0",
            )}
          >
            <h3 className="text-base font-bold text-primary-purple">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.links?.map((link) => (
                <li
                  key={link.url}
                  className={
                    "w-max transform transition duration-75 hover:scale-[1.01]"
                  }
                >
                  <CustomLink href={link.url}>{link.name}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "flex w-full justify-start gap-6 py-3",
          "lg:justify-center lg:gap-8 lg:bg-background-1 lg:py-8",
        )}
      >
        {socials?.map((social) => (
          <CustomLink
            key={social.name}
            href={social.url}
            className={"transform transition duration-75 hover:scale-[1.10]"}
          >
            <Image
              src={social.icon.url}
              alt={social.name}
              width={24}
              height={24}
            />
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropdownContent;
