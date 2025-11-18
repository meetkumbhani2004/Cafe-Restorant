import React, { useRef, useState, useEffect } from "react";

export default function Page() {
  const ref = useRef();
  const [overlap, setOverlap] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      // Jab page section screen me aaye → background niche chala jaye
      if (entry.isIntersecting) {
        setOverlap(true);
      } 
      // Jab page section screen se bahar ho → background upar aa jaye
      else {
        setOverlap(false);
      }
    });

    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <div className="relative bg-black text-white">
      {/* 🔴 PAGE SECTION (Jo upar chadhta hai) */}
      <section
        ref={ref}
        className={`min-h-screen pt-24 bg-black relative
    
        ${overlap ? "translate-y-0" : "translate-y-20 opacity-0"}
        ${overlap ? "z-20" : "z-0"}  /* 👈 Jab visible ho tab upar aaye */
      `}
      >

        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

            {/* LEFT */}
            <div>
              <p className="italic text-lg">Visit a bar</p>
              <h2 className="text-4xl font-serif mt-2">Open hours</h2>
              <div className="mt-6 space-y-4 text-white">
                <p>Monday–Friday:<br/> 4 PM – 1 AM</p>
                <p>Saturday: <br/>4 PM – 3 AM</p>
                <p>Sunday:<br/> 4 PM – 2 AM</p>
              </div>
              <button className="
                mt-8 px-6 py-3 
                border-b-2 border-transparent   
                hover:border-white 
                transition-all duration-300
              ">
                Visit us
              </button>
            </div>

            {/* IMAGE */}
            <div>
              <img src="second-frame.jpg" className="rounded-xl shadow-lg" />
            </div>

            {/* RIGHT */}
            <div>
              <p className="italic text-lg">The best offer</p>
              <h2 className="text-4xl font-serif mt-2">Happy hour</h2>
              <div className="mt-6 space-y-3 text-white">
                <p>Monday-Sunday <br />4 PM – 7 PM (Daily)</p>
                <p>20% off all wine by the glass <br />15% off cocktails</p>
                
                <p>25% off craft beer <br/>10% off spirits</p>
               <button className="
                mt-8 px-6 py-3 
                border-b-2 border-transparent   
                hover:border-white 
                transition-all duration-300
              ">
                Visit us
              </button>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
