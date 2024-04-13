import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

import ShowToaster from "../../components/CoreComponents/Core/ShowToaster";
import Loading from "../../components/CoreComponents/Core/Loading";
import SuccessDialog from "../../components/HomeComponents/SellComponents/SuccessDialog";

import axiosClient from "../../lib/axiosClient";

import { useDeviceDetailsStore } from "../../store/sell/deviceDetailsStore";
import { useLocationStore } from "../../store/sell/locationsStore";
import { useBankStore } from "../../store/sell/bankStore";
import { useCreateUserStore } from "../../store/auth/createUser";

const GagdetSummary = () => {
  const navigate = useNavigate();
  const user = useCreateUserStore((state) => state.user);
  const loading = useDeviceDetailsStore((state) => state.loading);
  const setLoading = useDeviceDetailsStore((state) => state.setLoading);
  const setSuccess = useDeviceDetailsStore((state) => state.setSuccess);

  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);
  const cities = useLocationStore((state) => state.cities);
  const userBankAccounts = useBankStore((state) => state.userBankAccounts);

  const sendSellRequest = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .post(`/sell`, phoneDetails, {
        headers: {
          refreshtoken: user.refreshtoken && user.refreshtoken,
          authorization: user.accessToken && `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);

        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);

  const { mutate: sendSellRequestFn } = useMutation({
    mutationFn: () => sendSellRequest(),
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    !phoneDetails.variantId && navigate("/sell");
    goToTop();
  }, []);
  return (
    <main className="w-full h-full poppins-regular text-[10px] md:text-[12px] pt-28 px-6 md:px-32 relative">
      {loading ? (
        <div className=" relative w-[100%] flex items-center justify-center bg-white rounded-sm min-h-[75vh] ">
          <Loading />
        </div>
      ) : (
        <>
          <SuccessDialog />
          <div className="w-full text-center md:text-left">
            <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
              Gadget{"'"}s Information
            </h1>
            <p className="mb-4 text-lg">
              Please check the provided inforamtion before proceeding
            </p>
          </div>

          {/* Gadget's Name */}
          <div className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Gadget{"'"}s Name</h1>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Brand{"'"}s Name <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {phoneDetails?.model?.brandId?.name}
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Model{"'"}s Name <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {phoneDetails?.model?.name}
                </div>
              </div>
            </div>
          </div>

          {/* Gadget Storage */}
          <div className="mb-4">
            <h1 className="poppins-medium text-lg mb-4"> Storage</h1>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Ram<span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100 uppercase">
                  {
                    phoneDetails?.model?.variants.filter(
                      (variant) => variant.id === phoneDetails.variantId
                    )[0].ram
                  }
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Internal memory <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100 uppercase">
                  {
                    phoneDetails?.model?.variants.filter(
                      (variant) => variant.id === phoneDetails.variantId
                    )[0].storage
                  }
                </div>
              </div>
            </div>
          </div>
          {/* Gadget's Conditions */}
          <section className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Phone Conditions</h1>

            <div className="  grid grid-cols-3 gap-4  ">
              {/* Phone Starting */}
              {phoneDetails?.phoneCondition?.phoneStarting !== undefined && (
                <div className="  mb-2">
                  {phoneDetails?.phoneCondition?.phoneStarting === true
                    ? "Can turn on/off"
                    : "Can't turn on/off"}
                </div>
              )}

              {/* makeAndReceiveCalls  */}
              {phoneDetails?.phoneCondition?.makeAndReceiveCalls !==
                undefined && (
                <div className="  mb-2">
                  {phoneDetails?.phoneCondition?.makeAndReceiveCalls === true
                    ? "Can make calls"
                    : "Can't  make calls"}
                </div>
              )}

              {/* faultyVolumeButtons  */}
              {phoneDetails?.phoneCondition?.faultyVolumeButtons === true && (
                <div className="  mb-2">Volume buttons not working</div>
              )}

              {/* faultyFingerPrint  */}
              {phoneDetails?.phoneCondition?.faultyFingerPrint === true && (
                <div className="  mb-2">Fingerprint scanner not working</div>
              )}

              {/* missingSimCardTray  */}
              {phoneDetails?.phoneCondition?.missingSimCardTray === true && (
                <div className="  mb-2">Simcard tray missing</div>
              )}

              {/* faultySpeakers  */}
              {phoneDetails?.phoneCondition?.faultySpeakers === true && (
                <div className="  mb-2">Speaker not working</div>
              )}

              {/* faultyEarpiece  */}
              {phoneDetails?.phoneCondition?.faultyEarpiece === true && (
                <div className="  mb-2">Earpiece not working</div>
              )}

              {/* faultyPowerButton  */}
              {phoneDetails?.phoneCondition?.faultyPowerButton === true && (
                <div className="  mb-2">Power button not working</div>
              )}

              {/* faultyChargingPort  */}
              {phoneDetails?.phoneCondition?.faultyChargingPort === true && (
                <div className="  mb-2">Charging port not working</div>
              )}
              {/* faultyBackCamera  */}
              {phoneDetails?.phoneCondition?.faultyBackCamera === true && (
                <div className="  mb-2">Main camera not working</div>
              )}

              {/* faultyFrontCamera  */}
              {phoneDetails?.phoneCondition?.faultyFrontCamera === true && (
                <div className="  mb-2">Selfie camera not working</div>
              )}

              {/* scratchedScreen  */}
              {phoneDetails?.phoneCondition?.scratchedScreen === true && (
                <div className="  mb-2">Screen is scratched</div>
              )}

              {/* spottedScreen */}
              {phoneDetails?.phoneCondition?.spottedScreen === true && (
                <div className="  mb-2">Screen has spots or lines</div>
              )}

              {/* brokenScreen  */}
              {phoneDetails?.phoneCondition?.brokenScreen === true && (
                <div className="  mb-2">Screen is broken</div>
              )}

              {/* brokenCameraGlass  */}
              {phoneDetails?.phoneCondition?.brokenCameraGlass === true && (
                <div className="  mb-2">Camera glass broken</div>
              )}

              {/* damagedBackCoverGlass */}
              {phoneDetails?.phoneCondition?.damagedBackCoverGlass === true && (
                <div className="  mb-2">
                  Back cover/glass broken or scratched
                </div>
              )}

              {/* brokenPhoneBody  */}
              {phoneDetails?.phoneCondition?.brokenPhoneBody === true && (
                <div className="  mb-2">Phone{"'"}s body dented/broken</div>
              )}

              {/* scratchedPhoneBody */}
              {phoneDetails?.phoneCondition?.scratchedPhoneBody === true && (
                <div className="  mb-2">Phone{"'"}s body is scratched</div>
              )}
            </div>
          </section>

          {/* Gadget's Accessories */}

          <section className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Phone Accessories</h1>

            <div className="  grid grid-cols-3 gap-4  ">
              {/* originalCharger  */}
              {phoneDetails?.phoneCondition?.originalCharger === true && (
                <div className="  mb-2">
                  Original charger plug of device present
                </div>
              )}

              {/* originalChargerCable  */}
              {phoneDetails?.phoneCondition?.originalChargerCable === true && (
                <div className="  mb-2">
                  {" "}
                  Original charger cable of device present
                </div>
              )}

              {/*  receipt  */}
              {phoneDetails?.phoneCondition?.receipt === true && (
                <div className="  mb-2">receipt with the same IMEI present</div>
              )}

              {/* originalBox  */}
              {phoneDetails?.phoneCondition?.originalBox === true && (
                <div className="  mb-2">Original Box present</div>
              )}

              {/* brandWarranty */}
              {phoneDetails?.phoneCondition?.brandWarranty === true && (
                <div className="  mb-2">Phone under brand warranty</div>
              )}
            </div>
          </section>
          {/* Delivery Details */}
          <div className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Location </h1>

            <div className="grid grid-cols-2 gap-8">
              {/* State */}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  State <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {
                    cities?.filter(
                      (city) => city._id === phoneDetails?.cityId
                    )[0]?.stateId?.name
                  }
                </div>
              </div>

              {/*  City */}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  City<span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {
                    cities?.filter(
                      (city) => city._id === phoneDetails?.cityId
                    )[0]?.name
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Customer Account Details */}
          <div className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Account Details</h1>

            <div className="grid grid-cols-2 gap-8">
              {/* Account Name */}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Account Name <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {
                    userBankAccounts?.filter(
                      (bank) => bank._id === phoneDetails?.bankId
                    )[0]?.accountBearerName
                  }
                </div>
              </div>

              {/* Account Number*/}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Account Number<span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {
                    userBankAccounts?.filter(
                      (bank) => bank._id === phoneDetails?.bankId
                    )[0]?.accountNumber
                  }{" "}
                  (
                  {
                    userBankAccounts?.filter(
                      (bank) => bank._id === phoneDetails?.bankId
                    )[0]?.bank
                  }
                  )
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end items-center  gap-6 mt-12 mb-10 md:pr-16">
            <Link
              to="/sell"
              className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center"
            >
              Edit
            </Link>
            <Button
              // to="/sell/gadget-summary"
              onClick={() => sendSellRequestFn()}
              className="w-28  text-white bg-[#0C0F4D] text-base rounded-2xl h-[50px] flex items-center justify-center"
            >
              Next
            </Button>
          </div>
        </>
      )}

      <ShowToaster />
    </main>
  );
};

export default GagdetSummary;
