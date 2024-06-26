import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {


  return  (
    <div>
      
        
        
        <div className="flex justify-between bg-[#DBECDB]">
            <Sidebar />
            <div className="px-6 w-[100%] lg:w-[72%] md:w-[72%] h-auto lg:h-[80vh] md:h-[80vh] overflow-y-scroll mt-28">
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout