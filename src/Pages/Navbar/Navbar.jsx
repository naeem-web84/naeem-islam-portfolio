import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

// Replace with your actual Google Drive direct link
const directDownloadLink = "https://drive.google.com/uc?export=download&id=1IIkukodcc21zazJIzD4gXQzF-QovmhJl";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  const downloadResume = () => {
    window.open(directDownloadLink, "_blank");
  };

  return (
    <div className="navbar bg-primary text-black px-4 py-2 shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Logo />
      </div>

      {/* Center: Nav Links (visible on lg only) */}
      <div className="hidden lg:flex justify-center flex-1">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(link.to)}
                className={`cursor-pointer btn btn-sm rounded-md px-4 font-semibold border transition-colors duration-200 ${
                  active === link.to
                    ? "bg-secondary text-black border-secondary"
                    : "bg-white text-black border-gray-400 hover:bg-secondary hover:text-black hover:border-secondary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Resume Button (visible on lg only) */}
      <div className="hidden lg:flex">
        <button
          onClick={downloadResume}
          className="btn btn-sm border border-gray-400 bg-white text-black hover:bg-secondary hover:text-black hover:border-secondary transition-colors duration-200"
        >
          Download Resume
        </button>
      </div>

      {/* Mobile Menu: visible on md and below */}
      <div className="lg:hidden dropdown dropdown-end ml-auto">
        <label tabIndex={0} className="btn btn-sm btn-ghost text-secondary hover:text-secondary">
          {/* Hamburger Icon */}
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-1 text-black"
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(link.to)}
                className={`btn btn-sm text-left border w-full transition-colors duration-200 ${
                  active === link.to
                    ? "bg-secondary text-black border-secondary"
                    : "bg-white text-black border-gray-400 hover:bg-secondary hover:text-black hover:border-secondary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={downloadResume}
              className="btn btn-sm w-full border border-gray-400 bg-white text-black hover:bg-secondary hover:text-black hover:border-secondary transition-colors duration-200"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
