import React, { useState, useEffect } from "react";
import useHeaderUtils from "../hooks/useHeaderUtils";

const Navbar = () => {
  const { isMobileNavActive, toggleMobileNav } = useHeaderUtils();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define breakpoint for mobile view
  const isMobile = windowWidth < 992; // Standard Bootstrap lg breakpoint

  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <div style={{ height: "5rem" }}>
            <a href="/">
              <img
                src="assets/logo/logo.png"
                style={{ height: "4.9rem", width: "13rem" }}
                alt="Codescape Logo"
              />
            </a>
          </div>
          <nav
            id="navmenu"
            className={`navmenu ${
              isMobileNavActive && isMobile ? "active" : ""
            }`}
          >
            <ul className={isMobile ? "mobile-nav" : ""}>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            {/* Only show toggle icon on mobile when nav items exist */}
            {isMobile && (
              <i
                className={`mobile-nav-toggle bi ${
                  isMobileNavActive ? "bi-x" : "bi-list"
                }`}
                onClick={toggleMobileNav}
              />
            )}
          </nav>

          <a className="btn-getstarted" href="/about">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
