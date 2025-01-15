import { useMemo, useState } from "react";

import Pagination from "@/components/Pagination";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Testimonial } from "@/queries/research-development/tabs-data";

import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const [page, setPage] = useState(1);

  const screenSize = useScreenSize();

  const itemsPerPage = useMemo(
    () => (screenSize === "sm" ? 1 : 3),
    [screenSize],
  );

  const items = useMemo(
    () =>
      testimonials.slice(
        itemsPerPage * (page - 1),
        Math.min(testimonials.length, itemsPerPage * page),
      ),
    [itemsPerPage, page],
  );

  return (
    <div>
      <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.url}-${i}`} {...testimonial} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        numPages={Math.ceil(testimonials.length / itemsPerPage)}
        callback={(val) => setPage(val)}
        className="w-full justify-center"
      />
    </div>
  );
};

export default Testimonials;
