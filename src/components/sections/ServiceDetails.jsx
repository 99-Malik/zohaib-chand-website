"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata"; // Import solar data
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getAcData } from "@/libs/getAcData"; // Import solar data

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine which data to use based on the route
  const services =
  pathname === "/companies/water-heater"
    ? getSolarData(company) // Use solar data for water-heater route
    : pathname === "/companies/ac"
    ? getAcData(company) // Use AC-specific data for AC route
    : getData(company); // Use general data for other routes

  return (
    <div
      className="flex flex-col items-center justify-center w-full shadow-xl bg-black/5"
      id="service-details"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-5 py-20 gap-5">
        <div className="text-3xl w-fit flex justify-center items-center flex-col gap-2 font-semibold uppercase">
          Service Details
          <div
            className={cn(
              "w-1/2 h-0.5",
              company === "Lg"
                ? "bg-lgPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : "bg-primary"
            )}
          ></div>
        </div>
        <div className="max-w-6xl text-center text-sm">
        We offer a comprehensive range of home appliance repair
          services tailored to meet your specific needs. Our skilled technicians
          are trained to handle various appliance issues, from refrigerators and
          washers to ovens and dishwashers. We pride ourselves on our
          transparent service process, ensuring that you're informed every step
          of the way. With a commitment to using high-quality parts and the
          latest repair techniques, we aim to restore your appliances to optimal
          functioning as quickly and efficiently as possible. Explore our
          detailed service offerings below to find the right solution for your
          appliance repair needs.
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5">
        {services.map((service) => (
          <OneService
            key={service.slug}
            title={service.title}
            description={service.description}
            commonProblems={service.commonProblems}
            slug={service.slug}
            company={company}
            imgUrl={service.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
