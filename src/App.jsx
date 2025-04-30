import React, { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
import MacBook from "./components/MacBook";
import Watch from "./components/Watch";
import IMac from "./components/IMac";
import PageTransition from "./components/PageTransition";

export default function App() {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize"), handleResize;
  }, []);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };
  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const resetPage = () => {
    setActivePage(0);
  };
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[85vw] max-w-[90vw] max-h-[90vh] border border-green-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
          activePage={activePage}
          handleNavClick={handleNavClick}
        />
        <Controls
          resetPage={resetPage}
          activePage={activePage}
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
        />
        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <Iphone />
            <MacBook />
            <Watch />
            <IMac />
          </PageTransition>
        </div>
      </div>
    </div>
  );
}
