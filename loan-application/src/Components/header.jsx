import React, { useState, useEffect } from "react";
import Logo from "../Assests/Logo.svg";
import ProfileIcon from "../Assests/Profile icon.svg";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "bg-dark1 opacity-100" : "bg-dark1 opacity-68"
      } fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between transition-opacity duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto mr-4 ml-32" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center space-x-4 mr-32">
          <li>
            <a href="/" className="text-white font-semibold px-8">
              Home
            </a>
          </li>
          <li>
            <a href="/loan" className="text-white font-semibold px-8">
              Loan
            </a>
          </li>
          <li>
            <a href="/about" className="text-white font-semibold px-8">
              About Us
            </a>
          </li>
          <li className="px-8">
            <button className="border-2 border-white text-white font-semibold py-2 px-7 rounded-md">
              Get Started
            </button>
          </li>
          <li>
            <img
              src={ProfileIcon}
              alt="Profile"
              className="h-12 w-auto rounded-full"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
