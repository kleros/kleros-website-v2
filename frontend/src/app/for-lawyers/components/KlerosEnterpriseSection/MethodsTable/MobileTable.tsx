import React, { useState } from "react";

import clsx from "clsx";

import { Table } from "@/app/for-lawyers/queries/kleros-enterprise-section";
import Divider from "@/components/Divider";
import Pagination from "@/components/Pagination";

import { IMethodsTable } from ".";

const TableItem: React.FC<{
  heading: string;
  tableHeadings: Table["tableHeadings"];
  tableData: Table["tableRows"][number]["rowData"];
}> = ({ heading, tableHeadings, tableData }) => {
  return (
    <div
      className={clsx(
        "border-stroke bg-background-1 rounded-2xl border-2",
        "px-6 pt-8 pb-16",
        "flex flex-col gap-6",
      )}
    >
      <h2 className="text-primary-text text-lg font-medium">{heading}</h2>{" "}
      <Divider />
      {tableHeadings.slice(1).map(({ heading }, index) => (
        <div key={`${heading}-${index}`} className="flex flex-col gap-4">
          <p className="text-primary-purple">{heading}</p>
          <div className="flex flex-col">
            <p className="text-primary-primary">
              {tableData[index].primaryValue}
            </p>
            <p className="text-primary-secondary">
              {tableData[index].secondaryValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MobileTable: React.FC<IMethodsTable> = ({ table }) => {
  const [page, setPage] = useState(1);
  const { tableHeadings, tableRows } = table;

  return (
    <div>
      <TableItem
        heading={tableRows[page - 1].rowHeading}
        tableHeadings={tableHeadings}
        tableData={tableRows[page - 1].rowData}
      />
      <Pagination
        currentPage={page}
        numPages={tableRows.length}
        callback={(val) => setPage(val)}
        className="mt-12"
      />
    </div>
  );
};

export default MobileTable;
