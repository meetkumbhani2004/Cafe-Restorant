import React from "react";

export default function Page() {


  return (
    <div className="relative bg-black text-white">
      <section
       
        className="min-h-96 py-24 px-16 bg-black "
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
