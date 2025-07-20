import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const footerNavItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/naeem-web84",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/naeem-islam-dv474/",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:naeemislam.hasan74@gmail.com",
  },
];

export default function Footer() {
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 90;
      let current = "hero";
      for (const item of footerNavItems) {
        const elem = document.getElementById(item.to);
        if (elem && scrollPos >= elem.offsetTop) {
          current = item.to;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-primary text-white border-t border-white/20 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-base cursor-pointer select-none">
          {footerNavItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onSetActive={() => setActiveLink(to)}
              className={`transition-colors duration-200 ${
                activeLink === to
                  ? "text-secondary underline decoration-2 underline-offset-4"
                  : "hover:text-secondary"
              }`}
              onClick={() => setActiveLink(to)}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end gap-6 text-2xl">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-secondary"
              aria-label={link.url}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-6 text-white/60">
        © {new Date().getFullYear()} Naeem Islam. All rights reserved.
      </div>
    </footer>
  );
}
