import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";



const Home = lazy(() => import("../pages/Home"));
const Marketplace = lazy(() => import("../pages/Marketplace"));
const Aboutus = lazy(() => import("../pages/About-us"));

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route index element={<Home />} />
  <Route path="/market-place" element={<Marketplace />} />
  <Route path="/about-us" element={<Aboutus/>}/>
  </Route>
))



const AllRoutes = () => {
 

  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
      
        <RouterProvider router={router} />
        
      </Suspense>
    </div>
  );
};

export default AllRoutes;