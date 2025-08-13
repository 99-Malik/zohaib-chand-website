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

import { companyName, getData } from "@/libs/data";
import { Menu, X, ChevronDown, Home, Info, Wrench, Phone } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 sm:w-96 bg-white border-l border-gray-200">
          <SheetHeader className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold text-gray-900">
                {company}
              </SheetTitle>
            
            </div>
            <SheetDescription className="text-sm text-gray-600 mt-2">
              Professional Appliance Services
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col py-6 space-y-2">
            {/* Home */}
            <SheetClose asChild>
              <Link 
                href="/" 
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group"
              >
                <Home className="w-5 h-5 group-hover:text-blue-600" />
                <span className="font-medium">Home</span>
              </Link>
            </SheetClose>

            {/* About */}
            <SheetClose asChild>
              <Link 
                href="/#about" 
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group"
              >
                <Info className="w-5 h-5 group-hover:text-blue-600" />
                <span className="font-medium">About</span>
              </Link>
            </SheetClose>

            {/* Services Dropdown */}
            <div className="space-y-1">
              <button 
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 group-hover:text-blue-600" />
                  <span className="font-medium">Services</span>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesDropdown ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                servicesDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="ml-8 space-y-1">
                  {getData().map((service, index) => (
                    <SheetClose asChild key={index}>
                      <Link 
                        href={`/#${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200"
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
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-600" />
                <span className="font-medium">Contact</span>
              </Link>
            </SheetClose>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Need immediate help?</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                  Call Now
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                  WhatsApp
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
