"use client";

import { useMemo, useState } from "react";

import Tab from "@/components/Tab";
import { TabSectionQueryType } from "@/queries/research-development/tabs-data";

import FellowshipTabContent from "./FellowshipTabContent";
import WaitlistSection from "./FellowshipTabContent/WaitlistSection";
import ResearchTabContent from "./ResearchTabContent";
import KlerosBook from "./ResearchTabContent/KlerosBook";

interface ITabSection {
  tabsData: TabSectionQueryType;
}

const TabSection: React.FC<ITabSection> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = useMemo(
    () => [
      { text: tabsData.rAndDPageResearchTabSection.tabName, value: 0 },
      { text: tabsData.rAndDPageFellowshipTabSection.tabName, value: 1 },
    ],
    [tabsData],
  );

  return (
    <>
      <div className="bg-background-2 px-6 pb-12 pt-[39px] lg:px-32 lg:py-12">
        <Tab
          items={tabItems}
          currentValue={activeTab}
          callback={(val: number) => {
            setActiveTab(val);
          }}
        />
        {activeTab === 1 ? (
          <FellowshipTabContent
            {...tabsData.rAndDPageFellowshipTabSection}
            {...tabsData}
          />
        ) : (
          <ResearchTabContent
            {...tabsData.rAndDPageResearchTabSection}
            {...tabsData}
          />
        )}
      </div>

      {activeTab === 1 ? (
        <WaitlistSection
          {...tabsData.rAndDPageFellowshipTabSection.waitlistSection}
        />
      ) : (
        <KlerosBook {...tabsData.rAndDPageResearchTabSection.klerosBook} />
      )}
    </>
  );
};
export default TabSection;
