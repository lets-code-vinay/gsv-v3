import React, { Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import Switching from "./src/components/StructuredNavbar/ITInfrastructure/Networking/LAN/Switching";
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
          {/* <Route
            path="/contact-us"
            element={<ContactUs image={ContactImage} />}
          /> */}
          <Route path="/lan/switching" element={<Switching />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
