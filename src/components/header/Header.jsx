"use client";
import { companyName, dialPhone } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname } from "next/navigation";
import { Phone, Mail, ShieldCheck, Headphones } from "lucide-react";

const BRAND = {
   default: {
    name: "Gulf Service Center UAE",
    hairline: "from-[#2563EB] to-[#1D4ED8]", // appliance-trust blue
    btnSolid: "bg-[#2563EB] hover:bg-[#1D4ED8]", // blue solid
    btnGhost:
      "border border-[#2563EB]/30 hover:border-[#2563EB] hover:bg-[#2563EB]/5",
    chip: "from-[#2563EB] to-[#1D4ED8]",
  },
  lg: {
    name: "Gulf Service Center UAE",
    hairline: "from-[#A50034] to-[#D64B73]",
    btnSolid: "bg-[#A50034] hover:bg-[#8A002B]",
    btnGhost: "border border-[#A50034]/30 hover:border-[#A50034] hover:bg-[#A50034]/5",
    chip: "from-[#D64B73] to-[#A50034]",
  },
  samsung: {
    name: "Gulf Service Center UAE",
    hairline: "from-[#1428A0] to-[#0B1E7A]",
    btnSolid: "bg-[#1428A0] hover:bg-[#0B1E7A]",
    btnGhost: "border border-[#1428A0]/30 hover:border-[#1428A0] hover:bg-[#1428A0]/5",
    chip: "from-[#1E3AB8] to-[#1428A0]",
  },
  bosch: {
    name: "Gulf Service Center UAE",
    hairline: "from-[#E0211B] to-[#B91C1C]",
    btnSolid: "bg-[#E0211B] hover:bg-[#B91C1C]",
    btnGhost: "border border-[#E0211B]/30 hover:border-[#E0211B] hover:bg-[#E0211B]/5",
    chip: "from-[#F25B55] to-[#E0211B]",
  },
  siemens: {
    name: "Gulf Service Center UAE",
    hairline: "from-[#00A0A6] to-[#0F766E]",
    btnSolid: "bg-[#00A0A6] hover:bg-[#0F6C71]",
    btnGhost: "border border-[#00A0A6]/30 hover:border-[#00A0A6] hover:bg-[#00A0A6]/5",
    chip: "from-[#3EC8CD] to-[#00A0A6]",
  },
  ac: {
    name: "Home Appliance Fix UAE",
    hairline: "from-[#0EA5E9] to-[#0369A1]",
    btnSolid: "bg-[#0EA5E9] hover:bg-[#0284C7]",
    btnGhost: "border border-[#0EA5E9]/30 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5",
    chip: "from-[#67E8F9] to-[#0EA5E9]",
  },
  waterHeater: {
    name: "Home Appliance Fix UAE",
    hairline: "from-[#F59E0B] to-[#B45309]",
    btnSolid: "bg-[#F59E0B] hover:bg-[#D97706]",
    btnGhost: "border border-[#F59E0B]/30 hover:border-[#F59E0B] hover:bg-[#F59E0B]/5",
    chip: "from-[#FDE68A] to-[#F59E0B]",
  },
};

export default function Header({ company = companyName }) {
  const pathname = usePathname();

  const key =
    pathname?.startsWith("/companies/lg") ? "lg" :
    pathname?.startsWith("/companies/samsung") ? "samsung" :
    pathname?.startsWith("/companies/bosch") ? "bosch" :
    pathname?.startsWith("/companies/siemens") ? "siemens" :
    pathname === "/companies/ac" ? "ac" :
    pathname === "/companies/water-heater" ? "waterHeater" :
    "default";

  const brand = BRAND[key];
  const dynamicCompany = brand.name || company || companyName;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Gradient line */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${brand.hairline}`} />

      {/* Utility strip */}
      <div className="hidden md:block border-b border-gray-100 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-700">
              <Headphones size={14} className="text-emerald-500" /> 24/7 Support
            </span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <ShieldCheck size={14} className="text-blue-500" /> Licensed &amp; Insured
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@gulfservicecenter.ae"
              className="flex items-center gap-1.5 hover:text-gray-900 transition"
            >
              <Mail size={14} /> info@gulfservicecenter.ae
            </a>
            <button
              onClick={dialPhone}
              className="flex items-center gap-1.5 font-medium hover:text-gray-900 transition"
            >
              <Phone size={14} /> +971-50-000-0000
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <Link href="/" aria-label={dynamicCompany} className="flex items-center gap-3">
            <span className="relative h-11 w-11 flex items-center justify-center rounded-xl text-white font-bold bg-gradient-to-b shadow-sm">
              <span className={`absolute inset-0 rounded-xl bg-[#F97316] ${brand.chip}`} />
              <span className="relative z-10">GS</span>
            </span>
            <div className="leading-tight">
              <div className="text-[15px] md:text-xl font-semibold text-gray-900">{dynamicCompany}</div>
              <div className="text-[11px] md:text-sm text-gray-500">Professional Appliance Services</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink
              title="Home"
              href="/"
              className={`relative pb-1 text-sm font-medium ${
                isActive("/") ? "text-gray-900 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-current" : "text-gray-700"
              } hover:text-gray-900 transition`}
            />
            <NavLink
              title="About"
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink
              title="Contact"
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            />
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={dialPhone}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition ${brand.btnSolid}`}
            >
              <Phone size={16} /> Call Now
            </button>
            <Link
              href="#contact"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-900 bg-white ${brand.btnGhost}`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sidebar company={dynamicCompany} />
          </div>
        </div>
      </div>
    </header>
  );
}
