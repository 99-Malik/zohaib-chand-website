"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Clock,
  Sparkles,
  PhoneCall,
  Phone,
  MessageCircle,
} from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName, getData, phoneNumber, dialPhone, sendMessage } from "@/libs/data";

const AboutSection = ({ company = companyName }) => {
  const pathname = usePathname();

  // --- ROUTE-BASED CONTENT ---------------------------------------------------
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

  // --- VISUALS ---------------------------------------------------------------
  const brandBarClass = cn(
    "h-1 w-28 rounded-full",
    company === "Lg"
      ? "bg-lgPrimary"
      : company === "Samsung"
      ? "bg-samsungPrimary"
      : company === "Bosch"
      ? "bg-boschPrimary"
      : company === "Siemens"
      ? "bg-siemensPrimary"
      : "bg-emerald-500"
  );

  const heroImage =
    pathname === "/companies/water-heater"
      ? "/static/about-water-heater.jpg"
      : pathname === "/companies/ac"
      ? "/static/about-ac.jpg"
      : "/static/about.jpg";

  // --- FEATURE HIGHLIGHTS ----------------------------------------------------
  const highlights = [
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      label: "90-day warranty",
    },
    { icon: <Clock className="h-4 w-4" />, label: "Same-day service" },
    { icon: <Wrench className="h-4 w-4" />, label: "Certified technicians" },
    { icon: <Sparkles className="h-4 w-4" />, label: "Genuine parts" },
  ];

  // --- STATS -----------------------------------------------------------------
  const stats = [
    { value: "10k+", label: "Repairs completed" },
    { value: "4.8★", label: "Customer rating" },
    { value: "25+", label: "Expert technicians" },
  ];

  return (
    <section id="about" className="relative isolate">
      {/* BACKDROP ACCENT */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-56 bg-gradient-to-b from-primary/5 to-transparent blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-stretch gap-10 lg:gap-12 lg:grid-cols-12">
          {/* LEFT: VISUAL PANEL */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5 shadow-sm">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${"/washing-machine-repair.jpg"})` }}
                aria-label="Technician repairing home appliance"
              />
              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              {/* badges */}
              <div className="absolute left-4 right-4 bottom-4 flex flex-wrap items-center gap-2">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur"
                  >
                    {h.icon}
                    {h.label}
                  </span>
                ))}
              </div>
            </div>

            {/* stats card */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              {stats.map((s) => (
                <div key={s.label} className="p-4 text-center">
                  <div className="text-lg font-semibold">{s.value}</div>
                  <div className="text-[12px] text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* RIGHT: CONTENT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider text-gray-500">
                  About us
                </span>
                <span className={brandBarClass} />
              </div>

              <h2 className="text-2xl leading-tight font-semibold text-gray-900 sm:text-3xl">
                Fast, reliable appliance repairs—done right the first time.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-gray-600">
                We’re a UAE-based team of certified technicians delivering
                same-day repairs for major home appliances. From precise
                diagnostics to genuine parts and clean workmanship, we bring
                manufacturer-level care to every job—so your home runs smoothly
                again, fast.
              </p>

              {/* services list */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Services we offer
                </h3>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((item) => (
                    <li
                      key={item}
                      className="group inline-flex items-start gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span className="text-[14px] text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-gray-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Insured service
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                  <Wrench className="h-3.5 w-3.5" />
                  Multi-brand expertise
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                  <Clock className="h-3.5 w-3.5" />
                  Flexible scheduling
                </span>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CallAndWhatsappButton company={company} />
                <button
                  onClick={dialPhone}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call us now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
