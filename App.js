import React, { useState, Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import Switching from "./src/components/StructuredNavbar/ITInfrastructure/Networking/LAN/Switching";
import StructuredNavbar from "./src/components/StructuredNavbar";
import Routing from "./src/components/StructuredNavbar/ITInfrastructure/Networking/LAN/Routing";
import { AllModuleRouting } from "./src/components/AllModuleRouting/AllModuleRouting";
const Homepage = lazy(() => import("./src/pages/Homepage"));
// import ContactUs from "./Views/ContactUs";
// import ContactImage from "./Assets/Images/contact-us.svg";

function App() {

  const [routData, setRoutData] = useState(false)
  /**
   * @description Rendering Page to the top
   */
  useLayoutEffect(() => {
    // show()
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
  const showSwitchingComponent = () => {
    if (window?.location?.pathname === '/lan/switching') {
      return <Switching />
    }
  }

  const showLanRoutingComponent = () => {
    if (window?.location?.pathname === '/lan/routing') {
      return <Routing />
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  localStorage.setItem("scrollPosition", scrollPosition);
  console.log('window', window?.location?.pathname === '/lan/switching'
  )

  // navbar end ---

  return (
    <>
      <BrowserRouter>
        <StructuredNavbar scrollPosition={scrollPosition} /> 
        <Suspense fallback={<Shimmer />}>
          {/* {showSwitchingComponent()} */}
          {/* {showLanRoutingComponent()} */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Homepage />
              }
            />
            {/* <Route
            path="/contact-us"
            element={<ContactUs image={ContactImage} />}
          /> */}
            {
              Object.values(AllModuleRouting)?.map((item, i) => {
                return item?.map((val, i) => {
                  // setRoutData(val?.path)
                  return <Route path={val?.path} element={val?.component} />

                })
              })
            }
            {/* <Route path="/lan/switching" element={<Switching />} /> */}

            {/* garbage routing will fallback this component */}
            <Route
              exact
              path="/*"
              element={
                <Homepage />
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
