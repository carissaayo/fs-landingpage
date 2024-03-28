import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

import UserDetailsA from "../../components/UserDetailsComponents/UserDetailsA";
import UserDetailsB from "../../components/UserDetailsComponents/UserDetailsB";
import UserDetailsC from "../../components/UserDetailsComponents/UserDetailsC";
import UserDetailsD from "../../components/UserDetailsComponents/UserDetailsD";
import ConfirmDetails from "../../components/UserDetailsComponents/ConfirmDetails";

import { useGeneralStore } from "../../store/generalStore";

const UserDetails = () => {
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);
  return (
    <main className="w-full h-full poppins-regular">
      <div className="w-full text-center">
        <h1 className="poppins-semibold text-xl md:text-3xl mb-4">
          Customer{"'"}s Information
        </h1>
        <p className="mb-4 text-lg">
          Please check the provided inforamtion before proceeding
        </p>
      </div>
      <section className="">
        <Tabs defaultValue="1" className="w-full">
          <ScrollArea className="">
            <TabsList className="min-w-[620px]  w-full flex gap-3 justify-start ">
              <TabsTrigger value="1" className="flex-1">
                KYC Details 1
              </TabsTrigger>
              <TabsTrigger value="2" className="flex-1">
                KYC Details 2
              </TabsTrigger>
              <TabsTrigger value="3" className="flex-1">
                Guarantor{"'"}s Details
              </TabsTrigger>
              <TabsTrigger value="4" className="flex-1">
                Delivery Details
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="1">
            <UserDetailsA />
          </TabsContent>
          <TabsContent value="2">
            <UserDetailsB />
          </TabsContent>
          <TabsContent value="3">
            <UserDetailsC />
          </TabsContent>
          <TabsContent value="4">
            <UserDetailsD />
          </TabsContent>
        </Tabs>
      </section>
      <div className="w-full flex justify-center md:justify-end items-center  gap-6 mb-10  ">
        <Link
          to="/buy/checkout/formD"
          className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px] flex items-center justify-center "
          onClick={() => setCheckoutStep(4)}
        >
          Back
        </Link>
        <ConfirmDetails />
      </div>
    </main>
  );
};

export default UserDetails;
