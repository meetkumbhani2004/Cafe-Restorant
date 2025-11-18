import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [show, setShow] = useState(false);

  // PARALLAX DIRECTLY TIED TO SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // adjust speed factor here
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TEXT REVEAL ON SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
  }, []);

  return (
    <div className="w-full bg-black text-white" id="about">

      {/* HERO SECTION */}
      <section className="relative w-full h-[580px] overflow-hidden flex items-center justify-center">
        {/* BACKGROUND IMAGE PARALLAX */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/about-title-img.jpg')",
            transform: `translateY(${offset}px)`,
          }}
        ></div>

        {/* TEXT */}
        <h1
          ref={textRef}
          className={`text-6xl font-bold relative z-10 transition-all duration-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About
        </h1>
      </section>

      {/* --------------------------- OUR STORY SECTION --------------------------- */}
      <section className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12 items-center ">
        <img
          src="https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/about-img-1.jpg"
          alt="About"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h5 className="text-yellow-400 uppercase tracking-widest mb-2">
            Behind the scene
          </h5>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-300 transition">
            View More
          </button>
        </div>
      </section>

      {/* --------------------------- VIDEO SECTION --------------------------- */}
      <section className="w-full flex justify-center py-20 px-4">
        <a
          href="https://vimeo.com/132210258"
          target="_blank"
          rel="noreferrer"
          className="relative group"
        >
          <img
            src="/bg2.jpg"
            alt="video"
            className="rounded-lg shadow-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition">
              <div className="w-0 h-0 border-l-[18px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </a>
      </section>


    </div>
  );
};

export default About;
