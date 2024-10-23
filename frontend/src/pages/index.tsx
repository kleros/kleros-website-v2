import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import { partnersQuery, partnersQueryType } from "@/queries/partners";
import { socialsQuery, socialsQueryType } from "@/queries/socials";

interface IHome {
  partners: partnersQueryType["partners"];
  socials: socialsQueryType["socials"];
}

const Home: React.FC<IHome> = ({ partners, socials }) => {
  return (
    <div>
      <TrustedBy {...{ partners }}/>
      <Footer {...{ socials }}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const { partners } = await partnersQuery.run();
  const { socials } = await socialsQuery.run();
  return {
    props: {
      partners,
      socials,
    }
  };
};

export default Home;
