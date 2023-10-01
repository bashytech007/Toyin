import React from "react";
import tlogo from "../../assets/image26.svg";
import linkedin from "../../assets/Group41.svg";
import facebook from "../../assets/Group42.svg";
import twitter from "../../assets/Group.svg";
const Footer = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-8 bg-[#022D38] w-full h-[80%] px-14 py-8">
      <div className="flex flex-col">
        <img src={tlogo} alt="firm-logo" className="w-[100%] mx-auto" />
        <p className="text-white text-base mt-4 text-left">
          We are engaged in the core and emerging areas of law and provide our
          clients with legal advice on all aspects of financial, energy,
          corporate, intellectual property and other professional activities.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h6 className="text-[#DC9935] mt-2">Site Links</h6>
        <div className="bg-[#fff] h-[1px] w-48 mt-3"></div>
        <div className=" text-white mt-2 text-start">
          <div className="mt-1">Home</div>
          <div className="mt-1">The Firm</div>
          <div className="mt-1">Our Team</div>
          <div className="mt-1">Practice Area</div>
          <div className="mt-1">Testimonies</div>
          <div className="mt-1">Client Login</div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h6 className="text-[#DC9935] mt-2">Site Links</h6>
        <div className="bg-[#fff] h-[1px] w-48 mt-2"></div>
        <div className="text-white mt-2 text-start">
          <p className="mt-5">
            Taylor Woodrow House 10, Abebe Village Road, Iganmu, Lagos.
          </p>
          <p className="mt-2">E-mail: info@toyinpinheiro.com</p>
          <p className="mt-2">Phone: +2348144784696, +2349090932435</p>
        </div>
        <div className="flex mt-2 items-start gap-2">
          <img src={linkedin} className="w-6" />
          <img src={facebook} className="w-6" />
          <img src={twitter} className="w-6" />
        </div>
      </div>
      <div className="bg-[#fff] h-[1px] w-[1154px]  mx-auto mt-2"></div>
      <div className=" mt-32 flex justify-between">
        <h6 className=" text-sm  text-white">Copyright 2020,</h6>
        <div className="text-sm   text-[#DC9935] ">C.O Toyin Pinheiro & Co</div>
      
        <small className="text-[#fff]">
          All rights reserved | Admin | Webmail{" "}
        </small>
      </div>
    </div>
  );
};

export default Footer;
