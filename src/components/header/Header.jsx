"use client";
import { companyName, dialPhone } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicCompany =
    pathname === "/companies/water-heater"
      ? "Home Appliance Fix UAE"
      : pathname === "/companies/ac"
      ? "Home Appliance Fix UAE"
      : pathname === "/companies/lg"
      ? "Gulf Service Center UAE"
      : pathname === "/companies/siemens"
      ? "Gulf Service Center UAE"
      : pathname === "/companies/samsung"
      ? "Gulf Service Center UAE"
      : companyName;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      
      {/* Main Header */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 md:space-x-3 group transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
                  {dynamicCompany}
                </span>
                {/* <span className="text-xs md:text-sm text-gray-500 font-medium hidden sm:block">
                  Professional Appliance Services
                </span> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              title="Home" 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            />
            <NavLink 
              title="About" 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink 
              title="Contact" 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={dialPhone}
              className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hover:bg-blue-700 text-sm md:text-base"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sidebar company={dynamicCompany} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
