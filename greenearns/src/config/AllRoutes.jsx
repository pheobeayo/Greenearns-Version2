import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const AllRoutes = () => {
  const Home = lazy(() => import("../pages/Home"));
  

  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Home />} />
              
            </Routes>
          
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default AllRoutes;