import { useEffect } from "react";

import TransactionsTab from "../components/TransactionComponents/TransactionsTab";

const Transactions = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative">
      <section className=" px-6  md:px-32 poppins-regular pb-12 pt-28">
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
