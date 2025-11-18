import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Hide Header On Scroll Down
  const controlHeader = () => {
    if (window.scrollY > lastScrollY) setShowHeader(false);
    else setShowHeader(true);

    setLastScrollY(window.scrollY);
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          bg-black 
          ${scrolled ? "md:bg-black/80 md:backdrop-blur-md" : "md:bg-transparent"}
        `}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4">

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setMobileMenu(true)}
          >
            <HiMenuAlt3 />
          </button>

          {/* LOGO */}
          <a href="/" className="text-3xl font-bold text-white">
            MK
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-lg text-white">
            <a href="/" className="hover:text-yellow-300   border-b-2 border-transparent hover:border-white transition-all duration-300">Home</a>
            <a href="/about" className="hover:text-yellow-300 border-b-2 border-transparent hover:border-white transition-all duration-300">About</a>
            <a href="/menu" className="hover:text-yellow-300 border-b-2 border-transparent hover:border-white transition-all duration-300">Menu</a>
            <a href="/reservations" className="hover:text-yellow-300 border-b-2 border-transparent hover:border-white transition-all duration-300">Reservations</a>
            <a href="/contact" className="hover:text-yellow-300 border-b-2 border-transparent hover:border-white transition-all duration-300">Contact</a>
          </nav>

          {/* RIGHT SOCIAL ICONS (DESKTOP) */}
          <div className="hidden md:flex gap-4 text-white">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
         

          {/* SINGLE ICON (MOBILE RIGHT SIDE) */}
          <div className="md:hidden text-white text-xl">
            <FaInstagram />
          </div>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`fixed left-0 w-full h-[60vh] bg-black text-white z-40
          flex flex-col items-start px-6 pt-12 space-y-5 text-base font-light 
          transition-all duration-500
          ${mobileMenu ? "top-[65px] opacity-100" : "-top-full opacity-0"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setMobileMenu(false)}
        >
          <HiX />
        </button>

        {/* MOBILE LINKS */}
        <a href="/" className="hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Home</a>
        <a href="/about" className="hover:text-yellow-300" onClick={() => setMobileMenu(false)}>About</a>
        <a href="/menu" className="hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Menu</a>
        <a href="/reservations" className="hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Reservations</a>
        <a href="/contact" className="hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Contact</a>

        <button className="mt-4 px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Book a table
        </button>
      </div>
    </>
  );
}
