import Footer from "@/components/Footer";
import { graphQLClient } from "@/utils/graphQLClient";

import TrustedBy from "./components/TrustedBy";
import {
  partnersQueryDocument,
  Partner,
  Social,
  footerQueryDocument,
} from "./queries";

const Home: React.FC<{ partners: Partner[]; socials: Social[] }> = (
  { partners, socials }
) => {
  return (
    <div>
      <TrustedBy {...{ partners }}/>
      <Footer {...{ socials }}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const partnersData: { partners: Partner[] } =
    await graphQLClient.request(partnersQueryDocument, {});
  const socialsData: { socials: Social[] } =
    await graphQLClient.request(footerQueryDocument, {});
  return {
    props: {
      partners: partnersData?.partners,
      socials: socialsData?.socials
    }
  };
};

export default Home;
