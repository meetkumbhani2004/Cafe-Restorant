import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT: BRAND + INFO */}
        <div>
          <h2 className="text-4xl font-serif text-white mb-4">MK</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consect etur dip isicing elit, sed do
            eiusmod.
          </p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaClock className="text-white" />
              Mon–Sun: 09am - 09pm
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              01 Ambika Park, Surat, Gujarat, India
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              301-382-4311, 301-461-9671
            </p>
          </div>
        </div>

        {/* PAGES LIST */}
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">Pages</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Reservations</li>
            <li className="hover:text-white transition">Menu</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* OPENING HOURS */}
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">Opening hours</h3>

          <p className="text-gray-400 mb-4">
            Monday – Friday:<br />
            <span className="text-white">10:00am – 01:00am</span>
          </p>

          <p className="text-gray-400">
            Saturday – Sunday:<br />
            <span className="text-white">10:00am – 03:00am</span>
          </p>
        </div>

        {/* INSTAGRAM SECTION */}
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">Instagram</h3>

        </div>

      </div>

      {/* COPYRIGHT LINE */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © 2025 MK Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
