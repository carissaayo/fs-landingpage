import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

const NavMenu = ({ sellLinkUrl, pathname }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover
        className="w-[50px] hidden md:block"
        onOpenChange={() => setOpen(!open)}
        open={open}
      >
        <PopoverTrigger className="text-white">
          <p className="flex items-center gap-1">
            About Us <ChevronDown className="w-4 h-4" />
          </p>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px] hidden md:block">
          <ul className="   flex flex-col gap-2 poppins-medium ">
            <Link
              to={`${
                pathname === sellLinkUrl
                  ? "/sell#how-it-works"
                  : "/#how-it-works"
              }`}
              onClick={() => setOpen(false)}
            >
              How it Works
            </Link>
            <Link to="/about-us" onClick={() => setOpen(false)}>
              About us
            </Link>
            <Link
              to={`${
                pathname === sellLinkUrl
                  ? "/sell#testimonials"
                  : "/#testimonials"
              }`}
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to={`${pathname === sellLinkUrl ? "/sell#FAQs" : "/#FAQs"}`}
              onClick={() => setOpen(false)}
            >
              FAQs
            </Link>
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavMenu;
