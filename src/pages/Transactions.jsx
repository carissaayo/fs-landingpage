import { useEffect, useState } from "react";
import Nav from "../components/CoreComponents/NavComponents/Nav";
import MobileNav from "../components/CoreComponents/MobileComponents/MobileNav";
import Footer from "../components/CoreComponents/FooterComponents/Footer";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import TransactionsTab from "../components/TransactionComponents/TransactionsTab";

const Transactions = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [stepContent, setStepContent] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  useEffect(() => goToTop(), []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="w-full h-full relative">
      <Nav scroll={scroll} isBuy={1} />

      <MobileNav isBuy={1} scroll={scroll} />
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

      <Footer />
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <ChevronUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    </main>
  );
};

export default Transactions;
