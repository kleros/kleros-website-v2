import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

interface IHome {
  partnersData: PartnersQueryType;
  footerData: FooterQueryType;
}

const Home: React.FC<IHome> = ({ partnersData, footerData }) => {
  return (
    <div>
      <TrustedBy {...{ partnersData }} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const partnersData = await graphQLClient.request<PartnersQueryType>(
    partnersQuery
  );
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  return {
    props: {
      partnersData,
      footerData,
    },
  };
};

export default Home;
