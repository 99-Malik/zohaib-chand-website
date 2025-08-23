"use client";

import { companyName, getData, phoneNumber, dialPhone } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
  Wrench,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";
  const company = isWaterHeaterRoute ? "Home Appliance Fix UAE" : companyName;

  // Accent gradient per brand
  const accent =
    company === "Lg"
      ? "from-[#A50034] to-[#D64B73]"
      : company === "Samsung"
      ? "from-[#1428A0] to-[#0B1E7A]"
      : company === "Bosch"
      ? "from-[#E0211B] to-[#B91C1C]"
      : company === "Siemens"
      ? "from-[#00A0A6] to-[#0F766E]"
      : "from-orange-500 to-amber-600";

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Glow Accent */}
      <div
        className={`absolute inset-x-0 -top-24 h-48 bg-gradient-to-r ${accent} opacity-20 blur-3xl -z-10`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand / About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${accent} shadow-md`}
              >
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-extrabold text-xl text-white">
                {company}
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {company} is your trusted partner for fast, reliable, and
              professional home appliance repair across the UAE. Service you can
              depend on, every time.
            </p>

            <CallAndWhatsappButton company={company} />
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {getData(company).slice(0, 6).map((service, i) => (
                <li key={i}>
                  <Link
                    href={`/#${service.slug}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
                  >
                    <Wrench
                      size={14}
                      className="text-orange-400 group-hover:scale-110 transition"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/#about" },
                { title: "Services", href: "/#services" },
                { title: "Contact", href: "/#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="text-orange-400" size={18} />
              <span>{phoneNumber} (24/7)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="text-orange-400" size={18} />
              <span>Dubai, Abu Dhabi, Sharjah</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="text-orange-400" size={18} />
              <span>Emergency Service Available</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:bg-gradient-to-r ${accent} transition`}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Trust Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            {[
              { icon: Shield, text: "Certified Technicians" },
              { icon: Star, text: "5-Star Rated" },
              { icon: Clock, text: "Same Day Service" },
              { icon: Wrench, text: "Warranty Included" },
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1.5 text-gray-300 hover:bg-gray-700 transition"
              >
                <item.icon size={14} className="text-orange-400" />
                {item.text}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2024 {company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
