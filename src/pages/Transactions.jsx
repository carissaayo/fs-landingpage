import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import TransactionsTab from "../components/TransactionComponents/TransactionsTab";

const Transactions = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative">
      <section className=" px-4 xs:px-8 md:px-16 lg:px-20 2xl:px-32 poppins-regular pb-12">
        {/* GoBack  */}
        <div className="px-8 xs:px-0 py-6 poppins-semibold ">
          <p className="flex items-center xs:gap-1 sm:gap-4 text-sm sm:text-base">
            <Link to="/" className="flex xs:block items-center">
              <span className="inline-block xs:hidden">
                <ChevronLeft className="h-4 w-4" />
              </span>
              Home
            </Link>
            <span className="hidden sm:inline-block">
              <ChevronRight className="h-4 w-4" />
            </span>
            <Link
              to="/transactions"
              className="bg-[#F1F1F1]  px-2 sm:px-4 py-2 rounded-sm hidden sm:inline-block"
            >
              Transactions
            </Link>
          </p>
        </div>

        <div className="mb-10">
          <h1 className="poppins-semibold  text-2xl mb-4">
            Transaction History
          </h1>
          <p className="">View your purchases and sold item’s history below</p>
        </div>
        {/* Tabs */}
        <TransactionsTab />
      </section>
    </main>
  );
};

export default Transactions;
