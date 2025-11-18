import React, { useState } from "react";
import { Users, Calendar, Clock, ShoppingBag } from "lucide-react";

const Reservations = () => {
  const [person, setPerson] = useState("1 Person");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    alert(`Reservation confirmed for ${person} on ${date} at ${time}`);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
        alt="Restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center mb-12">
       
          <h1 className="text-6xl md:text-7xl font-serif mb-4">
            Reservations
          </h1>
         
        </div>

       {/* Form Box */}
<div className="flex flex-col md:flex-row items-stretch gap-4 w-full max-w-5xl px-2">

  {/* Person */}
  <div className="group flex-1 border border-white/40 px-4 py-3 rounded-lg 
                  hover:border-white transition-all duration-300 bg-black/20">
    <div className="flex items-center gap-2">
      <Users className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
      <select
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="bg-transparent w-full outline-none cursor-pointer text-white text-sm"
      >
        <option>1 Person</option>
        <option>2 People</option>
        <option>3 People</option>
        <option>4 People</option>
        <option>5 People</option>
        <option>6 People</option>
        <option>7+ People</option>
      </select>
    </div>
  </div>

  {/* Date */}
  <div className="group flex-1 border border-white/40 px-4 py-3 rounded-lg 
                  hover:border-white transition-all duration-300 bg-black/20">
    <div className="flex items-center gap-2">
      <Calendar className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="bg-transparent w-full outline-none cursor-pointer text-white text-sm"
      />
    </div>
  </div>

  {/* Time */}
  <div className="group flex-1 border border-white/40 px-4 py-3 rounded-lg 
                  hover:border-white transition-all duration-300 bg-black/20">
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="bg-transparent w-full outline-none cursor-pointer text-white text-sm"
      />
    </div>
  </div>

  {/* Button */}
  <button
    onClick={handleBooking}
    className="flex-1 md:flex-none border-2 border-white px-6 py-3 rounded-lg 
               hover:bg-white hover:text-black transition-all duration-300 
               font-medium tracking-wide hover:scale-[1.03] text-sm text-center"
  >
    Book a Table
  </button>

</div>


        {/* Additional Info */}
        
      </div>

     
    </div>
  );
};

export default Reservations;