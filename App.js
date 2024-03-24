import React, { useState, Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import Switching from "./src/components/StructuredNavbar/ITInfrastructure/Networking/LAN/Switching";
import StructuredNavbar from "./src/components/StructuredNavbar";
import Routing from "./src/components/StructuredNavbar/ITInfrastructure/Networking/LAN/Routing";
import { AllModuleRouting } from "./src/components/AllModuleRouting/AllModuleRouting";
const Homepage = lazy(() => import("./src/pages/Homepage"));
import ContactUs from "./src/pages/ContactUs";
import ContactImage from "./src/assets/images/contact-us.svg";
import Footer from "./src/components/Footer/index";
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

  // for Navbar ---
  const mainRef = React.useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * @description Getting Scroll Position
   * @param {object} event
   */
  const handleScroll = () => {
    const position = window.pageYOffset; // if not work use-- window.pageYOffset
    setScrollPosition(position);
  };
 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  localStorage.setItem("scrollPosition", scrollPosition);

  // navbar end ---

  return (
    <>
      <BrowserRouter>
        <StructuredNavbar scrollPosition={scrollPosition} />
        <Suspense fallback={<Shimmer />}>

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
            {
              Object.values(AllModuleRouting)?.map((item, i) => {
                return item?.map((val, i) => {
                  // setRoutData(val?.path)
                  return <Route path={val?.path} element={val?.component} />

                })
              })
            }
            {/* <Route
              path="/contact-us"
              element={<ContactUs image={ContactImage} />}
            /> */}
            <Route path="/*" element={
              <Suspense fallback={<Shimmer />}>
                <Homepage />
              </Suspense>}
            />
          </Routes>
          <Footer />

        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
