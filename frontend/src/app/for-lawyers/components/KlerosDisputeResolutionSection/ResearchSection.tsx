"use client";
import { useMemo, useState } from "react";

import Pagination from "@/components/Pagination";
import PublicationCard from "@/components/ResearchDevelopment/TabSection/ResearchTabContent/PublicationsSection/PublicationCard";
import { useScreenSize } from "@/hooks/useScreenSize";

import { ForLawyersPageDisputeResolutionSectionQueryType } from "../../queries/kleros-dispute-resolution-section";

type IResearchSection = Pick<
  ForLawyersPageDisputeResolutionSectionQueryType["forLawyersPageDisputeResolutionWithKlerosSection"],
  "secondHeader" | "secondSubtitle" | "publications"
>;

const ResearchSection: React.FC<IResearchSection> = ({
  secondHeader,
  secondSubtitle,
  publications,
}) => {
  const [page, setPage] = useState(1);

  const screenSize = useScreenSize();

  const itemsPerPage = useMemo(
    () => (screenSize === "sm" ? 1 : 6),
    [screenSize],
  );

  const items = useMemo(
    () =>
      publications.slice(
        itemsPerPage * (page - 1),
        Math.min(publications.length, itemsPerPage * page),
      ),
    [publications, itemsPerPage, page],
  );

  return (
    <div className="lg:px-32">
      <h2 className="text-primary-text mb-6 text-lg font-medium lg:text-xl">
        {secondHeader}
      </h2>
      <p className="text-secondary-text mb-12 lg:text-lg">{secondSubtitle}</p>

      <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((publication, index) => (
          <PublicationCard
            key={`${publication.topic}-${index}`}
            {...{ publication }}
            className="[&>h2]:mb-4 [&>h2]:text-lg! [&>p]:mb-2"
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        numPages={Math.ceil(publications.length / itemsPerPage)}
        callback={(val) => setPage(val)}
      />
    </div>
  );
};

export default ResearchSection;
