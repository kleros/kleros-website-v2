import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import { Testimonial } from "@/queries/research-development/tabs-data";

const TestimonialCard: React.FC<Testimonial> = ({ url, thumbnail }) => (
  <CustomLink href={url}>
    <div className="relative h-[203px] w-full overflow-hidden rounded-2xl">
      <Image
        src={thumbnail.url}
        alt="Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  </CustomLink>
);

export default TestimonialCard;
