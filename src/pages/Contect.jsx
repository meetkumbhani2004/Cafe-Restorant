import React, { useState, useEffect, useRef } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const textRef = useRef(null);
  const [show, setShow] = useState(false);
  const [offset, setOffset] = useState(0);

  // PARALLAX SCROLL TIED TO SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // adjust speed factor
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TEXT REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Thank you for contacting us!");
    setFormData({ message: "", name: "", email: "" });
  };

  return (
    <div className="w-full bg-white">

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* PARALLAX BACKGROUND */}
        <img
          src="/bg1.jpg"
          alt="contact"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ transform: `translateY(${offset}px)` }}
        />

        {/* OPTIONAL OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* HERO TEXT */}
        <h1
          ref={textRef}
          className={`relative text-white text-4xl md:text-6xl tracking-wide transition-all duration-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contact
        </h1>
      </section>


      {/* ---------- MAIN CONTACT SECTION ---------- */}
      <div className="w-full bg-black py-16 px-6 md:px-20 lg:px-28">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 max-w-7xl mx-auto">

          {/* Left Side */}
          <div className="space-y-8 text-white">

            <p className="text-sm tracking-widest italic">Contact us</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
              Get in touch
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1" />
                <p className="text-lg">Mon-Sun: 9 am - 9 pm</p>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" />
                <p className="text-lg">01 Ambika Park, Surat, Gujarat</p>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" />
                <p className="text-lg">301-382-4311, 301-461-9671</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6 text-white">

            {/* Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                rows="6"
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full bg-transparent border px-6 py-4 
                  transition-colors outline-none
                  ${errors.message ? "border-red-500" : "border-[#828282] focus:border-white"}
                `}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full bg-transparent border px-6 py-4 
                  transition-colors outline-none
                  ${errors.name ? "border-red-500" : "border-[#828282] focus:border-white"}
                `}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail"
                className={`w-full bg-transparent border px-6 py-4 
                  transition-colors outline-none
                  ${errors.email ? "border-red-500" : "border-[#828282] focus:border-white"}
                `}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="border-2 border-white px-12 py-4 hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wider"
            >
              Submit
            </button>
          </div>

        </div>
      </div>

      {/* ---------- GOOGLE MAP SECTION ---------- */}
      <div className="w-full h-[350px] md:h-[450px]">
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
