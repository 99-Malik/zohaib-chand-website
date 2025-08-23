"use client";

import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const OneService = ({
  title,
  description,
  commonProblems = [],
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <article
      id={slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl 
                 bg-white/80 backdrop-blur-md border border-gray-100 
                 shadow-md hover:shadow-xl hover:-translate-y-1 
                 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Modern Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                       bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold 
                       shadow-md backdrop-blur-sm ring-1 ring-white/20"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Certified Care
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Common Problems */}
        {commonProblems?.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              Common Problems
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {commonProblems.slice(0, 6).map((problem, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call To Action */}
        <div className="mt-auto pt-4">
          <CallAndWhatsappButton company={company} />
        </div>
      </div>
    </article>
  );
};

export default OneService;
