import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "./Hero.css";

export default function HeroSlider() {
  let slides = [
    { title: "Exclusive drink service", subtitle: "Cocktail stage evenings", img: "bg1.jpg", anim: "bottom" },
    { title: "Fresh handcrafted cocktails", subtitle: "A taste made for you", img: "bg2.jpg", anim: "bottom" },
    { title: "Flavours that excite", subtitle: "Let the night begin", img: "bg3.jpg", anim: "bottom" },
    { title: "Crafted with excellence", subtitle: "Taste the difference", img: "bg4.jpg", anim: "bottom" },
    { title: "Evening just got better", subtitle: "Feel the vibe", img: "bg5.jpg", anim: "right" },
    { title: "Where moments happen", subtitle: "Drink. Relax. Enjoy.", img: "bg6.jpg", anim: "right" },
  ];

  // 👉 Mobile device me only 3 slides
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) slides = slides.slice(0, 3);

  const [offset, setOffset] = useState(0);

  // PARALLAX SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2); // smaller factor for subtle parallax
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{ enabled: !isMobile }}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3500 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">

              {/* Background with scroll-tied parallax */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={slide.img}
                  className={`w-full h-full object-cover opacity-0 scale-110 ${
                    slide.anim === "bottom" ? "slide-up" : "slide-right"
                  } delay-img`}
                  style={{ transform: `translateY(${offset}px)` }} // <-- parallax effect
                />
              </div>

              {/* Text */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
                <p className={`text-lg md:text-xl italic tracking-widest ${slide.anim === "bottom" ? "text-anim-bottom" : "text-anim-right"} delay-title`}>
                  {slide.title}
                </p>
                <h1 className={`text-4xl md:text-7xl font-serif mt-4 ${slide.anim === "bottom" ? "text-anim-bottom" : "text-anim-right"} delay-sub`}>
                  {slide.subtitle}
                </h1>
                <button className={`mt-8 px-7 py-2 border border-white rounded-md text-lg hover:bg-white hover:text-black transition ${slide.anim === "bottom" ? "text-anim-bottom" : "text-anim-right"} delay-btn`}>
                  View more
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
