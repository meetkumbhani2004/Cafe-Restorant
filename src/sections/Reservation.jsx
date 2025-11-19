import React, { useState } from 'react'
import { Users, Calendar, Clock } from "lucide-react";
import toast from "react-hot-toast";

const Reservation = () => {
  const [person, setPerson] = useState("1 Person");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!date || !time) {
      toast.error("Please select date and time");
      return;
    }

    toast.success(`Reservation confirmed for ${person} on ${date} at ${time}`);
  };

  return (
    <div className="w-full flex justify-center bg-black text-white py-10">
      
      {/* Inner Box */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-3 md:gap-4 
                      bg-black/40 p-5 md:p-6 rounded-xl backdrop-blur-lg">

        {/* Person */}
        <div className="group relative border border-white/40 px-4 py-3 rounded-lg w-full md:w-auto 
                        hover:border-white transition-all duration-300 bg-black/20">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-white/70 group-hover:text-white" />
            <select
              className="bg-transparent w-full outline-none cursor-pointer appearance-none text-white"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
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
        <div className="group relative border border-white/40 px-4 py-3 rounded-lg w-full md:w-auto 
                        hover:border-white transition-all duration-300 bg-black/20">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-white/70 group-hover:text-white" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent w-full outline-none cursor-pointer text-white"
            />
          </div>
        </div>

        {/* Time */}
        <div className="group relative border border-white/40 px-4 py-3 rounded-lg w-full md:w-auto 
                        hover:border-white transition-all duration-300 bg-black/20">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-white/70 group-hover:text-white" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-transparent w-full outline-none cursor-pointer text-white"
            />
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={handleBooking}
          className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black 
                     transition-all duration-300 font-medium tracking-wide hover:scale-[1.03]
                     w-full md:w-auto"
        >
          Book a Table
        </button>

      </div>
    </div>
  );
}

export default Reservation;
