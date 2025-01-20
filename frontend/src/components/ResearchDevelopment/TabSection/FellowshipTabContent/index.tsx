import {
  Fellow,
  RAndDPageFellowshipTabSection,
  Testimonial,
} from "@/queries/research-development/tabs-data";

import Fellows from "./Fellows";
import Testimonials from "./Testimonials";

interface IFellowshipTabContent extends RAndDPageFellowshipTabSection {
  testimonials: Testimonial[];
  fellows: Fellow[];
}

const FellowshipTabContent: React.FC<IFellowshipTabContent> = ({
  header,
  subtitle,
  testimonialsHeader,
  fellowsHeader,
  testimonials,
  fellows,
}) => {
  return (
    <div className="flex flex-col gap-8 pb-12 pt-[88px] lg:py-24">
      <h1 className="text-2xl font-medium text-primary-text md:text-3xl">
        {header}
      </h1>
      <p className="text-lg text-secondary-text">{subtitle}</p>

      <h3 className="my-8 text-xl text-secondary-text">{testimonialsHeader}</h3>
      <Testimonials {...{ testimonials }} />

      <h3 className="my-4 text-xl text-secondary-text">{fellowsHeader}</h3>
      <Fellows {...{ fellows }} />
    </div>
  );
};

export default FellowshipTabContent;
