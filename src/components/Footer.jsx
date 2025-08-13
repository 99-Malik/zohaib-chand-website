"use client";
import { companyName, getData, phoneNumber, dialPhone, sendMessage } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Wrench,
  Shield,
  Star,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const isWaterHeaterRoute = pathname === "/companies/water-heater";
  const company = isWaterHeaterRoute ? "Home Appliance Fix UAE" : companyName;

  const getBgColor = () => {
    if (company === "Lg") return "bg-gray-50";
    if (company === "Samsung") return "bg-samsungSecondary";
    if (company === "Bosch") return "bg-gray-50";
    if (company === "Siemens") return "bg-siemensSecondary";
    return "bg-gray-900";
  };

  const getTextColor = () => {
    if (company === "Lg" || company === "Bosch") return "text-gray-900";
    if (company === "Samsung" || company === "Siemens") return "text-black";
    return "text-white";
  };

  const getBorderColor = () => {
    if (company === "Lg" || company === "Bosch") return "border-gray-200";
    if (company === "Samsung" || company === "Siemens") return "border-gray-300";
    return "border-gray-700";
  };

  return (
    <footer className={cn("w-full", getBgColor())}>
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Company Info & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Company Logo/Name */}
              <div className="mb-6">
                {company === "Siemens" ? (
                  <Link href="/companies/siemens" className="inline-block">
                    <Image
                      src="/static/siemens.svg"
                      width={150}
                      height={50}
                      alt="Siemens"
                      className="h-12 w-auto"
                    />
                  </Link>
                ) : company === "Bosch" ? (
                  <Link href="/companies/bosch" className="inline-block">
                    <Image 
                      src="/static/bosch.svg" 
                      width={150} 
                      height={50} 
                      alt="Bosch" 
                      className="h-12 w-auto"
                    />
                  </Link>
                ) : company === "Samsung" ? (
                  <Link href="/companies/samsung" className="inline-block">
                    <Image
                      src="/static/samsung.svg"
                      width={120}
                      height={50}
                      alt="Samsung"
                      className="h-12 w-auto"
                    />
                  </Link>
                ) : company === "Lg" ? (
                  <Link href="/companies/lg" className="inline-block">
                    <Image 
                      src="/static/lg.svg" 
                      width={100} 
                      height={50} 
                      alt="LG" 
                      className="h-12 w-auto"
                    />
                  </Link>
                ) : (
                  <Link href="/" className="inline-block">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{company}</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* Company Description */}
              <p className={cn("text-sm leading-relaxed mb-6 max-w-md", getTextColor())}>
                Welcome to {company}, your most trusted partner in home appliance repair! 
                With years of experience, we specialize in providing reliable and efficient 
                repair services for a wide range of household appliances.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <CallAndWhatsappButton company={company} />
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <span className={cn("text-sm font-medium", getTextColor())}>Follow us:</span>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" }
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                        company === "Lg" || company === "Bosch" 
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
                          : company === "Samsung" || company === "Siemens"
                          ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
                          : "bg-gray-700 text-white hover:bg-blue-600"
                      )}
                    >
                      <social.icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={cn("text-lg font-bold mb-4", getTextColor())}>
                Our Services
              </h3>
              <div className="space-y-2">
                {getData(company).slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    href={`/#${service.slug}`}
                    className={cn(
                      "block text-sm transition-all duration-300 hover:translate-x-1",
                      company === "Lg" || company === "Bosch"
                        ? "text-gray-600 hover:text-gray-900"
                        : company === "Samsung" || company === "Siemens"
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Wrench size={14} className="text-blue-500" />
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={cn("text-lg font-bold mb-4", getTextColor())}>
                Quick Links
              </h3>
              <div className="space-y-2">
                {[
                  { title: "Home", href: "/" },
                  { title: "About Us", href: "/#about" },
                  { title: "Services", href: "/#services" },
                  { title: "Contact", href: "/#contact" },
                  { title: "Get Quote", action: dialPhone, isAction: true },
                  { title: "Emergency Service", action: dialPhone, isAction: true }
                ].map((link, index) => (
                  link.isAction ? (
                    <button
                      key={index}
                      onClick={link.action}
                      className={cn(
                        "block text-sm transition-all duration-300 hover:translate-x-1 w-full text-left",
                        company === "Lg" || company === "Bosch"
                          ? "text-gray-600 hover:text-gray-900"
                          : company === "Samsung" || company === "Siemens"
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <ArrowRight size={14} className="text-blue-500" />
                        {link.title}
                      </div>
                    </button>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "block text-sm transition-all duration-300 hover:translate-x-1",
                        company === "Lg" || company === "Bosch"
                          ? "text-gray-600 hover:text-gray-900"
                          : company === "Samsung" || company === "Siemens"
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <ArrowRight size={14} className="text-blue-500" />
                        {link.title}
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle Section - Contact Info & Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Contact Info */}
            <div className={cn("p-4 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-300", getBorderColor())} onClick={dialPhone}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className={cn("font-semibold", getTextColor())}>Call Us</h4>
                  <p className={cn("text-sm", getTextColor())}>24/7 Available</p>
                </div>
              </div>
              <p className={cn("text-sm", getTextColor())}>{phoneNumber}</p>
            </div>

            {/* Location */}
            <div className={cn("p-4 rounded-lg border", getBorderColor())}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className={cn("font-semibold", getTextColor())}>Location</h4>
                  <p className={cn("text-sm", getTextColor())}>UAE Wide Service</p>
                </div>
              </div>
              <p className={cn("text-sm", getTextColor())}>Dubai, Abu Dhabi, Sharjah</p>
            </div>

            {/* Working Hours */}
            <div className={cn("p-4 rounded-lg border", getBorderColor())}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className={cn("font-semibold", getTextColor())}>Working Hours</h4>
                  <p className={cn("text-sm", getTextColor())}>Emergency Service</p>
                </div>
              </div>
              <p className={cn("text-sm", getTextColor())}>24/7 Emergency Available</p>
            </div>
          </motion.div>

          {/* Bottom Section - Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center py-6 border-t border-gray-200"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              {[
                { icon: Shield, text: "Certified Technicians", color: "text-green-600" },
                { icon: Star, text: "5-Star Rated", color: "text-yellow-600" },
                { icon: Clock, text: "Same Day Service", color: "text-blue-600" },
                { icon: Wrench, text: "Warranty Included", color: "text-purple-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon size={20} className={item.color} />
                  <span className={cn("text-sm font-medium", getTextColor())}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={cn("border-t py-4", getBorderColor())}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={cn("text-sm", getTextColor())}>
              © 2024 {company}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className={cn("hover:underline transition-all duration-300", getTextColor())}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className={cn("hover:underline transition-all duration-300", getTextColor())}
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className={cn("hover:underline transition-all duration-300", getTextColor())}
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
