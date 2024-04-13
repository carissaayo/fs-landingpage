import { useState } from "react";
import { X } from "lucide-react";
import { Drawer } from "@mui/material";

import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

import phoneImg from "../../assets/images/gadget.png";
import { useBrandsAndModelsStore } from "../../store/sell/brandsAndModelsStore";
import GadgetConditons from "./GadgetConditons";
import { useNavigate } from "react-router-dom";

const SoldRow = ({ transaction }) => {
  const navigate = useNavigate();
  const [openDetails, setOpenDetails] = useState(false);
  const models = useBrandsAndModelsStore((state) => state.models);

  const handleEditSale = () => {
    navigate("/sell/edit-sale", { state: { transaction } });
  };

  return (
    <TableRow>
      <TableCell className="">
        <div className="flex items-center gap-2">
          {transaction?.procurementImages?.frontImage[0] ? (
            <img
              src={transaction?.procurementImages?.frontImage[0]}
              alt=""
              className="w-[100px]"
            />
          ) : (
            <img src={phoneImg} alt="" className="w-[100px]" />
          )}
          <p className="poppins-medium">
            {transaction?.procurementGadgetNameAndModel ||
              models.filter(
                (model) => model._id === transaction?.phoneModelId
              )[0]?.name}
          </p>
        </div>
      </TableCell>
      <TableCell>{transaction?.createdAt.substr(0, 10)}</TableCell>
      <TableCell>₦301,490</TableCell>
      <TableCell className="">
        {transaction?.procured === true ? (
          <span className="text-green-500"> Completed</span>
        ) : (
          <span className="text-yellow-500"> Pending</span>
        )}
      </TableCell>
      <TableCell className="">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#C8C8C8] rounded-xl"
            onClick={handleEditSale}
          >
            {" "}
            Edit
          </Button>
          <Button
            variant="outline"
            className="border-[#C8C8C8] rounded-xl"
            onClick={() => setOpenDetails(true)}
          >
            {" "}
            Details
          </Button>
        </div>

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
                {transaction?.procurementGadgetNameAndModel ||
                  models.filter(
                    (model) => model._id === transaction?.phoneModelId
                  )[0]?.name}
              </h1>
              <p className="">View smartphone details below</p>
            </div>

            <div className="">
              {transaction?.procurementImages?.frontImage[0] ? (
                <img
                  src={transaction?.procurementImages?.frontImage[0]}
                  alt=""
                  className="max-w-[300px]"
                />
              ) : (
                <img src={phoneImg} alt="" className="max-w-[300px]" />
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Smartphone Brand</p>
                <p className="">
                  {transaction?.procurementGadgetNameAndModel ||
                    models.filter(
                      (model) => model._id === transaction?.phoneModelId
                    )[0]?.brandId.name}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Smartphone Model </p>
                <p className="">
                  {transaction?.procurementGadgetNameAndModel ||
                    models.filter(
                      (model) => model._id === transaction?.phoneModelId
                    )[0]?.name}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">RAM </p>
                <p className="uppercase">
                  {transaction?.refGadgetDescription.substr(0, 3)}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Storage </p>
                <p className="uppercase">
                  {transaction?.refGadgetDescription.substr(4, 9)}
                </p>
              </div>
              {/* <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Procured</p>
                <p className="">{transaction?.procured ? "Yes" : "No"}</p>
              </div> */}
              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">Status</p>
                <p className="text-orange-500">
                  {transaction?.procurementInitiated === true &&
                    transaction?.procurementApprovedInitiated === false && (
                      <span className="text-yellow-500">Awaiting Approval</span>
                    )}
                  {transaction?.procurementInitiated === true &&
                    transaction?.procurementApprovedInitiated === true && (
                      <span className="text-blue-500">Ongoing</span>
                    )}
                  {transaction?.procured === true && (
                    <span className="text-green-500"> Completed</span>
                  )}

                  {transaction?.procurementInitiated === false && (
                    <span className="">Awaiting Initiation</span>
                  )}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">State</p>
                <p className="">{transaction?.refGadgetState}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#8B8B8B]">City</p>
                <p className="">{transaction?.refGadgetCity}</p>
              </div>
              <div className="">
                <p className="text-[#8B8B8B]">Phone Conditions</p>

                <GadgetConditons phoneCondition={transaction?.phoneCondition} />
              </div>
            </div>
          </div>
        </Drawer>
      </TableCell>
    </TableRow>
  );
};

export default SoldRow;
