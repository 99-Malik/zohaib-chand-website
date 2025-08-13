"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { Phone, MessageCircle } from "lucide-react";

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  const getButtonStyles = (type) => {
    const baseStyles = "w-full group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg";
    
    if (type === 'call') {
      if (company === "Lg") {
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 hover:border-blue-700`;
      } else if (company === "Samsung") {
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 hover:border-blue-700`;
      } else if (company === "Bosch") {
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 hover:border-blue-700`;
      } else if (company === "Siemens") {
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 hover:border-blue-700`;
      } else {
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 hover:border-blue-700`;
      }
    } else { // whatsapp
      if (company === "Lg") {
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700`;
      } else if (company === "Samsung") {
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700`;
      } else if (company === "Bosch") {
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700`;
      } else if (company === "Siemens") {
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700`;
      } else {
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700`;
      }
    }
  };

  return (
    <div className={cn(className, "flex flex-col sm:flex-col items-stretch gap-2 sm:gap-3 w-full")}>
      {/* Call Us Button */}
      <button
        onClick={dialPhone}
        className={getButtonStyles('call')}
      >
        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
          <Phone size={14} className="sm:w-[18px] sm:h-[18px] text-white" />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-1">
          <span className="font-bold truncate text-xs sm:text-sm">Call Now</span>
          <span className="text-xs opacity-90 font-normal truncate hidden sm:block">24/7 Available</span>
        </div>
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0 hidden sm:block">
          <Phone size={14} className="text-white" />
        </div>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={sendMessage}
        className={getButtonStyles('whatsapp')}
      >
        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
          <MessageCircle size={14} className="sm:w-[18px] sm:h-[18px] text-white" />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-1">
          <span className="font-bold truncate text-xs sm:text-sm">WhatsApp</span>
          <span className="text-xs opacity-90 font-normal truncate hidden sm:block">Instant Reply</span>
        </div>
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0 hidden sm:block">
          <MessageCircle size={14} className="text-white" />
        </div>
      </button>
    </div>
  );
};

export default CallAndWhatsappButton;
