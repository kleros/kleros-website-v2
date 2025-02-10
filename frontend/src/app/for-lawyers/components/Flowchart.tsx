import clsx from "clsx";

import { Flowchart as FlowchartItems } from "../queries/kleros-mediation-section";

type IFlowchartItem = FlowchartItems[number] & {
  background: "primary" | "secondary";
};

const FlowchartItem: React.FC<IFlowchartItem> = ({
  name,
  description,
  index,
  background,
}) => {
  return (
    <div className="flex max-w-[270px] flex-col gap-6">
      <div
        className={clsx(
          "h-[148px] rounded-2xl bg-[linear-gradient(90deg,_#D38BFF_0%,_#9747FF_100%)]",
          "flex items-center justify-center p-6",
        )}
      >
        <span className="text-primary-text text-center text-lg font-medium lg:text-xl">
          {name}
        </span>
      </div>

      {/* ribbon */}
      <div className="pr-[14px]">
        <div
          className={clsx(
            "bg-primary-blue relative h-7 w-[100%-14px]",
            "flex items-center justify-center",
            //start-arrow
            "before:absolute before:top-0 before:-left-[1px] before:border-t-[14px] before:border-b-[14px] before:border-l-[14px]",
            "before:border-t-transparent before:border-b-transparent",
            background === "primary"
              ? "before:border-l-background-1"
              : "before:border-l-background-2",
            //end arrow
            "after:absolute after:top-0 after:right-[-14px] after:border-t-[14px] after:border-b-[14px] after:border-l-[14px]",
            "after:border-l-primary-blue after:border-t-transparent after:border-b-transparent",
          )}
        >
          <span className="text-background-2 text-xl">{index}</span>
        </div>
      </div>

      <div className="border-stroke bg-background-2 rounded-3xl border-2 p-6">
        <p className="text-secondary-text lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

interface IFlowchart {
  items: FlowchartItems;
  background: IFlowchartItem["background"];
}

const Flowchart: React.FC<IFlowchart> = ({ items, background }) => {
  return (
    <div
      className={
        "mx-auto grid w-fit grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      }
    >
      {items.map((item) => (
        <FlowchartItem key={item.name} {...item} background={background} />
      ))}
    </div>
  );
};

export default Flowchart;
