import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import Navbar from "./components/Navbar";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

interface IHome {
  navbarData: NavbarQueryType;
  partnersData: PartnersQueryType;
  footerData: FooterQueryType;
}

const Home: React.FC<IHome> = ({ navbarData, partnersData, footerData }) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <TrustedBy {...{ partnersData }} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const partnersData = await graphQLClient.request<PartnersQueryType>(
    partnersQuery
  );
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);

  return {
    props: {
      navbarData,
      partnersData,
      footerData,
    },
  };
};

export default Home;
