import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import whitelogo from "../assets/whitelogo.svg";

function Footer() {
  return (


    <div
      className="w-[100vw] px-[30px] md:px-[10px] py-[60px]
    bg-[#2A382A] grid grid-cols-1 md:flex md:flex-row gap-4"
    >
      <div className="md:flex flex-wrap md:flex-row justify-between w-full">
        <div className="md:flex justify-center items-start md:gap-[100px]">
          <div className="flex flex-row gap-[100px]">
            <p className="text-gray-50 text-[10px] md:text-[15px] font-semibold">
              @ 2024 Greenearns
            </p>
            <p className="text-gray-50 text-[10px] md:text-[15px] font-semibold">
              Privacy Policy
            </p>
            <p className="text-gray-50 text-[10px] md:text-[15px] font-semibold">
              Terms of Use
            </p>
            <p className="text-gray-50 text-[10px] md:text-[15px] font-semibold">
              Contact us
            </p>



            <div>
              <div className="flex flex-row items-center gap-4">
                <img alt="whitelogo" src={whitelogo} className="mx-12" />
              </div>

              <p className="text-opacity-90 py-[12px] px-10 text-white text-[10px] md:text-[15px] font-normal">
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
    </div>
  );
}
export default Footer;
