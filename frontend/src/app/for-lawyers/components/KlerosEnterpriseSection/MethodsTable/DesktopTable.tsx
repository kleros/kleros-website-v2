import React from "react";

import clsx from "clsx";

import { IMethodsTable } from ".";

const DesktopTable: React.FC<IMethodsTable> = ({ table }) => {
  const { tableHeadings, tableRows } = table;

  return (
    <div
      className={clsx(
        "rounded-2xl border-2 border-stroke bg-background-1",
        "grid overflow-auto pl-8 pt-9",
      )}
      style={{
        gridTemplateColumns: `repeat(${tableHeadings.length}, minmax(0, 1fr))`,
      }}
    >
      {tableHeadings.map(({ heading }, index) => (
        <div
          key={heading}
          className={clsx(
            "border-b border-b-stroke pb-4 pl-4 pt-0",
            index === 0 && "pl-0",
            index === tableHeadings.length - 1 && "pr-8",
          )}
        >
          <span className="break-words text-lg font-medium text-primary-purple">
            {heading}
          </span>
        </div>
      ))}

      {tableRows.map(({ rowHeading, rowData }, rowIndex) => (
        <React.Fragment key={`${rowData}-${rowIndex}`}>
          <div
            key={rowHeading}
            className={clsx(
              "py-4",
              rowIndex !== tableRows.length - 1 && "border-b border-b-stroke",
            )}
          >
            <span
              className={"break-words text-lg font-medium text-primary-purple"}
            >
              {rowHeading}
            </span>
          </div>

          {rowData.map(({ primaryValue, secondaryValue }, index) => (
            <div
              key={`${primaryValue}-${index}`}
              className={clsx(
                "border-b border-b-stroke bg-background-2",
                "flex flex-col p-4 pr-0",
                //top-rows first element
                index === 0 && rowIndex === 0 && "rounded-tl-2xl",
                //bottom row's first element
                index === 0 &&
                  rowIndex === tableRows.length - 1 &&
                  "rounded-bl-2xl border-none",
                // last element of each row
                index === rowData.length - 1 && "!pr-8",
                //last row
                rowIndex === tableRows.length - 1 && "border-none",
              )}
            >
              <p className="break-words text-lg font-medium text-primary-text">
                {primaryValue}
              </p>
              <p className="break-words text-secondary-text">
                {secondaryValue}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DesktopTable;
