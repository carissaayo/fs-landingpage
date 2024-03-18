const Steps = ({ step }) => {
  return (
    <section className="mb-8 text-[10px]">
      <div className="w-full flex items-center my-6">
        {/* 1 */}

        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center text-white bg-[#0E0C4D]`}
        >
          1
        </div>
        {/* Line */}
        <div className="w-[70px] xs:w-[87px] sm:w-[110px] md:w-[120px] lg:w-[150px]  h-[2px] bg-[#0E0C4D]"></div>

        {/* 2 */}
        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center  ${
            step > 1
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          2
        </div>
        {/* Line */}
        <div
          className={`w-[70px] xs:w-[87px] sm:w-[110px] md:w-[120px] lg:w-[150px] h-[2px] ${
            step > 1 ? "bg-[#0E0C4D]" : "bg-[#858585]"
          } `}
        ></div>

        {/* 3 */}
        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center  ${
            step > 2
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          3
        </div>
        {/* Line */}
        <div
          className={`w-[70px] xs:w-[87px] sm:w-[110px] md:w-[120px] lg:w-[150px] h-[2px] ${
            step >= 3 ? "bg-[#0E0C4D]" : "bg-[#858585]"
          } `}
        ></div>
        {/* 4 */}
        <div
          className={`rounded-full h-[30px] w-[30px]  flex items-center justify-center  ${
            step >= 4
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          4
        </div>
        {/* Line */}
        <div
          className={`w-[70px] xs:w-[87px] sm:w-[110px] md:w-[120px] lg:w-[150px] h-[2px] ${
            step >= 4 ? "bg-[#0E0C4D]" : "bg-[#858585]"
          } `}
        ></div>
        {/* 5 */}
        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center  ${
            step === 5
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          5{" "}
        </div>
      </div>
      <div className="flex gap-5 xs:gap-8 lg:gap-16 items-center text-[#111111] text-sm sm:text-base">
        <p className={`${step === 1 && "poppins-semibold"} `}>Select Brand</p>
        <p className={`${step === 2 && "poppins-semibold"} `}>Select Model</p>
        <p className={`${step === 3 && "poppins-semibold"} `}>Gadget Details</p>
        <p className={`${step === 4 && "poppins-semibold"} `}>Enter Location</p>
        <p className={`${step === 5 && "poppins-semibold"} `}>Phone image</p>
      </div>
    </section>
  );
};

export default Steps;
