"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BadgeCheck,
  Timer,
  Wrench,
  Cog,
  PhoneCall,
  Star,
  Users,
  Settings
} from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { companyName, dialPhone } from "@/libs/data";

const AboutSection = ({ company = companyName }) => {
  const pathname = usePathname();

  // Route-specific services
  const waterHeaterServices = [
    "Solar Water Heater Repair",
    "Leaking Pipes & Connections",
    "Faulty Temperature Sensors",
    "Improper Installation Fixes",
    "Blocked / Clogged Pipes",
    "Circulation Pump Repair",
  ];

  const acServices = [
    "AC Repair & Maintenance",
    "AC Water Leakage Fix",
    "Thermostat Calibration",
    "Install & Re-installation",
    "Compressor / Gas Refill",
    "Weak Airflow Solutions",
  ];

  const generalServices = [
    "Washing Machine Repair",
    "Dryer Repair",
    "Dishwasher Repair",
    "Stove / Cooker Repair",
    "Television Repair",
    "Gas Oven Repair",
    "Fridge Repair",
  ];

  const services =
    pathname === "/companies/water-heater"
      ? waterHeaterServices
      : pathname === "/companies/ac"
        ? acServices
        : generalServices;

  // Highlights with updated icons
  const highlights = [
    { icon: <BadgeCheck className="h-4 w-4" />, label: "90-Day Warranty" },
    { icon: <Timer className="h-4 w-4" />, label: "Same-Day Service" },
    { icon: <Wrench className="h-4 w-4" />, label: "Certified Technicians" },
    { icon: <Cog className="h-4 w-4" />, label: "Genuine Parts" },
  ];

  const stats = [
    { value: "10k+", label: "Repairs Completed", icon: <Settings className="h-5 w-5 text-orange-500" /> },
    { value: "4.8★", label: "Customer Rating", icon: <Star className="h-5 w-5 text-orange-500" /> },
    { value: "25+", label: "Expert Technicians", icon: <Users className="h-5 w-5 text-orange-500" /> },
  ];

  return (
    <section id="about" className="relative isolate overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-orange-50/30 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          {/* LEFT VISUAL PANEL - Modernized */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 shadow-xl ring-1 ring-gray-100/50">
              {/* Modern image container with subtle border */}
              <div className="relative">
                <div
                  className="aspect-[4/5] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url("/fridge-repair.jpg")` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating highlights - modernized */}
                <div className="absolute left-4 right-4 bottom-4 flex flex-wrap gap-3">
                  {highlights.map((h, i) => (
                    <motion.span
                      key={h.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 rounded-xl 
                 bg-gradient-to-r from-orange-500/90 to-amber-500/90 
                 px-3.5 py-2 text-xs font-semibold text-white 
                 shadow-lg backdrop-blur-md 
                 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                        {h.icon}
                      </div>
                      {h.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats - modernized */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center rounded-xl bg-white 
                             shadow-sm p-4 text-center hover:shadow-md transition-all duration-300
                             border border-gray-100"
                >
                  <div className="mb-2 flex justify-center">{s.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.aside>

          {/* RIGHT CONTENT - Modernized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              {/* Section Label - modernized */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 mb-6"
              >
                <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold">
                  About Us
                </span>
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                <span className="text-xs text-orange-600">Since 2010</span>
              </motion.div>

              {/* Heading - modernized */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fast, reliable appliance repairs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">you can trust</span>.
              </h2>

              {/* Copy - modernized */}
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We're a UAE-based team of certified technicians delivering{" "}
                <span className="font-semibold text-gray-800">
                  same-day repairs
                </span>{" "}
                for all major home appliances. From diagnostics to genuine parts
                and clean workmanship, we ensure{" "}
                <span className="font-semibold text-orange-600">
                  peace of mind
                </span>{" "}
                every time.
              </p>

              {/* Services - modernized */}
              <div className="mt-10">
                <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide mb-4 flex items-center">
                  <span className="h-5 w-1 bg-orange-500 rounded-full mr-3"></span>
                  Services we offer
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 
                                 bg-white p-4 text-gray-700 shadow-sm hover:shadow-md 
                                 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Row - modernized */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <CallAndWhatsappButton company={company} />
                <button
                  onClick={dialPhone}
                  className="inline-flex items-center gap-2 rounded-xl bg-white 
                             px-5 py-3 text-base font-medium text-gray-900 shadow-sm 
                             transition-all hover:shadow-md border border-gray-200
                             hover:bg-gray-50"
                >
                  <PhoneCall className="h-5 w-5 text-orange-600" />
                  Call us now
                </button>

                {/* Additional trust signal */}
                <div className="flex items-center text-sm text-gray-500 mt-4 sm:mt-0">
                  <div className="flex -space-x-2 mr-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-6 w-6 rounded-full bg-orange-400 border-2 border-white"></div>
                    ))}
                  </div>
                  <span>25+ technicians available today</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;