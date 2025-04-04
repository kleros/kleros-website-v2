"use client";
import { Table } from "@/app/enterprise/queries/kleros-enterprise-section";
import { useScreenSize } from "@/hooks/useScreenSize";

import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

export interface IMethodsTable {
  table: Table;
}

const MethodsTable: React.FC<IMethodsTable> = ({ table }) => {
  const screenSize = useScreenSize();

  return (
    <div className="mt-4">
      {screenSize === "lg" ? (
        <DesktopTable {...{ table }} />
      ) : (
        <MobileTable {...{ table }} />
      )}
    </div>
  );
};

export default MethodsTable;
