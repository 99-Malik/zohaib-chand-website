"use client";
import React from "react";
import { Phone, MessageCircle, Wrench, Clock, ShieldCheck } from "lucide-react";
import { dialPhone, sendMessage } from "@/libs/data";

function MainBanner({ company = "Appliance Service Center UAE" }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background image with blur */}
      <div className="absolute inset-0">
        <img
          src="/washing-machine-repair.jpg" // <-- replace with your asset
          alt="Appliance Repair"
          className="w-full h-full object-cover blur-md brightness-50"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Glass content container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-black/40 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-lg border border-white/10 space-y-8">
          
          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fast &amp; Reliable{" "}
              <span className="text-[#F97316]">Appliance Repairs</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-300">
              Same-Day Service • 24/7 Availability • Affordable Pricing
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold text-[#F97316]">Expert technicians</span>{" "}
            fix your appliances quickly and professionally. Get your home running
            again with{" "}
            <span className="text-orange-400 font-semibold">same-day repair</span>{" "}
            and trusted warranty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={dialPhone}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-base sm:text-lg font-semibold rounded-full shadow-md bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              <Phone size={20} /> Call Now
            </button>
            <button
              onClick={sendMessage}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-base sm:text-lg font-semibold rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white transition"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-white/10">
                <Wrench className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-sm text-gray-200">Expert Technicians</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-white/10">
                <Clock className="w-6 h-6 text-orange-300" />
              </div>
              <span className="text-sm text-gray-200">Same Day Repair</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-white/10">
                <ShieldCheck className="w-6 h-6 text-green-300" />
              </div>
              <span className="text-sm text-gray-200">Warranty Guaranteed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-white/10">
                <span className="text-lg font-bold text-yellow-300">★</span>
              </div>
              <span className="text-sm text-gray-200">5-Star Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
