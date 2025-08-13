"use client";
import { companyName, getData, dialPhone, sendMessage } from "@/libs/data";
import React from "react";
import ServicesCarousel from "../ServicesCarousel";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield, Star, Zap, CheckCircle } from "lucide-react";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();

  // Determine whether to show company name
  const showCompanyName = pathname !== "/companies/water-heater";

  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-semibold mb-6"
          >
            <Wrench size={16} />
            Professional Services
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Our <span className="text-blue-600">Expert Services</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {showCompanyName ? (
              <>
                Our mission is to deliver <span className="font-semibold text-gray-800">top-notch repair services</span> that exceed our customers' expectations. 
                We understand that a malfunctioning appliance can disrupt your daily routine, which is why we strive for 
                <span className="font-semibold text-blue-600"> quick turnaround times</span> and 
                <span className="font-semibold text-gray-800"> exceptional customer service</span>. 
                Your satisfaction is our priority!
              </>
            ) : (
              <>
                Our mission is to deliver <span className="font-semibold text-gray-800">top-notch repair services</span> that exceed our customers' expectations. 
                We understand that a malfunctioning appliance can disrupt your daily routine, which is why we strive for 
                <span className="font-semibold text-blue-600"> quick turnaround times</span> and 
                <span className="font-semibold text-gray-800"> exceptional customer service</span>. 
                Your satisfaction is our priority!
              </>
            )}
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
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Clock size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Same Day Service</h3>
            <p className="text-gray-600 text-sm">Quick turnaround times to get your appliances working again</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Shield size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Warranty Guaranteed</h3>
            <p className="text-gray-600 text-sm">All repairs come with comprehensive warranty coverage</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <Star size={24} className="text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Technicians</h3>
            <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Zap size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Emergency service available around the clock</p>
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Emergency Repair?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Don't let a broken appliance ruin your day. Our expert team is ready to help 24/7!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={dialPhone}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Call Now - Free Quote
              </button>
              <button 
                onClick={sendMessage}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
