import clsx from "clsx";
import Image from "next/image";

import { request } from "@/utils/graphQLClient";

import {
  lemonCashSectionQuery,
  lemonCashSectionQueryType,
} from "../../queries/lemon-cash";

const LemonCashSection: React.FC = async () => {
  const {
    header,
    primarySubtitle,
    secondarySubtitle,
    icon,
    testimony,
    testimonyAuthor,
  } = (await request<lemonCashSectionQueryType>(lemonCashSectionQuery))
    .lemonCashSection;

  return (
    <div className="lg:px-32">
      <h2 className="text-primary-text mb-6 text-lg font-medium lg:text-2xl">
        {header}
      </h2>
      <p className="text-primary-purple lg:text-lg">{primarySubtitle}</p>
      <p className="text-secondary-text mb-12 lg:text-lg">
        {secondarySubtitle}
      </p>

      <div
        className={clsx(
          "border-stroke rounded-2xl border px-6 py-12 lg:px-12",
          "flex flex-col items-center gap-12 lg:flex-row lg:gap-16",
        )}
      >
        <Image
          width={180}
          height={180}
          src={icon.url}
          alt="Lemon cash"
          className="shrink-0"
        />
        <div className="flex flex-col gap-4">
          <p className="text-primary-text lg:text-lg">{testimony}</p>
          <p className="text-success lg:text-lg">{testimonyAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default LemonCashSection;
