import React, { useRef, useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

const Specials = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    });

    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`bg-black text-white py-20 px-40 transition-all duration-700 
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="italic text-gray-300">This week's specials</p>
          <h1 className="text-4xl md:text-6xl font-medium mt-3">We recommend</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor
            incididunt ut labore etdo.
          </p>
        </div>

        {/* Two Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left List */}
          <div className="space-y-10 px-10">
            {/* Item 1 */}
            <div>
              <div className="flex justify-between text-xl font-medium ">
                <span>Coco Spice</span>
                <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>
                <span>$19</span>
              </div>
              <p className=" mt-1">Captain Morgan spiced rum, pineapple</p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex justify-between text-xl font-medium">
                <span>Tequila Sunrise</span>
                <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>
                <span>$14</span>
              </div>
              <p className=" mt-1">Tequila, orange juice, grenadine</p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex justify-between text-xl font-medium">
                <span>Cuba Libre</span>
                <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>
                <span>$22</span>
              </div>
              <p className=" mt-1">Dark rum, fresh lime, Coke</p>
            </div>

            {/* Item 4 */}
            <div>
              <div className="flex justify-between text-xl font-medium">
                <span>Cuba Libre</span>
                <div className="flex-1 border-b border-dotted mx-4 border-gray-600"></div>
                <span>$22</span>
              </div>
              <p className=" mt-1">Dark rum, fresh lime, Coke</p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="third-frame.jpg"
              className="w-full rounded shadow-lg"
              alt="Cocktail"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specials;
