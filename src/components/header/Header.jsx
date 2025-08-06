"use client";
import { companyName } from "@/libs/data";
import Link from "next/link";
import Topbar from "./Topbar";
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
      : pathname==="/companies/lg"
      ? "Home Appliances Fix UAE"
      : pathname==="/companies/bosch"
      ? "Home Appliances Fix UAE"
      : pathname==="/companies/siemens"
      ? "Home Appliances Fix UAE"
      : pathname==="/companies/samsung"
     

  return (
    <header className="flex flex-col w-full items-center justify-center border-b border-black/5">
      <Topbar company={dynamicCompany} />
      <div className="flex w-full justify-between px-5 py-4 max-w-7xl items-center gap-5">
        {/* {dynamicCompany === "Siemens" ? (
          <Link href="/companies/siemens">
            <Image src="/static/siemens.svg" width={150} height={50} alt="Siemens" />
          </Link>
        ) : dynamicCompany === "Bosch" ? (
          <Link href="/companies/bosch">
            <Image src="/static/bosch.svg" width={150} height={50} alt="Bosch" />
          </Link>
        ) : dynamicCompany === "Samsung" ? (
          <Link href="/companies/samsung">
            <Image src="/static/samsung.svg" width={120} height={50} alt="Samsung" />
          </Link>
        ) : dynamicCompany === "Lg" ? (
          <Link href="/companies/lg">
            <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
          </Link>
        ) : dynamicCompany === "Home Appliance Fix UAE" && pathname === "/companies/water-heater" ? (
          <Link href="/companies/water-heater" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        ) : dynamicCompany === "Home Appliance Fix UAE" && pathname === "/companies/ac" ? (
          <Link href="/companies/ac" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        ) : ( */}
          <Link href="/" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
      

        <Sidebar company={dynamicCompany} />

        <div className="items-center hidden md:flex gap-4">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown company={dynamicCompany} />
          <NavLink title="Contact" href="#contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
