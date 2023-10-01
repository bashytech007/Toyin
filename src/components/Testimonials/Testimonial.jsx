import React from "react";
import elipse from "../../assets/Ellipse-4.svg";
import star from "../../assets/Star.svg";
import quote from "../../assets/quote.svg";
import elipse4 from "../../assets/Ellipse4.svg";
import vector from "../../assets/Vector.svg";
const Testimonial = () => {
  return (
    <div className="px-14 py-8 w-full h-full bg-[#C4D4D9]">
      <h3 className="text-[#035a70] mb-8 font-bold text-base text-center">
        Client Testimonials
      </h3>
      <p className="text-center">
        Hear what our clients have to say about their exceptional experiences
        with our legal expertise
      </p>
      <div className="flex w-[70%] items-center justify-between">
        <div className="flex mt-8 relative">
          <div className="z-[99] ">
            <img src={elipse} />
          </div>
          <div className="bg-[#E8BB78] z-[9999] flex items-center justify-center absolute top-2 left-2 rounded-full w-12 h-12">
            <img src={quote} />
          </div>
          <div className="w-[505px] h-60 z-10 absolute left-32 p-12 bg-[#DEF0F5] shadow-xl rounded-lg">
            <h5 className="justify-center leading-tight pl-11 text-[#2B2B2B] text-sm">
              I've been a customer of C.O Toyin Pinheiro & Co for several years
              now, and they consistently deliver top-notch Property & Real
              Estate. Their attention to detail, customer support, and
              commitment to excellence keep me coming back. I wouldn't hesitate
              to recommend them to anyone.
            </h5>
            <div className="flex items-center w-[18px] ml-10 pt-2">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <h5 className="font-bold text-left capitalize ml-10 pt-2">
              Anjelina Jolie
            </h5>
          </div>
        </div>
        <div className="flex mt-8 relative">
          <div className="z-[99] ">
            <img src={elipse4} />
          </div>
          <div className="bg-[#E8BB78] z-[9999] flex items-center justify-center absolute top-2 left-2 rounded-full w-12 h-12">
            <img src={quote} />
          </div>
          <div className="w-[505px] h-60 z-10 absolute left-32 p-12 bg-[#DEF0F5] shadow-xl rounded-lg">
            <h5 className="justify-center leading-tight pl-11 text-[#2B2B2B] text-sm">
              I've been a customer of C.O Toyin Pinheiro & Co for several years
              now, and they consistently deliver top-notch Property & Real
              Estate. Their attention to detail, customer support, and
              commitment to excellence keep me coming back. I wouldn't hesitate
              to recommend them to anyone.
            </h5>
            <div className="flex items-center w-[18px] ml-10 pt-2">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <h5 className="font-bold text-left capitalize ml-10 pt-2">
              Anjelina Jolie
            </h5>
          </div>
        </div>
      </div>
      <div className="w-86  h-1 bg-[#035A70] mt-16"></div>
      <div className="h-[542px]  border-8 mt-4  ml-28 mx-auto border-solid border-[#2D7688] rounded-md">
        <div className="flex flex-row  justify-between">
          <form className="flex flex-col  p-6 w-[400px]">
            <label htmlFor="FullName" className="mt-4">
              Full Name
            </label>
            <input
              type="text"
              className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 bg-[#C4D4D9]  border placeholder-[#AAAAAA]  border-black  text-sm "
              placeholder="eg.jesus Christ"
            />
            <label htmlFor="email" className="mt-4">
              Email
            </label>
            <input
              type="email"
              className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 bg-[#C4D4D9]  border placeholder-[#AAAAAA]  border-black  text-sm "
              placeholder="eg.bash@gmail.com"
            />
            <label htmlFor="phone" className="mt-4">
              Phone
            </label>
            <input
              type="text"
              className="focus:outline-none border-t-0 border-r-0 border-l-0 p-2 bg-[#C4D4D9]  border placeholder-[#AAAAAA]  border-black  text-sm "
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
                and guidance. If you have any questions, concerns, or would like
                to schedule a consultation, please don't hesitate to get in
                touch with us. Our team of experienced attorneys is here to
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
    </div>
  );
};

export default Testimonial;
