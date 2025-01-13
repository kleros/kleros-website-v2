"use client";

import { useMemo, useState } from "react";

import Tab from "@/components/Tab";
import { TabSectionQueryType } from "@/queries/earn/tabs-data";

import CuratorTabContent from "./CuratorTabContent";
import JurorTabContent from "./JurorTabContent";

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
    [tabsData],
  );

  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32">
      <Tab
        items={tabItems}
        currentValue={activeTab}
        callback={(val: number) => {
          setActiveTab(val);
        }}
      />
      {activeTab === 1 ? (
        <CuratorTabContent {...tabsData.earnPageBecomeACuratorTabContent} />
      ) : (
        <JurorTabContent {...tabsData.earnPageBecomeAJurorTabContent} />
      )}
    </div>
  );
};
export default TabSection;
