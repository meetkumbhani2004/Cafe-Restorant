import React, { useState, useEffect,useRef } from "react";

export default function HeroSlider() {
  const slides = [
        { titleSmall: "Exclusive drink service", titleBig: "Cocktail stage evenings", img: "bg7.jpg" },
    { titleSmall: "Fresh handcrafted cocktails", titleBig: "A taste made for you", img: "bg8.jpg" },
    { titleSmall: "Flavours that excite", titleBig: "Let the night begin", img: "bg1.jpg" },
    { titleSmall: "Crafted with excellence", titleBig: "Taste the difference", img: "bg10.jpg" },
    { titleSmall: "Evening just got better", titleBig: "Feel the vibe", img: "bg9.jpg" },
    { titleSmall: "Where moments happen", titleBig: "Drink. Relax. Enjoy.", img: "bg3.jpg" },


  ];

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);


      useEffect(() => {
        const handleScroll = () => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollTop = window.scrollY;
          const sectionTop = rect.top + scrollTop;
          const relativeY = scrollTop - sectionTop;
          setOffset(relativeY * 0.3); // parallax speed factor
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      // IntersectionObserver for text reveal
      useEffect(() => {
        if (!sectionRef.current) return;
        const observer = new IntersectionObserver(
          ([entry]) => setShowText(entry.isIntersecting),
          { threshold: 0.3 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
      }, []);


  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 👇 Direction Logic
const getDirection = (i) => {
  const lastTwo = [slides.length - 1, slides.length - 2];
  return lastTwo.includes(i) ? "translate-x-full" : "-translate-x-10";
};


  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black"
    ref={sectionRef}
    >
      {slides.map((slide, i) => {
        const direction = getDirection(i);

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-out
              ${i === index ? "opacity-100 translate-x-0" : `opacity-0 ${direction}`}
            `}
          >
            {/* <img src={slide.img} className="w-full h-full object-cover" /> */}
            <div
  className={`
    transition-all
    ease-out
    ${i === index ? "translate-x-0 opacity-100" : getDirection(i)}
  `}
>
<div className="w-full h-full flex items-center justify-center bg-black">
  <img
    src={slide.img}
    alt=""
    className="max-w-full max-h-full object-contain"
    style={{ transform: `translateY(${offset}px)` }}
  />
</div>
</div>


            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
              <p
  className={`
    text-white text-xl italic mb-4
    transition-all duration-[1s] ease-out
    ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
  `}
>
  {slide.titleSmall}
</p>


              <h2
                className={`text-white text-5xl md:text-7xl font-serif    transition-all duration-[2s] ease-out
    ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                `}
              >
                {slide.titleBig}
              </h2>

              <button
                className={`mt-8 px-10 py-2 border border-white text-white hover:bg-white hover:text-black     transition-all duration-[4s] ease-out
    ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 " }
                `}
              >
                View More
              </button>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all 
              ${i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white scale-100"}
            `}
          />
        ))}
      </div>
    </div>
  );
}