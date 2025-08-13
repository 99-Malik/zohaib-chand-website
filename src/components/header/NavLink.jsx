import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLink = ({ title, href, className }) => {
  return (
    <Link 
      className={cn(
        "group relative w-fit font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2",
        className
      )} 
      href={href}
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 ease-out group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
