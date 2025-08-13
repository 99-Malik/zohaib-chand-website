"use client";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";

const OneService = ({
  title,
  description,
  commonProblems = [],
  bgColor = "white",
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full",
        `bg-${bgColor}`
      )}
      id={slug}
    >
      {/* Image Section */}
      <div
        className="w-full h-48 sm:h-56 md:h-64 bg-center bg-cover bg-no-repeat flex-shrink-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4 sm:p-6 min-h-0">
        {/* Title */}
        <div className="mb-4 flex-shrink-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div
            className={cn(
              "w-16 h-1 rounded-full",
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

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-shrink-0">
          {description}
        </p>

        {/* Common Problems */}
        <div className="mb-4 flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            Common Problems:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {commonProblems.slice(0, 6).map((problem, index) => (
              <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="truncate">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-shrink-0">
          If you're facing any of these issues, don't hesitate to reach out. Our
          prompt and professional repair services will help restore your appliance
          quickly.
        </p>

        {/* Contact Buttons */}
        <div className="mt-auto pt-4 flex-shrink-0">
          <CallAndWhatsappButton company={company} />
        </div>
      </div>
    </div>
  );
};

export default OneService;
