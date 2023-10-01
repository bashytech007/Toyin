import React from "react";
import bankImg from "../../assets/BankAccount.svg"
import arrowright from "../../assets/arrow-right.svg"
import plane from '../../assets/Airplane.svg'
import creative from '../../assets/Creativity.svg'
import brief from '../../assets/Briefcase.svg'
import block from '../../assets/Block.svg'
import arrow from '../../assets/Arrow3.svg'
const PracticeArea = () => {
  return (
    <div className="px-14 py-8 w-full h-full bg-[#C4D4D9]">
      <h3 className="text-[#035a70] mb-8 font-bold text-base text-center">
        Our Practice Area
      </h3>
      <div className="grid grid-cols-3 gap-3">
        <div className="about-color shadow-xl flex flex-col gap-3 p-6 rounded-sm text-center">
          <img src={bankImg} className="mx-auto" />
          <h5 className="text-[24px] font-bold">Administration of Companies</h5>
          <p className="text-base ">
            We offer company secretarial duties and also trusteeship services
            among others
          </p>
          <div className="flex items-center justify-center mb-10">
            <a
              href="#"
              className="flex items-center border-b-2 border-[#035A70] text-[#035A70] capitalize text-base"
            >
              Read more
              <span className="ml-2">
                <img src={arrowright} />
              </span>
            </a>
          </div>
        </div>
        <div className="about-color shadow-xl flex flex-col gap-3 p-6 rounded-sm text-center">
          <img src={plane} className="mx-auto" />
          <h5 className="text-[24px] font-bold">Aviation Law</h5>
          <p className="text-base ">
            We serve as Solicitors, Negotiators and Liaisons for clients and
            provide appropriate commercial and aviation legal services.
          </p>
          <div className="flex items-center justify-center mb-10">
            <a
              href="#"
              className="flex items-center border-b-2 border-[#035A70] text-[#035A70] capitalize text-base"
            >
              Read more
              <span className="ml-2">
                <img src={arrowright} />
              </span>
            </a>
          </div>
        </div>
        <div className="about-color shadow-xl flex flex-col gap-3 p-6 rounded-sm text-center">
          <img src={creative} className="mx-auto" />
          <h5 className="text-[24px] font-bold">Intellectual Property</h5>
          <p className="text-base ">
            We partake in the business and ensure protection of the Intellectual
            Properties of our clients
          </p>
          <div className="flex items-center justify-center mb-10">
            <a
              href="#"
              className="flex items-center border-b-2 border-[#035A70] text-[#035A70] capitalize text-base"
            >
              Read more
              <span className="ml-2">
                <img src={arrowright} />
              </span>
            </a>
          </div>
        </div>
        <div className="about-color shadow-xl flex flex-col gap-3 p-6 rounded-sm text-center">
          <img src={brief} className="mx-auto" />
          <h5 className="text-[24px] font-bold">Portfolio Investment</h5>
          <p className="text-base ">
            We prepare prospectuses, underwrite and vend agreements, debentures,
            etc for the Nigeria capital market
          </p>
          <div className="flex items-center justify-center mb-10">
            <a
              href="#"
              className="flex items-center border-b-2 border-[#035A70] text-[#035A70] capitalize text-base"
            >
              Read more
              <span className="ml-2">
                <img src={arrowright} />
              </span>
            </a>
          </div>
        </div>
        <div className="about-color  shadow-xl flex flex-col gap-3 p-6 rounded-sm text-center">
          <img src={block} className="mx-auto" />
          <h5 className="text-[24px] font-bold">Estate Planning</h5>
          <p className="text-base ">
            We help you protect yourself, loved ones and assets with legal
            assistance in matters of wills, inheritances or marriages
          </p>
          <div className="flex items-center justify-center mb-10">
            <a
              href="#"
              className="flex items-center border-b-2 border-[#035A70] text-[#035A70] capitalize text-base"
            >
              Read more
              <span className="ml-2">
                <img src={arrowright} />
              </span>
            </a>
          </div>
        </div>
        <div className="bg-[#C4D4D9] shadow-xl border border-[#C3DEE5] flex flex-col items-center justify-center gap-3 p-6 rounded-sm text-center">
          <img src={arrow} className="mx-auto" />
          <h5 className="text-[19px] font-bold text-[#2D7688]">
            View Practice Area
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
