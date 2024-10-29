import { ResourceLink, ResourceSection } from "@/queries/navbar";

interface ResourcesDropdownContentProps {
  resourceSections: ResourceSection[];
}

const ResourcesDropdownContent: React.FC<ResourcesDropdownContentProps> = ({
  resourceSections,
}) => {
  return (
    <div className="gap-4 flex flex-row rounded-lg shadow-lg relative z-50">
      {resourceSections.map((section: ResourceSection) => (
        <div
          key={section.title}
          className="flex flex-col p-4 bg-purple-900 rounded-lg"
        >
          <h3 className="text-purple-400 font-bold mb-2">{section.title}</h3>
          <ul>
            {section?.resource_links.map((link: ResourceLink) => (
              <li key={link.url} className="text-white">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResourcesDropdownContent;
