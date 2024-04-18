import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useUpdateSaleStore } from "../../store/sell/updateSaleStore";

const GagdetSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [goUp, setGoUp] = useState(false);
  const fromEditPage = location?.state?.transaction?._id ? true : false;
  const user = useCreateUserStore((state) => state.user);
  const loading = useDeviceDetailsStore((state) => state.loading);
  const setLoading = useDeviceDetailsStore((state) => state.setLoading);
  const setSuccess = useDeviceDetailsStore((state) => state.setSuccess);

  const phoneDetails = useDeviceDetailsStore((state) => state.phoneDetails);

  const editPhoneDetails = useUpdateSaleStore((state) => state.phoneDetails);
  const cities = useLocationStore((state) => state.cities);
  const userBankAccounts = useBankStore((state) => state.userBankAccounts);
  const currentTransaction = useUpdateSaleStore(
    (state) => state.currentTransaction
  );
  console.log(currentTransaction._id);
  const sendSellRequest = useCallback(async () => {
    setLoading(true);
    setGoUp(true);
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

        toast.error("something went wrong", { id: "sendSaleError" });
      });
  }, []);
  const updateSellRequest = useCallback(async () => {
    setLoading(true);

    setGoUp(true);

    await axiosClient
      .put(
        `/sell/${currentTransaction._id}`,
        {
          modelId: editPhoneDetails?.modelId,
          variantId: editPhoneDetails?.variantId,
          cityId: editPhoneDetails?.cityId,
          bankId: editPhoneDetails?.bankId,
          phoneCondition: currentTransaction?.phoneCondition[0],
        },
        {
          headers: {
            refreshtoken: user?.refreshtoken && user.refreshtoken,
            authorization: user?.accessToken && `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);

        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.response.data.message, { id: "updateSellError" });
      });
  }, []);

  const { mutate: sendSellRequestFn } = useMutation({
    mutationFn: () => sendSellRequest(),
  });
  const { mutate: updateSellRequestFn } = useMutation({
    mutationFn: () => updateSellRequest(),
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    !fromEditPage && !phoneDetails?.variantId && navigate("/sell");
  }, []);
  useEffect(() => {
    fromEditPage && !currentTransaction?._id && navigate("/transactions");
  }, []);
  useEffect(() => {
    goToTop();
  }, [goUp]);

  return (
    <main className="w-full h-full poppins-regular text-[10px] md:text-[12px] pt-28 px-6 md:px-32 relative">
      {loading ? (
        <div className=" relative w-[100%] flex items-center justify-center bg-white rounded-sm min-h-[75vh] ">
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-[80%] md:w-full">
            <SuccessDialog fromEditPage={fromEditPage} />
          </div>
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
                  {fromEditPage
                    ? editPhoneDetails?.model?.brandId?.name
                    : phoneDetails?.model?.brandId?.name}
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Model{"'"}s Name <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {phoneDetails?.model?.name}
                  {fromEditPage
                    ? editPhoneDetails?.model?.name
                    : phoneDetails?.model?.name}
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
                  {fromEditPage
                    ? editPhoneDetails?.model?.variants?.filter(
                        (variant) => variant.id === editPhoneDetails.variantId
                      )[0].ram
                    : phoneDetails?.model?.variants?.filter(
                        (variant) => variant.id === phoneDetails.variantId
                      )[0].ram}
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Internal memory <span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100 uppercase">
                  {fromEditPage
                    ? editPhoneDetails?.model?.variants?.filter(
                        (variant) => variant.id === editPhoneDetails.variantId
                      )[0].storage
                    : phoneDetails?.model?.variants?.filter(
                        (variant) => variant.id === phoneDetails.variantId
                      )[0].storage}
                </div>
              </div>
            </div>
          </div>
          {/* Gadget's Conditions */}
          <section className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Phone Conditions</h1>

            <div className="  grid grid-cols-3 lg:grid-cols-4 gap-4  ">
              {/* Phone Starting */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.phoneStarting !==
                    undefined && (
                    <div className="  mb-2">
                      {phoneDetails?.phoneCondition?.phoneStarting === true
                        ? "Can turn on/off"
                        : "Can't turn on/off"}
                    </div>
                  )
                : phoneDetails?.phoneCondition?.phoneStarting !== undefined && (
                    <div className="  mb-2">
                      {phoneDetails?.phoneCondition?.phoneStarting === true
                        ? "Can turn on/off"
                        : "Can't turn on/off"}
                    </div>
                  )}

              {/* makeAndReceiveCalls  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.makeAndReceiveCalls !==
                    undefined && (
                    <div className="  mb-2">
                      {phoneDetails?.phoneCondition?.makeAndReceiveCalls ===
                      true
                        ? "Can make calls"
                        : "Can't  make calls"}
                    </div>
                  )
                : phoneDetails?.phoneCondition?.makeAndReceiveCalls !==
                    undefined && (
                    <div className="  mb-2">
                      {phoneDetails?.phoneCondition?.makeAndReceiveCalls ===
                      true
                        ? "Can make calls"
                        : "Can't  make calls"}
                    </div>
                  )}

              {/* faultyVolumeButtons  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyVolumeButtons ===
                    true && (
                    <div className="  mb-2">Volume buttons not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyVolumeButtons ===
                    true && (
                    <div className="  mb-2">Volume buttons not working</div>
                  )}

              {/* faultyFingerPrint  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyFingerPrint ===
                    true && (
                    <div className="  mb-2">
                      Fingerprint scanner not working
                    </div>
                  )
                : phoneDetails?.phoneCondition?.faultyFingerPrint === true && (
                    <div className="  mb-2">
                      Fingerprint scanner not working
                    </div>
                  )}

              {/* missingSimCardTray  */}

              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.missingSimCardTray ===
                    true && <div className="  mb-2">Simcard tray missing</div>
                : phoneDetails?.phoneCondition?.missingSimCardTray === true && (
                    <div className="  mb-2">Simcard tray missing</div>
                  )}

              {/* faultySpeakers  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultySpeakers === true && (
                    <div className="  mb-2">Speaker not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultySpeakers === true && (
                    <div className="  mb-2">Speaker not working</div>
                  )}

              {/* faultyEarpiece  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyEarpiece === true && (
                    <div className="  mb-2">Earpiece not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyEarpiece === true && (
                    <div className="  mb-2">Earpiece not working</div>
                  )}

              {/* faultyPowerButton  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyPowerButton ===
                    true && (
                    <div className="  mb-2">Power button not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyPowerButton === true && (
                    <div className="  mb-2">Power button not working</div>
                  )}

              {/* faultyChargingPort  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyChargingPort ===
                    true && (
                    <div className="  mb-2">Charging port not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyChargingPort === true && (
                    <div className="  mb-2">Charging port not working</div>
                  )}

              {/* faultyBackCamera  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyBackCamera ===
                    true && (
                    <div className="  mb-2">Main camera not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyBackCamera === true && (
                    <div className="  mb-2">Main camera not working</div>
                  )}

              {/* faultyFrontCamera  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.faultyFrontCamera ===
                    true && (
                    <div className="  mb-2">Selfie camera not working</div>
                  )
                : phoneDetails?.phoneCondition?.faultyFrontCamera === true && (
                    <div className="  mb-2">Selfie camera not working</div>
                  )}

              {/* scratchedScreen  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.scratchedScreen ===
                    true && <div className="  mb-2">Screen is scratched</div>
                : phoneDetails?.phoneCondition?.scratchedScreen === true && (
                    <div className="  mb-2">Screen is scratched</div>
                  )}

              {/* spottedScreen */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.spottedScreen === true && (
                    <div className="  mb-2">Screen has spots or lines</div>
                  )
                : phoneDetails?.phoneCondition?.spottedScreen === true && (
                    <div className="  mb-2">Screen has spots or lines</div>
                  )}

              {/* brokenScreen  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.brokenScreen === true && (
                    <div className="  mb-2">Screen is broken</div>
                  )
                : phoneDetails?.phoneCondition?.brokenScreen === true && (
                    <div className="  mb-2">Screen is broken</div>
                  )}

              {/* brokenCameraGlass  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.brokenCameraGlass ===
                    true && <div className="  mb-2">Camera glass broken</div>
                : phoneDetails?.phoneCondition?.brokenCameraGlass === true && (
                    <div className="  mb-2">Camera glass broken</div>
                  )}

              {/* damagedBackCoverGlass */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.damagedBackCoverGlass ===
                    true && (
                    <div className="  mb-2">
                      Back cover/glass broken or scratched
                    </div>
                  )
                : phoneDetails?.phoneCondition?.damagedBackCoverGlass ===
                    true && (
                    <div className="  mb-2">
                      Back cover/glass broken or scratched
                    </div>
                  )}

              {/* brokenPhoneBody  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.brokenPhoneBody ===
                    true && (
                    <div className="  mb-2">Phone{"'"}s body dented/broken</div>
                  )
                : phoneDetails?.phoneCondition?.brokenPhoneBody === true && (
                    <div className="  mb-2">Phone{"'"}s body dented/broken</div>
                  )}

              {/* scratchedPhoneBody */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.scratchedPhoneBody ===
                    true && (
                    <div className="  mb-2">Phone{"'"}s body is scratched</div>
                  )
                : phoneDetails?.phoneCondition?.scratchedPhoneBody === true && (
                    <div className="  mb-2">Phone{"'"}s body is scratched</div>
                  )}
            </div>
          </section>

          {/* Gadget's Accessories */}

          <section className="mb-4">
            <h1 className="poppins-medium text-lg mb-4">Phone Accessories</h1>

            <div className="  grid grid-cols-3 gap-4  ">
              {/* originalCharger  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.originalCharger ===
                    true && (
                    <div className="  mb-2">
                      Original charger plug of device present
                    </div>
                  )
                : phoneDetails?.phoneCondition?.originalCharger === true && (
                    <div className="  mb-2">
                      Original charger plug of device present
                    </div>
                  )}

              {/* originalChargerCable  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.originalChargerCable ===
                    true && (
                    <div className="  mb-2">
                      {" "}
                      Original charger cable of device present
                    </div>
                  )
                : phoneDetails?.phoneCondition?.originalChargerCable ===
                    true && (
                    <div className="  mb-2">
                      {" "}
                      Original charger cable of device present
                    </div>
                  )}

              {/*  receipt  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.receipt === true && (
                    <div className="  mb-2">
                      receipt with the same IMEI present
                    </div>
                  )
                : phoneDetails?.phoneCondition?.receipt === true && (
                    <div className="  mb-2">
                      receipt with the same IMEI present
                    </div>
                  )}

              {/* originalBox  */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.originalBox === true && (
                    <div className="  mb-2">Original Box present</div>
                  )
                : phoneDetails?.phoneCondition?.originalBox === true && (
                    <div className="  mb-2">Original Box present</div>
                  )}

              {/* brandWarranty */}
              {fromEditPage
                ? editPhoneDetails?.phoneCondition?.brandWarranty === true && (
                    <div className="  mb-2">Phone under brand warranty</div>
                  )
                : phoneDetails?.phoneCondition?.brandWarranty === true && (
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
                  {fromEditPage
                    ? cities?.filter(
                        (city) => city._id === editPhoneDetails?.cityId
                      )[0]?.stateId?.name
                    : cities?.filter(
                        (city) => city._id === phoneDetails?.cityId
                      )[0]?.stateId?.name}
                </div>
              </div>

              {/*  City */}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  City<span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {fromEditPage
                    ? cities?.filter(
                        (city) => city._id === editPhoneDetails?.cityId
                      )[0]?.name
                    : cities?.filter(
                        (city) => city._id === phoneDetails?.cityId
                      )[0]?.name}
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
                  {fromEditPage
                    ? userBankAccounts?.filter(
                        (bank) => bank._id === editPhoneDetails?.bankId
                      )[0]?.accountBearerName
                    : userBankAccounts?.filter(
                        (bank) => bank._id === phoneDetails?.bankId
                      )[0]?.accountBearerName}
                </div>
              </div>

              {/* Account Number*/}
              <div className="flex-1 flex flex-col gap-4">
                <Label className="">
                  Account Number<span className="text-[#E40C0C]">*</span>
                </Label>
                <div className="border border-gray-400 py-3 px-4 rounded-lg bg-gray-100">
                  {fromEditPage
                    ? userBankAccounts?.filter(
                        (bank) => bank._id === editPhoneDetails?.bankId
                      )[0]?.accountNumber
                    : userBankAccounts?.filter(
                        (bank) => bank._id === phoneDetails?.bankId
                      )[0]?.accountNumber}
                  (
                  {fromEditPage
                    ? userBankAccounts?.filter(
                        (bank) => bank._id === editPhoneDetails?.bankId
                      )[0]?.bank
                    : userBankAccounts?.filter(
                        (bank) => bank._id === phoneDetails?.bankId
                      )[0]?.bank}
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
              onClick={() =>
                fromEditPage ? updateSellRequestFn() : sendSellRequestFn()
              }
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
