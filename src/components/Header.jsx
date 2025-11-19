import React, { useState, useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";


export default function Header() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/menu", label: "Menu" },
    { path: "/reservations", label: "Reservations" },
    { path: "/contact", label: "Contact" },
  ];

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
      <header className="w-full pt-4"> 
  {/* pt-4 = header upar se thoda niche aa jayega */}

  <div className="container mx-auto flex items-center justify-between py-4 px-4">

    {/* MOBILE MENU BUTTON */}
    <button
      className="text-white text-3xl md:hidden"
      onClick={() => setMobileMenu(true)}
    >
      <HiMenuAlt3 />
    </button>

    {/* LOGO */}
    <Link to="/" className="text-3xl font-bold text-white">
      MK
    </Link>

    {/* DESKTOP NAVIGATION */}
    <nav className="hidden md:flex items-center gap-8 text-lg text-white">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`border-b-2 border-transparent transition-all duration-300 hover:text-yellow-300 hover:border-white
            ${location.pathname === link.path ? "border-white" : ""}
          `}
        >
          {link.label}
        </Link>
      ))}
    </nav>

    {/* RIGHT SOCIAL ICONS (DESKTOP) */}
    <div className="hidden md:flex items-center gap-4 text-white">
      <FaInstagram />
      <FaFacebookF />
      <FaTwitter />

      <button
  className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
  onClick={() => navigate("/reservations")}
>
  Book a table
</button>
    </div>

    {/* MOBILE RIGHT ICON */}
    <div className="md:hidden text-white text-xl">
      <FaInstagram />
    </div>

  </div>
</header>

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
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMobileMenu(false)}
            className={`hover:text-yellow-300 border-b-2 border-transparent
              ${location.pathname === link.path ? "border-white" : ""}
            `}
          >
            {link.label}
          </Link>
        ))}

        <button className="mt-4 px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Book a table
        </button>
      </div>
    </>
  );
}
