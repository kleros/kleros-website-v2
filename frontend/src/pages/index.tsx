import { graphQLClient } from "@/utils/graphQLClient";

import TrustedBy from "./components/TrustedBy";
import { partnersQueryDocument, Partner } from "./queries";

const Home: React.FC<{ partners: Partner[] }> = ({ partners }) => {
  return (
    <div>
      <TrustedBy {...{ partners }}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const data: { partners: Partner[] } =
    await graphQLClient.request(partnersQueryDocument, {});
  return { props: { partners: data?.partners } };
};

export default Home;
