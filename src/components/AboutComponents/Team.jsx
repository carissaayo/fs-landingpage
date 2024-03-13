import { Star } from "lucide-react";

const Team = () => {
  return (
    <section className="w-full h-[500px] bg-[#0E0C4D] flex items-center justify-center">
      <div className="w-[60%] h-[300px] flex justify-between  gap-4 text-white">
        <div className="flex flex-col flex-1  gap-8">
          <p className="text-2xl poppins-medium">
            Teams <span className="text-[52px] text-[#00FFFC]">.</span>
          </p>

          <p className="text-2xl poppins-medium">
            <span className="text-[12px] text-[#00FFFC]">01</span> Sales
          </p>
          <p className="text-2xl poppins-medium">
            <span className="text-[12px] text-[#00FFFC]">02</span> Business
          </p>
          <p className="text-2xl poppins-medium">
            <span className="text-[12px] text-[#00FFFC]">03</span> Operations
          </p>
          <p className="text-2xl poppins-medium">
            <span className="text-[12px] text-[#00FFFC]">04</span> Procurement
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-[#00FFFC] bg-opacity-70 p-4 py-8 flex flex-col gap-4 pb-20 rounded-xl">
            <div className="bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full">
              <Star className="h-6 w-6 text-[#00FFFC]" />
            </div>
            <p className="">
              I tested positive for COVID on the 31st of December, 2020. The
              result came in very late at night and I couldn’t travel home. I
              spent the entire January 1 looking for food vendors to deliver
              food to me but the available food delivery providers didn’t
              deliver during public holidays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
