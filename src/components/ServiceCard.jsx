"use client";
import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";

const ServiceCard = ({
  title,
  desc,
  imgUrl,
  company,
}) => {
  return (
    <article className="group relative w-full h-full">
      <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Media */}
        <div className="relative h-56 md:h-64 flex-shrink-0">
          {/* Use <img> to avoid Next Image domain config requirements */}
          <img
            src={imgUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {/* Top badge glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="px-2.5 py-1 text-[11px] rounded-full bg-white/90 backdrop-blur border border-gray-200">
              Expert Technicians
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 min-h-0">
          <h3 className="text-base md:text-lg font-semibold leading-snug mb-2 flex-shrink-0">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-3 flex-shrink-0">{desc}</p>

          <div className="mb-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 text-[12px] text-gray-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Same-day Service
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">90-day Warranty</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-auto pt-2 flex-shrink-0">
            <CallAndWhatsappButton company={company} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
