import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHero({ imageUrl, children }) {
  const { scrollY } = useScroll();
  // Scroll value ko transform karo: scroll ke saath translateY
  const y = useTransform(scrollY, [0, 500], [0, -200]); // adjust values as needed

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y ,backgroundImage: `url(${imageUrl})` }}
        className="absolute inset-0 bg-cover bg-center" 
        // Tailwind bg image via inline style:
        
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
