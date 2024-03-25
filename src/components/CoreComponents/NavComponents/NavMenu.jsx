import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

const NavMenu = () => {
  return (
    <>
      <Popover className="w-[50px] hidden md:block">
        <PopoverTrigger className="text-white">
          <p className="flex items-center gap-1">
            About Us <ChevronDown className="w-4 h-4" />
          </p>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px] hidden md:block">
          <ul className="   flex flex-col gap-2 poppins-medium ">
            <Link to="/sell#how-it-works">How it Works</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/sell#testimonials">Testimonials</Link>
            <Link to="/sell#FAQs">FAQs</Link>
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavMenu;
