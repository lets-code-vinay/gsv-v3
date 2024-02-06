import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";

const Homepage = lazy(() => import("./src/pages/Homepage"));
// import ContactUs from "./Views/ContactUs";
// import ContactImage from "./Assets/Images/contact-us.svg";

function App() {
  /**
   * @description Rendering Page to the top
   */
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Use requestAnimationFrame to ensure the DOM is painted before scrolling
    window.requestAnimationFrame(scrollToTop);
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
