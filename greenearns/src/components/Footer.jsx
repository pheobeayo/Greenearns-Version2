import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import {NavLink } from 'react-router-dom';
import Subscriber from "./Subscribe";
import whitelogo from "../assets/whitelogo.svg";

function Footer() {
  return (


    <div
      className="w-[100vw] px-[30px] md:px-[10px] py-[60px]
    bg-[#2A382A] flex md:flex md:flex-row gap-4 sm:flex-col"
    >
      <div className="md:flex flex-wrap md:flex-row justify-between items-center w-full p-10">
      <div className='mx-4'>
          <h2 className="text-white font-mono text-xl sm:text-2xl font-bold leading-10 mt-4">
            Subscribe to our mailing list
          </h2>
          <p className="text-justify pt-[10px] font-mono text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7">
            Join us in making a meaningful impact through responsible
            <br /> choices and shared commitment to a greener future.{" "}

          </p>

          <Subscriber />
        </div>
        <div className="md:flex justify-center items-center md:gap-[200px]">
          <div>
            <ul className="space-y-7 ">
            
            <li>
            <NavLink className="text-gray-50 text-[10px] md:text-[15px] font-medium font-mono">
              Privacy Policy
            </NavLink>
            </li>
            <li>
            <NavLink className="text-gray-50 text-[10px] md:text-[15px]  font-medium font-mono">
              Terms of Use
            </NavLink>
            </li>
            <li>
            <NavLink className="text-gray-50 text-[10px] md:text-[15px]  font-medium font-mono">
              Contact us
            </NavLink>
            </li>
            <li><NavLink className="text-gray-50 text-[10px] md:text-[15px]  font-medium font-mono ">
              @ 2024 Greenearns
            </NavLink>
            </li>
            </ul>
            </div>


            <div >
              <div className="flex flex-row items-center gap-4 sm:flex-col">
                <img alt="whitelogo" src={whitelogo} className="mx-4" />
              </div>

              <p className="text-opacity-90 py-[12px] px-10 font-mono text-white text-[10px] md:text-[15px] font-normal">
                Where environmental consciousness
                <br />meets blockchain innovation
              </p>
              <div className="flex flex-row cursor-pointer space-x-5 text-white px-10">
                <FaTwitter />
                <SiDiscord />
                <HiOutlineMail />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;
