import Tab from "@/components/Tab";
import { request } from "@/utils/graphQLClient";

import CuratorTabContent from "./CuratorTabContent";
import JurorTabContent from "./JurorTabContent";
import { tabsQuery, ITabsQuery } from "./queries";

const TabSection: React.FC = async () => {
  const { earnPageBecomeAJurorTabContent, earnPageBecomeACuratorTabContent } =
    await request<ITabsQuery>(tabsQuery);
  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32">
      <Tab
        items={[
          {
            text: earnPageBecomeAJurorTabContent.tabName,
            children: <JurorTabContent {...earnPageBecomeAJurorTabContent} />,
          },
          {
            text: earnPageBecomeACuratorTabContent.tabName,
            children: (
              <CuratorTabContent {...earnPageBecomeACuratorTabContent} />
            ),
          },
        ]}
      />
    </div>
  );
};
export default TabSection;
