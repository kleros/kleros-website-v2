import { ResourceSection, Social } from "@/queries/navbar";
import clsx from "clsx";
import Image from "next/image";

const hoverScaleUp = clsx("transform transition duration-75");
const hoverScaleUpLink = clsx(hoverScaleUp, "hover:scale-[1.01]");
const hoverScaleUpLogo = clsx(hoverScaleUp, "hover:scale-[1.10]");
const borderStyle = clsx("border-stroke lg:border-l lg:pl-8 lg:pt-0 pt-5");

interface ResourcesDropdownContentProps {
  resourceSections: ResourceSection[];
  socials: Social[];
}

const ResourcesDropdownContent: React.FC<ResourcesDropdownContentProps> = ({
  resourceSections,
  socials,
}) => {
  return (
    <div className="fixed w-screen lg:w-screen lg:max-h-auto lg:left-1/2 lg:transform lg:translate-x-[-50%] top-[80px] max-h-[calc(100vh-80px)] bg-background-2 overflow-y-auto lg:overflow-visible z-50 flex flex-col items-center">
      <div className="w-[80%] lg:w-[1172px] py-[24px] grid grid-cols-1 lg:grid-cols-3 gap-4">
        {resourceSections?.map((section, index) => (
          <div
            key={section.title}
            className={clsx(
              "flex items-start gap-4",
              index !== 0 && borderStyle
            )}
          >
            <div className="flex flex-col gap-4 bg-background-2 rounded-lg w-full lg:w-[380px]">
              <h3 className="text-primary-purple font-bold text-[16px]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links?.map((link) => (
                  <li key={link.url} className={hoverScaleUpLink}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center py-[28px] gap-[24px] lg:gap-[32px] bg-background-1">
        {socials?.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={hoverScaleUpLogo}
          >
            <Image
              src={social.icon[0].url}
              alt={social.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropdownContent;
