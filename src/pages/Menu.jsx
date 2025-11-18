import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

// ---------------------- MENU DATA ---------------------- //
const menuData = [
  { title: "Chicago Pizza", price: "$25", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
  { title: "New York Pizza", price: "$30", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { title: "Vigan Pizza", price: "$27", desc: "Eiusmod tempor incididunt ut labore." },
  { title: "Double Cheese", price: "$32", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
];

const Menu = () => {
  const [offset, setOffset] = useState(0);
  const textRef = useRef(null);
  const [show, setShow] = useState(false);

  // PARALLAX SCROLL DIRECTLY TIED
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // adjust speed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TEXT REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
  }, []);

  return (
    <>
    <div className="w-full bg-black text-white">

      {/* =========================== HERO SECTION =========================== */}
      <section
        className="relative h-[580px] w-full flex items-center justify-center overflow-hidden"
      >
        {/* PARALLAX BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/menu-title-img.jpg')",
            transform: `translateY(${offset}px)`,
          }}
        ></div>

        {/* HERO TEXT */}
        <h1
          ref={textRef}
          className={`text-6xl font-bold relative z-10 transition-all duration-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Menu
        </h1>
      </section>

      {/* =========================== MENU SECTION =========================== */}
      <section className="max-w-7xl mx-auto py-20 px-20">
        <div className="text-center mb-14">
          <h5 className="p-2 uppercase tracking-widest">Our choice</h5>
          <h2 className="text-4xl font-bold">Cocktails</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-20 px-20">
        <div className="text-center mb-14">
          <h5 className="p-2 uppercase tracking-widest">We recommend</h5>
          <h2 className="text-4xl font-bold">Wine selection</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
<section className="max-w-7xl mx-auto py-20 px-20">
        <div className="text-center mb-14">
          <h5 className="p-2 uppercase tracking-widest">New arrivals</h5>
          <h2 className="text-4xl font-bold">Craft beer</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {menuData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* dotted line */}
                  <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>

                  <span className="text-xl font-semibold ">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
     <div className="relative">

  {/* FIXED BACKGROUND — yeh kabhi nahi hilega */}
  <div
    className="fixed inset-0 bg-[url('/third-frame.jpg')] bg-cover bg-center -z-10"
  ></div>

  {/* Pehla Section (Hero ya Page Section) */}
  <section className="min-h-screen flex items-center justify-center text-white">
    
  </section>
  </div>
  </>
  );
};

export default Menu;
