"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { Phone, MessageCircle } from "lucide-react";

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  const baseStyles =
    "flex-1 group flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md";

  return (
    <div
      className={cn(
        className,
        "flex flex-row items-stretch gap-2 sm:gap-3 w-full"
      )}
    >
      {/* Call Us Button - Black */}
      <button
        onClick={dialPhone}
        className={`${baseStyles} bg-[#2563EB] text-white`}
      >
        <Phone size={14} className="sm:w-[16px] sm:h-[16px]" />
        <span>Call Now</span>
      </button>

      {/* WhatsApp Button - Orange */}
      <button
        onClick={sendMessage}
        className={`${baseStyles} bg-orange-500 hover:bg-orange-600 text-white`}
      >
        <MessageCircle size={14} className="sm:w-[16px] sm:h-[16px]" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};

export default CallAndWhatsappButton;
