import { graphQLClient } from "@/utils/graphQLClient";

import TrustedBy from "./components/TrustedBy";
import {
  partnersQueryDocument,
  Partner,
  NavLink,
  navLinksQueryDocument,
  klerosLogoQueryDocument,
  KlerosLogo,
  HeaderButton,
  headerButtonQueryDocument,
} from "./queries";
import Header from "@/pages/components/Header";

const Home: React.FC<{
  klerosLogo: KlerosLogo;
  navLinks: NavLink[];
  partners: Partner[];
  headerButton: HeaderButton;
}> = ({ klerosLogo, navLinks, partners, headerButton }) => {
  return (
    <div>
      <Header {...{ klerosLogo, headerButton, navLinks }} />
      <TrustedBy {...{ partners }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const partnersData: { partners: Partner[] } = await graphQLClient.request(
    partnersQueryDocument,
    {}
  );
  const navLinksData: { navLinks: NavLink[] } = await graphQLClient.request(
    navLinksQueryDocument,
    {}
  );
  const klerosLogoData: { klerosLogo: KlerosLogo } =
    await graphQLClient.request(klerosLogoQueryDocument, {});
  const headerButtonData: { headerButton: HeaderButton } =
    await graphQLClient.request(headerButtonQueryDocument, {});

  return {
    props: {
      partners: partnersData?.partners,
      navLinks: navLinksData?.navLinks,
      klerosLogo: klerosLogoData?.klerosLogo,
      headerButton: headerButtonData?.headerButton,
    },
  };
};

export default Home;
