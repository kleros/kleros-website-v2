import Tab from "@/components/Tab";
import { TabSectionQueryType } from "@/queries/earn/tabs-data";
import { useMemo, useState } from "react";
import JurorTabContent from "./JurorTabContent";
import CuratorTabContent from "./CuratorTabContent";

interface ITabSection {
  tabsData: TabSectionQueryType;
}

const TabSection: React.FC<ITabSection> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = useMemo(
    () => [
      { text: tabsData.earnPageBecomeAJurorTabContent.tabName, value: 0 },
      { text: tabsData.earnPageBecomeACuratorTabContent.tabName, value: 1 },
    ],
    [tabsData]
  );

  return (
    <div className="bg-background-2 py-12 px-6 lg:px-32">
      <Tab
        items={tabItems}
        currentValue={activeTab}
        callback={(val: number) => {
          setActiveTab(val);
        }}
      />
      {activeTab === 1 ? <CuratorTabContent {...tabsData.earnPageBecomeACuratorTabContent}/> : <JurorTabContent {...tabsData.earnPageBecomeAJurorTabContent}/>}
    </div>
  );
};
export default TabSection;
