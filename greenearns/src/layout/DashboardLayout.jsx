import Sidebar from "../components/Sidebar"
import { Outlet, Navigate } from "react-router-dom"
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const DashboardLayout = () => {

    return !isConnected ? <Navigate to={'/'}/> : (
    <div>     
        <div className="flex bg-white">
            <Sidebar />
            <div className="px-6 w-[100%] lg:w-[72%] md:w-[72%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll mt-28">
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout