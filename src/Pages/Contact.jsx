import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import map from '../assets/map.svg'
import tlogo from '../assets/image26.svg'
import linkedin from "../assets/Group41.svg";
import facebook from "../assets/Group42.svg";
import twitter from "../assets/Group.svg";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-14 py-8 w-full rounded-lg  bg-[#C3EAF4] ">
        <div className="mt-4  ml-28 mx-auto shadow-xl  bg-[#C8E8F0]  rounded-lg">
          <div className="flex flex-row  justify-between">
            <form className="flex flex-col  p-6 w-[400px]">
              <label htmlFor="FullName" className="mt-4">
                Full Name
              </label>
              <input
                type="text"
                className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 w-full bg-[#C8E8F0]  border placeholder-[#AAAAAA]  border-black  text-sm "
                placeholder="eg.jesus Christ"
              />
              <label htmlFor="email" className="mt-4">
                Email
              </label>
              <input
                type="email"
                className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 bg-transparent w-full bg-[#C8E8F0]  border placeholder-[#AAAAAA]  border-black  text-sm "
                placeholder="eg.bash@gmail.com"
              />
              <label htmlFor="phone" className="mt-4">
                Phone
              </label>
              <input
                type="text"
                className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 w-full bg-[#C8E8F0]  border placeholder-[#AAAAAA]  border-black  text-sm "
                placeholder="Enter your Number"
              />
              <label htmlFor="textarea" className="mt-2 pl-2">
                Message
              </label>
              <textarea
                className="rounded-md mt-6 mb-4 w-[400px] resize-none focus::outline-none border border-black bg-inherit"
                rows={5}
                placeholder="Your Message"
              ></textarea>
              <div className="flex items-center justify-center ">
                <button className="bg-[#2D7688] flex gap-1 mt-2 px-8 py-2 w-52 capitalize rounded-md text-white">
                  Send message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="bg-[#81ACB7] w-[1px] h-[461px]"></div>
            <div className="flex flex-col p-4 w-[50%] justify-right relative">
              <h5 className="text-[#035A70] text-3xl text-end pr-8 font-bold">
                Connecting You to Legal Excellence: Let's Talk!
              </h5>
              <div className="bg-[#035A70] h-24 w-5 absolute right-0 top-2 rounded-l-xl"></div>
              <div className="mt-14">
                <p className="leading-tight text-end">
                  At
                  <span className="text-[#035A70] text-base pl-2  font-bold">
                    C.O. TOYIN PINHEIRO & CO{" "}
                  </span>
                  , we are committed to providing you with expert legal services
                  and guidance. If you have any questions, concerns, or would
                  like to schedule a consultation, please don't hesitate to get
                  in touch with us. Our team of experienced attorneys is here to
                  assist you
                </p>
              </div>

              <p className="pt-2 text-end mt-16">
                Subscribe into our
                <span className="text-[#035A70] text-base inline-block font-bold">
                  NewsLetter
                </span>
                for regular updates
              </p>

              <div className="flex mt-4 items-end justify-end">
                <div className="relative w-[80%]">
                  <input
                    type="email"
                    className="focus:outline-none border-none text-sm w-full  py-3 px-4 rounded-md  bg-[#A1CFDB] placeholder-gray-500 "
                    placeholder="Email Address"
                  />
                  <button className="bg-[#2D7688] px-7 py-1 right-0 absolute inset-y-0 capitalize rounded-md text-white  ">
                    suscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid mt-4 grid-cols-4 justify-center items-center  gap-8 ml-4  rounded-lg   w-full bg-[#2D7688] ">
            <div className="flex items-center ">
              <div className="">
                <img src={map} className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h6 className="text-[#fff] ">Address</h6>
              <div className="text-white  text-start">
                <p className="">
                  Taylor Woodrow House 10, Abebe Village Road, Iganmu, Lagos.
                </p>
                <p className="">E-mail: info@toyinpinheiro.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center mt-2">
              <h6 className="text-[#fff] ">Contact Number</h6>
              <div className="text-white  text-start">
                <p className="">Phone: +2348144784696, +2349090932435</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <img src={tlogo} alt="firm-logo" className="w-28" />
              <div className='flex item-center gap-2 mt-2'>
                <img src={linkedin} className="w-6" />
                <img src={facebook} className="w-6" />
                <img src={twitter} className="w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact