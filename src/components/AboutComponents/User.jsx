import userImg from "../../assets/images/user.png";
const User = () => {
  return (
    <section className="relative w-full  px-8 md:px-16 lg:px-20 2xl:px-32 h-[850px] xs:h-[800px] md:h-[500px] lg:h-[400px] mb-10">
      <div className="absolute bg-white  rounded-lg flex  flex-col md:flex-row justify-between items-start top-[-50%] w-[85%] border pb-8 left-[8%] md:left-auto ">
        {/* About */}
        <div className=" w-full flex-[2] xl:flex-1  flex flex-col gap-6">
          <div className="bg-[#00FFFC] bg-opacity-15 py-6 px-2 flex items-center justify-center">
            <div className="poppins-semibold text-xl text-[#0E0C4D] flex gap-2 items-center">
              <div className=" w-[15px] h-[15px] border-[#0E0C4D]  border-4 rounded-full"></div>
              <p className="">Founder’s Story</p>
            </div>
          </div>

          <div className="flex items-center justify-center px-4">
            <img src={userImg} alt="" className="" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="poppins-semibold">Winner Akako</p>
            <p className="poppins-medium">CEO / CO-FOUNDER</p>
          </div>
        </div>
        {/* Words */}
        <div className="flex-[3] xl:flex-[2] pt-12 xl:py-20 md:border-l-2  border-[#0E0C4D] border-opacity-20">
          <div className="w-[90%] xl:w-4/5 mx-auto lg:text-lg flex flex-col gap-4">
            <p className="">
              I tested positive for COVID on the 31st of December, 2020. The
              result came in very late at night and I couldn’t travel home. I
              spent the entire January 1 looking for food vendors to deliver
              food to me but the available food delivery providers didn’t
              deliver during public holidays.
            </p>
            <p className="">
              {" "}
              I eventually found one after so many hours and ended up paying 4x
              the regular amount. During my 14- day isolation, I realized no one
              was really looking into the logistics problem with the care and
              attention I would have wished for.
            </p>
            <p className="">
              I started asking questions; most answers ended with “dispatch
              riders are not reliable”, then I made a lot of research and
              discovered delivery companies in countries like India made
              millions of deliveries daily.
            </p>
            <p className="">
              No one comes close locally and it didn’t make sense that at such a
              small scale, we Africans couldn’t figure it out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
