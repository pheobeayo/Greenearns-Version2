import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Home = lazy(() => import("../pages/Home"));
const Aboutus = lazy(() => import("../pages/About-us"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const AddProduct = lazy(() => import("../pages/dashboard/AddProduct"));
const Marketplace = lazy(() => import("../pages/dashboard/Marketplace"));
const Chat = lazy(() => import("../pages/dashboard/Chat"));
const Transactions = lazy(() => import("../pages/dashboard/Transactions"));
const Notifications = lazy(() => import("../pages/dashboard/Notifications"));
const MarketplaceHome = lazy(() => import ('../pages/MarketplaceHome'))
const MarketplaceHomeDetails = lazy(() => import ('../pages/MarketplaceHomeDetails'))


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<MarketplaceHome />} />
      <Route path="/marketplace/:id" element={<MarketplaceHomeDetails/>} />
      <Route path="/about-us" element={<Aboutus />} />
    {/* </Route> */}
    <Route path="/dashboard" element={<DashboardLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="add_product" element={<AddProduct />} />
      <Route path="market_place" element={<Marketplace />} />
      <Route path="chat" element={<Chat />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="notifications" element={<Notifications />} />
    </Route>
    </Route>
    ))



const AllRoutes = () => {
 

  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
    );
};

    export default AllRoutes;