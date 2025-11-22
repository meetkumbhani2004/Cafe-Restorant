import React, { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
  let baseSlides = [
    { titleSmall: "Exclusive drink service", titleBig: "Cocktail stage evenings", img: "bg7.jpg" },
    { titleSmall: "Fresh handcrafted cocktails", titleBig: "A taste made for you", img: "bg8.jpg" },
    { titleSmall: "Flavours that excite", titleBig: "Let the night begin", img: "bg1.jpg" },
    { titleSmall: "Crafted with excellence", titleBig: "Taste the difference", img: "bg10.jpg" },
    { titleSmall: "Evening just got better", titleBig: "Feel the vibe", img: "bg9.jpg" },
    { titleSmall: "Where moments happen", titleBig: "Drink. Relax. Enjoy.", img: "bg3.jpg" },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const slides = isMobile ? baseSlides.slice(0, 3) : baseSlides;

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [showText, setShowText] = useState(false);
  const sectionRef = useRef(null);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const sectionTop = rect.top + scrollTop;
      const relativeY = scrollTop - sectionTop;

      setOffset(relativeY * 0.2); // smoother
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

      useEffect(() => {
        if (!sectionRef.current) return;
        const observer = new IntersectionObserver(
          ([entry]) => setShowText(entry.isIntersecting),
          { threshold: 0.2 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
      }, []);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden bg-black"
      ref={sectionRef}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        >
          {/* background image */}
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${offset}px)` }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
            <p
              className={`text-white text-lg md:text-xl italic mb-3 transition-all duration-700
                ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              {slide.titleSmall}
            </p>

            <h2
              className={`text-white text-4xl md:text-7xl font-serif transition-all duration-[900ms]
                ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              {slide.titleBig}
            </h2>

            <button
              className={`mt-6 px-8 py-2 border border-white text-white hover:bg-white hover:text-black 
                transition-all duration-700
                ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
            >
              View More
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all
              ${i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
