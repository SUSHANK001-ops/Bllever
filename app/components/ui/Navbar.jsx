"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "#about",
      dropdown: [
        { name: "Why Us?", href: "#about" },
        { name: "Our Approach", href: "#our-approach" },
        { name: "Our Concern", href: "#about" },
        { name: "Our Procedure", href: "#about" },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        { name: "Research based Products", href: "/solutions" },
        { name: "Ai Research", href: "/solutions" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleMouseEnter = (index, hasDropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    if (hasDropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  const handleSmoothScroll = (href, e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  const handleDropdownClick = (e, item, index) => {
    if (item.dropdown) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === index ? null : index);
    } else {
      handleSmoothScroll(item.href, e);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200/60 py-2"
          : "bg-blue-900/30 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Simple Logo without glow */}
          <div className="flex-shrink-0 relative">
            <div className="transition-transform duration-300 hover:scale-105">
              <Image
                src="/bellever_logo.png"
                alt="Blue Leverage"
                width={220}
                height={70}
                className="h-12 w-auto transition-all duration-300"
                priority
              />
            </div>
          </div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index, !!item.dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.dropdown ? "#" : item.href}
                  onClick={(e) => handleDropdownClick(e, item, index)}
                  className={`text-sm font-medium transition-all duration-300 relative py-3 px-4 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {/* <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        isScrolled ? 'bg-blue-600' : 'bg-white'
                                    }`}></span> */}
                  </span>
                </a>

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-white/98 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/60 py-2 transform transition-all duration-300 ease-out"
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute -top-1 left-6 w-3 h-3 bg-white border-l border-t border-gray-200/60 transform rotate-45" />
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropdownItem.href}
                        onClick={(e) =>
                          handleSmoothScroll(dropdownItem.href, e)
                        }
                        className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 mx-2 rounded-lg relative group/item"
                      >
                        <span className="relative z-10 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                          {dropdownItem.name}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 bg-white/80 backdrop-blur-sm shadow-lg"
                  : "text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pt-4 pb-4 space-y-2 bg-white/98 backdrop-blur-lg mt-4 rounded-xl shadow-xl border border-gray-200/60">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.dropdown ? "#" : item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 relative"
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setActiveDropdown(
                        activeDropdown === index ? null : index
                      );
                    } else {
                      handleSmoothScroll(item.href, e);
                    }
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </a>

                {/* Enhanced Mobile Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="pl-4 space-y-1 mt-2 border-l-2 border-blue-200 ml-4">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropdownItem.href}
                        onClick={(e) =>
                          handleSmoothScroll(dropdownItem.href, e)
                        }
                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
