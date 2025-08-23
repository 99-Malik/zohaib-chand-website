"use client";

import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { ShieldCheck, Clock } from "lucide-react";

const ServiceCard = ({ title, desc, imgUrl, company }) => {
  return (
    <article className="group relative w-full h-full">
      <div className="rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm 
                      border border-gray-200 shadow-md hover:shadow-xl 
                      transition-all duration-500 h-full flex flex-col hover:-translate-y-1">

        {/* Media Section */}
        <div className="relative h-48 sm:h-56 md:h-60 flex-shrink-0 overflow-hidden rounded-t-2xl">
          {/* Image */}
          <img
            src={imgUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Modern Badge */}
          <div className="absolute left-3 top-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg 
                 bg-gradient-to-r from-orange-500 to-orange-400 
                 text-white text-[11px] font-semibold shadow-md 
                 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
              </svg>
              Expert Care
            </span>
          </div>
        </div>

        {/* Body Section */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {desc}
          </p>

          {/* Highlights */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-orange-500" />
              Same-day Service
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-500" />
              90-day Warranty
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-auto">
            <CallAndWhatsappButton company={company} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
