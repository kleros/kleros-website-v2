"use client";
import { useMemo, useState, useEffect } from "react";

import MobilePagination from "@/components/MobilePagination";
import Pagination from "@/components/Pagination";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Fellow } from "@/queries/research-development/tabs-data";

import FellowCard from "./FellowCard";

const Fellows: React.FC<{ fellows: Fellow[] }> = ({ fellows }) => {
  const [page, setPage] = useState(1);

  const screenSize = useScreenSize();

  const itemsPerPage = useMemo(
    () => (screenSize === "sm" ? 1 : 2),
    [screenSize],
  );

  const items = useMemo(
    () =>
      fellows.slice(
        itemsPerPage * (page - 1),
        Math.min(fellows.length, itemsPerPage * page),
      ),
    [itemsPerPage, fellows, page],
  );

  const numPages = useMemo(
    () => Math.ceil(fellows.length / itemsPerPage),
    [fellows, itemsPerPage],
  );

  useEffect(() => {
    if (itemsPerPage === 1) {
      setPage(page * 2 - 1);
    } else {
      setPage(Math.min(Math.floor(page / 2) + 1, numPages));
    }
  }, [itemsPerPage]);

  return (
    <div>
      <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {items.map((fellow) => (
          <FellowCard key={fellow.name} {...fellow} />
        ))}
      </div>
      {screenSize === "lg" ? (
        <Pagination
          currentPage={page}
          numPages={numPages}
          callback={(val) => setPage(val)}
          className="w-full justify-center"
        />
      ) : (
        <MobilePagination
          currentPage={page}
          numPages={numPages}
          callback={(val) => setPage(val)}
          className="w-full justify-center"
        />
      )}
    </div>
  );
};

export default Fellows;
