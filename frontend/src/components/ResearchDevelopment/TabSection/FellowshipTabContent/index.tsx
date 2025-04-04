import {
  Fellow,
  RAndDPageFellowshipTabSection,
  Testimonial,
} from "@/queries/research-development/tabs-data";

import Fellows from "./Fellows";
import KlerosFellowSection from "./KlerosFellowSection";
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
    <div className="bg-background-2 px-6 lg:px-32">
      <div className="flex flex-col gap-8 pb-12 pt-[88px] lg:py-24">
        <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
          {header}
        </h1>
        <p className="text-secondary-text lg:text-lg">{subtitle}</p>

        <h3 className="my-8 text-lg text-secondary-text lg:text-xl">
          {testimonialsHeader}
        </h3>
        <Testimonials {...{ testimonials }} />
        <h3 className="my-4 text-lg text-secondary-text lg:text-xl">
          {fellowsHeader}
        </h3>
        <Fellows {...{ fellows }} />
        <KlerosFellowSection />
      </div>
    </div>
  );
};

export default FellowshipTabContent;
