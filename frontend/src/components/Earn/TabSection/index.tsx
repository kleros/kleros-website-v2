import Tab from "@/components/Tab";
import { TabSectionQueryType } from "@/queries/earn/tabs-data";

import CuratorTabContent from "./CuratorTabContent";
import JurorTabContent from "./JurorTabContent";

interface ITabSection {
  tabsData: TabSectionQueryType;
}

const TabSection: React.FC<ITabSection> = ({ tabsData }) => {
  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32">
      <Tab
        items={[
          {
            text: tabsData.earnPageBecomeAJurorTabContent.tabName,
            children: (
              <JurorTabContent {...tabsData.earnPageBecomeAJurorTabContent} />
            ),
          },
          {
            text: tabsData.earnPageBecomeACuratorTabContent.tabName,
            children: (
              <CuratorTabContent
                {...tabsData.earnPageBecomeACuratorTabContent}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
export default TabSection;
