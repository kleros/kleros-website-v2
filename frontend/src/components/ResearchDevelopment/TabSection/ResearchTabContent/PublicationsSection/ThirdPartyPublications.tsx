import { useMemo, useState } from "react";

import Pagination from "@/components/Pagination";
import { useScreenSize } from "@/hooks/useScreenSize";
import { ThirdPartyPublication } from "@/queries/research-development/tabs-data";

import PublicationCard from "./PublicationCard";

const ThirdPartyPublications: React.FC<{
  thirdPartyPublications: ThirdPartyPublication[];
}> = ({ thirdPartyPublications }) => {
  const [page, setPage] = useState(1);

  const screenSize = useScreenSize();

  const itemsPerPage = useMemo(
    () => (screenSize === "sm" ? 1 : 6),
    [screenSize],
  );

  const items = useMemo(
    () =>
      thirdPartyPublications.slice(
        itemsPerPage * (page - 1),
        Math.min(thirdPartyPublications.length, itemsPerPage * page),
      ),
    [thirdPartyPublications, itemsPerPage, page],
  );

  return (
    <div>
      <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((publication) => (
          <PublicationCard key={publication.topic} {...{ publication }} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        numPages={Math.ceil(thirdPartyPublications.length / itemsPerPage)}
        callback={(val) => setPage(val)}
        className="w-full justify-center"
      />
    </div>
  );
};

export default ThirdPartyPublications;
