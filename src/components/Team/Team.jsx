import React from "react";
import toyin from "../../assets/toyin2.svg";
import modupe from "../../assets/modupe.svg";
import oshodi from "../../assets/oshodi.svg";
import emmanuel from "../../assets/emmanuel.svg";
import arrowright from "../../assets/arrow-orange.svg";
const Team = () => {
  return (
    <div className="px-14 py-8 w-full about-color">
      <h3 className="capitalize font-bold text-[#035A70]  text-center">
        Our Formidable Team
      </h3>
      <div className="">
        <p className="text-[#636363] text-center mt-3">
          Our Firm is a team of lawyers versatile in various areas of the law
          with outstanding profile and numerous achievements
        </p>
        <div className="flex  items-center gap-2 ">
          <div className="relative m-4 ">
            <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md relative z-[999] p-2 border-2 border-[#5791A0] border-double ">
              <img
                src={toyin}
                className="border-t-2 border-l-2 border-r-2 border-[#5791A0] rounded-md overflow-hidden"
              />
              <h3 className="capitalize text-center text-black font-bold">
                C.O. Toyin Pinheiro, SAN
              </h3>
              <div className="w-44 h-1 bg-[#81ACB7] rounded-md"></div>
              <p className="text-center">Managing Patner</p>
            </div>

            <div className="w-[110%] absolute top-[8rem] right-[-5%] h-3/4 bg-[#5791A0]"></div>
          </div>
          <div className="relative m-4 ">
            <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md relative z-[999] p-2 border-2 border-white border-double ">
              <img src={oshodi} />
              <h3 className="capitalize text-center text-black font-bold">
                Oshodi Wahid Enitan
              </h3>
              <div className="w-44 h-1 bg-[#81ACB7] rounded-md"></div>
              <p className="text-center">Managing Patner</p>
            </div>

            <div className="w-[110%] absolute top-[8rem] right-[-5%] h-3/4 bg-white"></div>
          </div>
          <div className="relative m-4 ">
            <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md relative z-[999] p-2 border-2 border-white border-double ">
              <img src={modupe} />
              <h3 className="capitalize text-center text-black font-bold">
                Modupe Fatima Koku
              </h3>
              <div className="w-44 h-1 bg-[#81ACB7] rounded-md"></div>
              <p className="text-center">Member, Lawyer</p>
            </div>

            <div className="w-[110%] absolute top-[8rem] right-[-5%] h-3/4 bg-white"></div>
          </div>
          <div className="relative m-4 ">
            <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md relative z-[999] p-2 border-2 border-white border-double ">
              <img src={emmanuel} />
              <h3 className="capitalize text-center text-black font-bold">
                Emmanuel Daniel B
              </h3>
              <div className="w-44 h-1 bg-[#81ACB7] rounded-md"></div>
              <p className="text-center">Member,Lawyer</p>
            </div>

            <div className="w-[110%] absolute top-[8rem] right-[-5%] h-3/4 bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <a
          href="#"
          className="flex items-center border-b-2  border-[#DC9935] text-[#DC9935] capitalize text-base"
        >
         View All Attorneys
          <span className="ml-2">
            <img src={arrowright} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Team;
