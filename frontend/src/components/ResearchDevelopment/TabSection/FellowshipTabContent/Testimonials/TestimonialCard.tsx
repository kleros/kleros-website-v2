import { Testimonial } from "@/queries/research-development/tabs-data";

const TestimonialCard: React.FC<Testimonial> = ({ url }) => (
  <div className="relative h-[203px] w-full overflow-hidden rounded-2xl">
    <iframe
      style={{ width: "100%", height: "100%" }}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

export default TestimonialCard;
