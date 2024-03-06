import { Link } from "react-router-dom";

import footerLogo from "../../../assets/images/footerlogo.png";
import facebookLogo from "../../../assets/images/ri_facebook-fill.png";
import instagramLogo from "../../../assets/images/ri_instagram-fill.png";
import linkedinLogo from "../../../assets/images/mdi_linkedin.png";

const Footer = () => {
  return (
    <section className="w-full  bg-[#FAFAFA] px-8  md:px-16 lg:px-20 2xl:px-32  relative poppins-regular  py-20 ">
      <div className="flex flex-col lg:flex-row  justify-between mb-8  gap-16 md:gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <Link to="/">
            <img src={footerLogo} alt="" className="mb-4 w-[150px]" />
          </Link>
          <p className="w-[70%] lg:w-full poppins-semibold">
            The easiest place to sell your smartphones faster and conveniently
          </p>
          <div className="flex items-center gap-6 ">
            <img src={facebookLogo} className="" />
            <img src={instagramLogo} className="" />
            <img src={linkedinLogo} className="" />
          </div>
        </div>
        <div className="flex-[1.5] text-lg flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <ul className="">
            <li className=" mb-4 lg:mb-8 poppins-semibold">
              <Link to="/">Quick Links</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> Contact us</Link>
            </li>
          </ul>

          <ul className="">
            <li className="mb-4 lg:mb-8 poppins-semibold">
              <Link to="/">Legal</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Terms of use</Link>
            </li>
            <li className="mb-2">
              <Link to="/">FAQs</Link>
            </li>
          </ul>

          <ul className="">
            <li className="mb-4 lg:mb-8 poppins-semibold">
              <Link to="/">Company</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Fairshop for business</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Buy Now Pay Later</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-[#F3F3F3] mb-8 lg:mb-12" />
      <p className="w-full text-center">
        Fairshop 2024. © All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
