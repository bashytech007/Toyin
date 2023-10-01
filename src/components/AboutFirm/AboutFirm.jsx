import aboutimg from "../../assets/office-1 1.svg";
import arrowright from "../../assets/arrow-right.svg";
const AboutFirm=()=>{
    return (
      <div className="about-color h-full w-full py-8 px-14">
        <h3 className="text-[#035A70] font-bold text-base text-center uppercase">
          About Our Firm
        </h3>
        <div className="flex justify-between mt-8 items-center gap-4">
          <img src={aboutimg} className="" />
          <div className="text-[19px] leading-loose">
            <p className="text-md">
              C.O. Toyin Pinheiro & Co is a leading law firm in Nigeria , led by
              one of the brightest mind in the country. Our team of experienced
              and dedicated professional is providing our client with the
              highest quality legal services.
            </p>
            <p className="text-md mt-4">
              We work closely with our clients to understand their needs and
              goals, and we develop creative and effective and effective
              solutions to their legal challenges.
            </p>
            <div className="flex ">
              <a
                href="#"
                className="flex items-center border-b-2  border-[#035A70] text-[#035A70] capitalize text-base"
              >
                Read more
                <span className="ml-2">
                  <img src={arrowright} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutFirm;