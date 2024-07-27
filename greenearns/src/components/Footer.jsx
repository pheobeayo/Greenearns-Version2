import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import whitelogo from "../assets/whitelogo.svg";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="px-[30px] md:px-[100px] py-[60px]
    bg-[#2A382A] grid grid-cols-1 md:flex md:flex-row gap-4">
      <div className="md:flex flex-wrap md:flex-row justify-between w-full">

        <div className="md:flex justify-center items-start md:gap-[120px]">
          <div className="flex flex-row gap-[50px]">
            <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
              <p className="text-gray-50 text-lg md:text-[15px] font-semibold font-mono">© 2024 Greenearns</p>


            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
              <p className="text-gray-50 text-lg md:text-[15px] font-semibold font-mono ">Privacy Policy</p>


            </div>
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
            <p className="text-gray-50 text-lg md:text-[15px] font-semibold font-mono">Term of Use</p>

          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
            <p className="text-gray-50 text-lg md:text-[15px] font-semibold font-mono">Contact Us</p>


          </div>
          <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
            <p className="text-gray-50 text-lg md:text-[10px] font-semibold font-mono">
            Where environmental consciousness
            <br/>meets blockchain innovation

            </p>
            <div className="flex flex-row cursor-pointer space-x-5 text-white">
              <FaTwitter />
              <SiDiscord />
              <HiOutlineMail />
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
              <Link to='/'> <img src={whitelogo} alt='whitelogo' /></Link>

            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
export default Footer;
