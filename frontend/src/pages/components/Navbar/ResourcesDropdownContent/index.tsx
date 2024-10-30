import { ResourceSection } from "@/queries/navbar";

interface ResourcesDropdownContentProps {
  resourceSections: ResourceSection[];
}

const ResourcesDropdownContent: React.FC<ResourcesDropdownContentProps> = ({
  resourceSections,
}) => {
  return (
    <div className="flex flex-row gap-4 rounded-lg shadow-lg">
      {resourceSections.map((section) => (
        <div key={section.title} className="p-4 bg-purple-900 rounded-lg">
          <h3 className="text-purple-400 font-bold mb-2">{section.title}</h3>
          <ul>
            {section.links.map((link) => (
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
