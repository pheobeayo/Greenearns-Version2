import Sidebar from "../components/Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import mobileLogo from "../assets/mobilelogo.png";
import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = () => {
  const { isConnected } = useWeb3ModalAccount();

  return !isConnected ? (
    <Navigate to={"/"} />
  ) : (
    <div>
      <div className="flex bg-white">
        <Sidebar />
        <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
          <div className="flex mb-8 mt-4 justify-between items-center">
            <img src={mobileLogo} alt="" className="w-[50px] h-[50px]" />
            <w3m-button />
          </div>
          <MobileSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
