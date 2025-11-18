import React from "react";

const Specials = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 lg:px-40">
      
      {/* Heading Section */}
      <div className="text-center mb-14">
        <p className="italic text-gray-300 text-sm md:text-base">
          This week's specials
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-tight">
          We recommend
        </h1>

        <p className="text-gray-300 max-w-xl md:max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod 
          tempor incididunt ut labore etdo.
        </p>
      </div>

      {/* Two Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left List */}
        <div className="space-y-8 md:space-y-10 px-2 md:px-6">

          {[
            { name: "Coco Spice", price: "$19", desc: "Captain Morgan spiced rum, pineapple" },
            { name: "Tequila Sunrise", price: "$14", desc: "Tequila, orange juice, grenadine" },
            { name: "Cuba Libre", price: "$22", desc: "Dark rum, fresh lime, Coke" },
            { name: "Cuba Libre", price: "$22", desc: "Dark rum, fresh lime, Coke" }
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center text-lg md:text-xl font-medium">
                <span className="whitespace-nowrap">{item.name}</span>

                <div className="flex-1 border-b border-dotted mx-3 border-gray-600"></div>

                <span className="whitespace-nowrap">{item.price}</span>
              </div>

              <p className="text-gray-300 text-sm md:text-base mt-1">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="third-frame.jpg"
            className="w-full rounded-xl shadow-lg object-cover"
            alt="Cocktail"
          />
        </div>

      </div>
    </div>
  );
};

export default Specials;
