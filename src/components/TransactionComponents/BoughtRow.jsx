import { useState } from "react";
import { X } from "lucide-react";
import { Drawer } from "@mui/material";

import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

import phoneImg from "../../assets/images/gadget.png";

const BoughtRow = () => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <TableRow className="w-full">
      <TableCell className="">
        <div className="flex items-center gap-2">
          <img src={phoneImg} alt="" className="w-[100px]" />
          <p className="poppins-medium">Redmi Note 9s</p>
        </div>
      </TableCell>
      <TableCell>01 March 2024</TableCell>
      <TableCell>₦301,490</TableCell>
      <TableCell className="text-green-600">Completed</TableCell>
      <TableCell className="">
        <Button
          variant="outline"
          className="border-[#C8C8C8] rounded-xl"
          onClick={() => setOpenDetails(true)}
        >
          {" "}
          Details
        </Button>

        <Drawer
          open={openDetails}
          onClose={() => setOpenDetails(false)}
          anchor="right"
          className=" .MuiDrawer-modal"
        >
          <div className="min-w-[80vw] xs:min-w-[70vw] sm:min-w-[40vw] pt-4 flex flex-col gap-4  text-base text-[#202020] poppins-meidum px-12">
            <div
              className=" flex justify-end hover:cursor-pointer"
              onClick={() => setOpenDetails(false)}
            >
              <X className="w-6 h-6" />
            </div>

            <div className="mb-4">
              <h1 className="poppins-semibold  text-2xl mb-2">
                Iphone xr 16gb
              </h1>
              <p className="">View smartphone details below</p>
            </div>

            <div className="">
              <img src={phoneImg} alt="" className="w-[300px]" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Smartphone Brand</p>
                <p className="">Apple</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Smartphone Model </p>
                <p className="">Iphone XR</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">RAM </p>
                <p className="">16GB</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Storage </p>
                <p className="">64GB</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Fault Condition</p>
                <p className="">None</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Screen Condition</p>
                <p className="">Broken</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Device Type</p>
                <p className="">Used</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">
                  How long have you been using this device?
                </p>
                <p className="">2-3 Months</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Location</p>
                <p className="">Kwara</p>
              </div>
            </div>
          </div>
        </Drawer>
      </TableCell>
    </TableRow>
  );
};

export default BoughtRow;
