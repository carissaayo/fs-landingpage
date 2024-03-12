import { CircleUserRoundIcon, LogOut } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

const LoggedInNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="">
          <p className="text-[#0C0F4D] bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center">
            MS
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-[220px] flex flex-col justify-center items-center gap-4 py-4">
        <DropdownMenuItem className="text-base hover:bg-none">
          <div className="flex flex-col gap-4  items-center">
            <CircleUserRoundIcon className="w-8 h-8" />
            <p className="">Mustapha Sanusi</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          {" "}
          <p className="">My Transactions</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          {" "}
          <div className="flex  gap-1 justify-center items-center">
            <LogOut className="w-6 h-6" />
            <p className="">Sign Out</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedInNav;
