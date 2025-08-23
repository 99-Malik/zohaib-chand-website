"use client";

import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import {
  Wrench,
  ShieldCheck,
  BadgeDollarSign,
  CalendarClock,
  Smile,
  Headset,
} from "lucide-react";

const WhyChooseUs = ({ company = companyName }) => {
  return (
    <section id="why-us" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-5 text-center">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Choose Us</span>
          </h2>
          <div
            className={cn(
              "mx-auto mt-3 h-1 w-24 rounded-full",
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
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Choosing the right appliance repair service matters. Here’s why
            thousands of UAE households trust us with their home essentials:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {[
            {
              icon: <Wrench className="h-6 w-6 text-orange-600" />,
              title: "Expert Technicians",
              desc: "Certified professionals trained on the latest appliance repair techniques.",
            },
            {
              icon: <ShieldCheck className="h-6 w-6 text-orange-600" />,
              title: "Quality Repairs",
              desc: "We use only genuine parts and top-grade tools to restore performance.",
            },
            {
              icon: <BadgeDollarSign className="h-6 w-6 text-orange-600" />,
              title: "Transparent Pricing",
              desc: "Clear, competitive pricing with no hidden charges—ever.",
            },
            {
              icon: <CalendarClock className="h-6 w-6 text-orange-600" />,
              title: "Convenient Service",
              desc: "Flexible scheduling including same-day and emergency visits.",
            },
            {
              icon: <Smile className="h-6 w-6 text-orange-600" />,
              title: "Satisfaction Guarantee",
              desc: "Every repair comes with warranty-backed assurance for peace of mind.",
            },
            {
              icon: <Headset className="h-6 w-6 text-orange-600" />,
              title: "Responsive Support",
              desc: "Friendly support team always ready to help with questions and follow-ups.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <CallAndWhatsappButton company={company} className="mx-auto max-w-sm" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
