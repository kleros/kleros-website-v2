import Image from "next/image";
import Link from "next/link";

import { Testimonial } from "@/queries/research-development/tabs-data";

const TestimonialCard: React.FC<Testimonial> = ({ url, thumbnail }) => (
  <Link href={url} target="_blank" rel="noreferrer noopener">
    <div className="relative h-[203px] w-full overflow-hidden rounded-2xl">
      <Image
        src={thumbnail.url}
        alt="Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  </Link>
);

export default TestimonialCard;
