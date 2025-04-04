import Quote from "@/components/Quote";
import { request } from "@/utils/graphQLClient";

import {
  lemonCashSectionQuery,
  lemonCashSectionQueryType,
} from "../../queries/lemon-cash";

const LemonCashSection: React.FC = async () => {
  const quote = (
    await request<lemonCashSectionQueryType>(lemonCashSectionQuery)
  ).lemonCashSection;

  return <Quote className="lg:px-32" {...quote} />;
};

export default LemonCashSection;
