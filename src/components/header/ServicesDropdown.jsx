"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { companyName, getData } from "@/libs/data";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const ServicesDropdown = ({ company = companyName }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group relative w-fit font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2 flex items-center gap-1">
        <span>Services</span>
        <ChevronDown
          size={16}
          className="transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out group-hover:w-full"></span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 p-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg">
        {getData(company).map((service) => (
          <DropdownMenuItem
            key={service.slug}
            className="rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
          >
            <Link
              href={`#${service.slug}`}
              className="w-full px-3 py-2 font-medium text-gray-700"
            >
              {service.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
