"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { usePathname } from "next/navigation";
import ServiceCard from "./ServiceCard";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import { getAcData } from "@/libs/getAcData";

const ServicesCarousel = ({ company }) => {
  const pathname = usePathname();

  const dynamicData =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : pathname === "/companies/ac"
      ? getAcData(company)
      : getData(company);

  const services = dynamicData || [];

  // Autoplay control (pause on hover / tab hidden)
  const autoplay = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false })
  );

  return (
    <div
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
      className="relative"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full max-w-[1200px] mx-auto py-8"
      >
        <CarouselContent className="-ml-4">
          {services.map((service) => (
            <CarouselItem
              key={service.slug}
              className="pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard
                imgUrl={service.imgUrl}
                title={service.title}
                desc={service.description}
                company={company}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="left-2 md:left-0 bg-white/90 hover:bg-white shadow-md border border-gray-200" />
        <CarouselNext className="right-2 md:right-0 bg-white/90 hover:bg-white shadow-md border border-gray-200" />
      </Carousel>

      {/* Simple dots */}
      <div className="mt-2 flex justify-center gap-1.5">
        {Array.from({ length: Math.max(1, services.length) }).slice(0, 6).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-6 rounded-full bg-gray-200 data-[active=true]:bg-primary"
            data-active={i === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
