"use client";
import { useMemo, useState } from "react";

import { Pagination as SwiperPagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Pagination from "@/components/Pagination";
import { useScreenSize } from "@/hooks/useScreenSize";
import { ThirdPartyPublication } from "@/queries/research-development/tabs-data";

import PublicationCard from "./PublicationCard";

const ThirdPartyPublications: React.FC<{
  thirdPartyPublications: ThirdPartyPublication[];
}> = ({ thirdPartyPublications }) => {
  const [page, setPage] = useState(1);

  const screenSize = useScreenSize();

  const itemsPerPage = useMemo(
    () => (screenSize === "sm" ? 1 : 6),
    [screenSize],
  );

  const items = useMemo(
    () =>
      thirdPartyPublications.slice(
        itemsPerPage * (page - 1),
        Math.min(thirdPartyPublications.length, itemsPerPage * page),
      ),
    [thirdPartyPublications, itemsPerPage, page],
  );

  return (
    <div>
      {screenSize === "sm" ? (
        <>
          <Swiper
            className="!pb-12"
            spaceBetween="8px"
            breakpoints={{
              768: {
                slidesPerView: 6,
              },
            }}
            pagination={{
              bulletClass:
                "size-4 inline-block rounded-full bg-stroke transition mx-4",
              bulletActiveClass: "!bg-primary-blue",
            }}
            modules={[SwiperPagination]}
          >
            {thirdPartyPublications.map((publication) => (
              <SwiperSlide key={publication.topic}>
                <PublicationCard {...{ publication }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <div className="mb-12 grid grid-cols-3 gap-4">
            {items.map((publication) => (
              <PublicationCard key={publication.topic} {...{ publication }} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            numPages={Math.ceil(thirdPartyPublications.length / itemsPerPage)}
            callback={(val) => setPage(val)}
            className="w-full justify-center"
          />
        </>
      )}
    </div>
  );
};

export default ThirdPartyPublications;
