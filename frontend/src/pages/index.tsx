import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import { footerQuery, footerQueryType } from "@/queries/footer";
import { partnersQuery, partnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

interface IHome {
  partnersData: partnersQueryType;
  footerData: footerQueryType;
}

const Home: React.FC<IHome> = ({ partnersData, footerData }) => {
  return (
    <div>
      <TrustedBy {...{ partnersData }}/>
      <Footer {...{ footerData }}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const partnersData = await graphQLClient.request<partnersQueryType>(
    partnersQuery
  );
  const footerData = await graphQLClient.request<footerQueryType>(footerQuery);
  return {
    props: {
      partnersData,
      footerData,
    }
  };
};

export default Home;
