import React, { Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import DomainPages from "./src/pages/DomainPages";

const Homepage = lazy(() => import("./src/pages/Homepage"));
// import ContactUs from "./Views/ContactUs";
// import ContactImage from "./Assets/Images/contact-us.svg";

function App() {
  /**
   * @description Rendering Page to the top
   */
  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Use requestAnimationFrame to ensure the DOM is painted before scrolling
    // window.requestAnimationFrame(scrollToTop);
    scrollToTop()
  }, []);

  const searchParams = useParams()

  console.log('===', window.location.path)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Shimmer />}>
                <Homepage />
              </Suspense>
            }
          />
          <Route
            // exact
            // path="/it-insfrastructure/networking/lan/routing"
            path="/services/:dynamic-route"
            // path={`services/${window.location.path}`}
            loader={({ params }) => {
              console.log('ashu',params); // "hotspur"
            }}
            element={
              <Suspense fallback={<Shimmer />}>
                <DomainPages />
              </Suspense>
            }
          />
          {/* <Route
            path="/contact-us"
            element={<ContactUs image={ContactImage} />}
          /> */}
          {/* <Route path="/lan/switching" element={<Switching />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
