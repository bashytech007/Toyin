const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="w-[665px] py-12 px-14 ">
        <h1 className="font-bold text-[48px] leading-tight text-white">
          Your <span className="text-[#DC9935]">Trusted Advisors </span>
          For Legal Matters
        </h1>
        <p className="text-white text-md mt-2">
          Helping you to navigate complex legal challenge and achieved your
          desired outcome with expertise, assurance and success.
        </p>
        <button className="px-16 py-2 mt-2 bg-[#DC9935] rounded capitalize">
          Contact us Now
        </button>
      </div>

      <div className="flex gap-6 px-14">
        <div className="text-center flex flex-col gap-1">
          <div className="text-[#2D7688] text-base font-bold">95%</div>
          <div className="text-base text-white capitalize">Case Won</div>

          <div className="w-28 h-2 bg-[#BCF1FE] rounded-md">
            <div className="w-20 h-2 bg-[#2D7688] rounded-md"></div>
          </div>
        </div>
        <div className=" border-r-2 border-[#D9D9D9] ml-1"></div>
        <div className="text-center flex flex-col gap-1">
          <div className="text-[#2D7688] text-base font-bold">85%</div>
          <div className="text-base text-white capitalize ">
            Charges Dropped
          </div>
          <div className="w-32 h-2 bg-[#BCF1FE] rounded-md">
            <div className="w-24 h-2 bg-[#2D7688] rounded-md"></div>
          </div>
        </div>
        <div className=" border-r-2 border-[#D9D9D9] ml-1"></div>

        <div className="text-center flex flex-col gap-1">
          <div className="text-[#2D7688] text-base font-bold">400</div>
          <div className="text-base text-white capitalize">Client</div>

          <div className="w-28 h-2 bg-[#BCF1FE] rounded-md">
            <div className="w-20 h-2 bg-[#2D7688] rounded-md"></div>
          </div>
        </div>
        <div className=" border-r-2 border-[#D9D9D9] ml-1"></div>

        <div className="text-center flex flex-col gap-1">
          <div className="text-[#2D7688] text-base font-bold">95%</div>
          <div className="text-base text-white capitalize">Recovered Cost</div>
          <div className="w-28 h-2 bg-[#BCF1FE] rounded-md">
            <div className="w-20 h-2 bg-[#2D7688] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
