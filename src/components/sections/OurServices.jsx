"use client";
import { companyName } from "@/libs/data";
import React from "react";
import ServicesCarousel from "../ServicesCarousel";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield, Star, Zap } from "lucide-react";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();
  const showCompanyName = pathname !== "/companies/water-heater";

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Modern Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
               bg-gradient-to-r from-orange-500/10 to-orange-400/10 
               border border-orange-200 text-orange-700 text-sm font-semibold mb-8"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white">
              <Wrench size={14} />
            </span>
            Premium Appliance Solutions
          </motion.div>

          {/* Heading with orange highlight */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug relative"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-600">Expert Services</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-100 -z-0 rounded-md"></span>
            </span>
          </motion.h2>

          {/* Decorative divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6 rounded-full"></div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From urgent breakdowns to routine care, we deliver{" "}
            <span className="font-semibold text-gray-800">reliable repair solutions</span>{" "}
            with <span className="font-semibold text-orange-600">quick turnaround</span> and{" "}
            <span className="font-semibold text-gray-800">customer-first support</span>.  
            Your peace of mind is our guarantee.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Card 1 */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md border-t-4 border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-orange-50 ring-1 ring-orange-200 mb-4 group-hover:scale-105 transition">
              <Clock size={26} className="text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Same Day Service
            </h3>
            <p className="text-gray-600 text-sm">
              Quick turnaround times to get your appliances running again.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md border-t-4 border-green-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-green-50 ring-1 ring-green-200 mb-4 group-hover:scale-105 transition">
              <Shield size={26} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Warranty Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              Every repair includes comprehensive warranty coverage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md border-t-4 border-yellow-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-yellow-50 ring-1 ring-yellow-200 mb-4 group-hover:scale-105 transition">
              <Star size={26} className="text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Expert Technicians
            </h3>
            <p className="text-gray-600 text-sm">
              Certified professionals with years of repair experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md border-t-4 border-purple-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-purple-50 ring-1 ring-purple-200 mb-4 group-hover:scale-105 transition">
              <Zap size={26} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Emergency service available day or night, 365 days a year.
            </p>
          </div>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesCarousel company={company} />
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
