"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, getData, dialPhone, sendMessage } from "@/libs/data";
import {
  Menu,
  ChevronDown,
  Home,
  Info,
  Wrench,
  Phone,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet>
        {/* Modern Trigger */}
        <SheetTrigger asChild>
          <button className="p-2 rounded-xl bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 hover:shadow-md transition">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </SheetTrigger>

        {/* Sliding Panel */}
        <SheetContent
          side="right"
          className="w-80 sm:w-96 bg-white/95 backdrop-blur-md border-l border-gray-200 shadow-xl flex flex-col"
        >
          {/* Header */}
          <SheetHeader className="border-b border-gray-100 pb-4">
            <SheetTitle className="text-xl font-bold text-gray-900">
              {company}
            </SheetTitle>
            <SheetDescription className="text-sm text-gray-500">
              Premium Appliance Repair Services
            </SheetDescription>
          </SheetHeader>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-6 space-y-1">
            {/* Home */}
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>
            </SheetClose>

            {/* About */}
            <SheetClose asChild>
              <Link
                href="/#about"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition"
              >
                <Info className="w-5 h-5" />
                <span className="font-medium">About</span>
              </Link>
            </SheetClose>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5" />
                  <span className="font-medium">Services</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    servicesDropdown ? "rotate-180" : ""
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  servicesDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="ml-9 mt-2 space-y-1">
                  {getData().map((service, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={`/#${service.slug}`}
                        className="block px-3 py-2 text-sm rounded-md text-gray-600 hover:text-orange-700 hover:bg-orange-50 transition"
                      >
                        {service.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <SheetClose asChild>
              <Link
                href="/#contact"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Contact</span>
              </Link>
            </SheetClose>
          </div>

          {/* CTA Buttons */}
          <div className="border-t border-gray-200 p-4 bg-white/70 backdrop-blur-sm rounded-b-xl">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">Need immediate help?</p>
              <div className="flex gap-2">
                <button
                  onClick={dialPhone}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
                >
                  <Phone size={14} /> Call Now
                </button>
                <button
                  onClick={sendMessage}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition"
                >
                  <MessageCircle size={14} /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
