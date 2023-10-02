import React from "react";
import tlogo from "../../assets/tlogo.svg";
import { Link, useLocation } from "react-router-dom";
import icon from '../../assets/icon.svg'
function Navbar() {
  const location=useLocation();

  return (
    <div className="background bg-navBg flex items-center  justify-between px-14 py-4 border border-b-gray-500">
      <div className="max-w-4xl ">
        <img src={tlogo} alt="firm-logo" className="w-28 md:w-full" />
      </div>
      <div className="text-[#000] font-bold text-[1.2rem]">
        <div className="md:flex items-center gap-4 justify-center">
          <Link
            className={`${
              location.pathname === "/" ? "text-xl text-[#DC9935]" : ""
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              location.pathname === "/firm" ? "text-3xl text-[#DC9935]" : ""
            }`}
          >
            The Firm
          </Link>
          <Link>The Practice Area</Link>
          <Link
            className={`${
              location.pathname === "/contact" ? "text-xl text-[#DC9935]" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
          <Link>Client Login</Link>
          <button className="inline-block px-6 py-3 text-white bg-[#035A70]  rounded-md text-base ">
            Suscribe Now
          </button>
        </div>
        <button
          type="button"
          class="text-gray-500 sm:hidden hover:text-gray-400"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
