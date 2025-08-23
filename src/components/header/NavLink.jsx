"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLink = ({ title, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-fit font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2",
        className
      )}
    >
      <span className="relative z-10">{title}</span>
      {/* Gradient underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
