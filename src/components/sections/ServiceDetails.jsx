"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import { getAcData } from "@/libs/getAcData";
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();

  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : pathname === "/companies/ac"
      ? getAcData(company)
      : getData(company);

  return (
    <section
      id="service-details"
      className="relative isolate bg-gradient-to-b from-white via-gray-50 to-white py-20"
    >
      {/* subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f97316/10_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              Service Details
            </span>
          </h2>
          <div
            className={cn(
              "mx-auto mt-3 h-1 w-20 rounded-full",
              company === "Lg"
                ? "bg-lgPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : "bg-orange-500"
            )}
          />
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We provide a complete range of{" "}
            <span className="font-semibold text-gray-800">
              expert appliance repairs
            </span>{" "}
            with transparent service, genuine parts, and fast turnaround.
            Explore below to find the right solution for your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
    </section>
  );
};

export default ServiceDetails;
