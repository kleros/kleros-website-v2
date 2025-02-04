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
  return (
    <div>
      <Tab
        items={[
          {
            text: tabsData.rAndDPageResearchTabSection.tabName,
            children: (
              <>
                <ResearchTabContent
                  {...tabsData.rAndDPageResearchTabSection}
                  {...tabsData}
                />
                <KlerosBook
                  {...tabsData.rAndDPageResearchTabSection.klerosBook}
                />
              </>
            ),
          },
          {
            text: tabsData.rAndDPageFellowshipTabSection.tabName,
            children: (
              <>
                {" "}
                <FellowshipTabContent
                  {...tabsData.rAndDPageFellowshipTabSection}
                  {...tabsData}
                />
                <WaitlistSection
                  {...tabsData.rAndDPageFellowshipTabSection.waitlistSection}
                />
              </>
            ),
          },
        ]}
        className="bg-background-2 px-6 pt-[39px] lg:px-32 lg:pt-12"
      />
    </div>
  );
};
export default TabSection;
