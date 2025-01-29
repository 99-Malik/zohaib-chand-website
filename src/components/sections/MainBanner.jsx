"use client"
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { usePathname } from "next/navigation";

const MainBanner = ({ company = companyName }) => {
  const pathname = usePathname();

  // Dynamically set company name based on route
  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Water Heater" : company;

  return (
    <div className="flex items-center justify-center w-full bg-[url(/static/main-banner.jpg)] bg-cover bg-fixed bg-no-repeat bg-center min-h-[35rem] h-full">
      <div className="bg-black/75 text-white w-full h-full min-h-[35rem] flex items-center justify-center">
        <div className="flex flex-col uppercase text-center px-5 py-10">
          <h2 className="mb-3">
            Reliable <span className="text-primary">&</span> Affordable
          </h2>
          <h1 className="text-4xl uppercase">We Offer Repair Service across UAE. </h1>
          <h1 className="text-4xl font-bold">{dynamicCompany} repairs</h1>
          <CallAndWhatsappButton
            company={dynamicCompany}
            className="py-5 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
