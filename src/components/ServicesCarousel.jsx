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
import { motion } from "framer-motion";

const ServicesCarousel = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicData =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : pathname === "/companies/ac"
      ? getAcData(company)
      : getData(company);

  const services = dynamicData || [];

  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <div
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
      className="relative"
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full max-w-[1200px] mx-auto py-8 sm:py-12"
      >
        {/* Content */}
        <CarouselContent className="-ml-4 sm:-ml-6">
          {services.map((service, idx) => (
            <CarouselItem
              key={service.slug || idx}
              className="pl-4 sm:pl-6 basis-[90%] sm:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <ServiceCard
                  imgUrl={service.imgUrl}
                  title={service.title}
                  desc={service.description}
                  company={company}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Floating Controls */}
        <CarouselPrevious
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 
                     w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                     bg-gradient-to-br from-orange-500 to-orange-600 
                     text-white shadow-md hover:scale-110 transition-transform"
        />
        <CarouselNext
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 
                     w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                     bg-gradient-to-br from-orange-500 to-orange-600 
                     text-white shadow-md hover:scale-110 transition-transform"
        />
      </Carousel>

      {/* Progress Indicators */}
      <div className="mt-6 flex justify-center gap-2 sm:gap-3 px-4">
        {services.slice(0, 6).map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-6 sm:w-12 rounded-full bg-gray-200 overflow-hidden relative"
          >
            <div className="absolute inset-y-0 left-0 w-0 bg-orange-500 animate-[grow_4s_linear_infinite]" />
          </div>
        ))}
      </div>

      {/* Progress bar keyframes */}
      <style jsx>{`
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
