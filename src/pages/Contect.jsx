import React, { useState, useEffect, useRef } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";

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

  // PARALLAX
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.3);
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
      toast.error("Please fill out all required fields");
      return;
    }

    toast.success("Thank you for contacting us!");
    setFormData({ message: "", name: "", email: "" });
  };

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/bg1.jpg"
          alt="contact"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ transform: `translateY(${offset}px)` }}
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <h1
          ref={textRef}
          className={`relative text-white text-4xl md:text-6xl tracking-wide transition-all duration-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contact
        </h1>
      </section>

      {/* MAIN CONTACT SECTION */}
      <div className="w-full bg-black py-16 px-6 md:px-20 lg:px-28">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 max-w-7xl mx-auto">
          
          {/* LEFT SIDE */}
          <div className="space-y-8 text-white">
            <p className="text-sm tracking-widest italic">Contact us</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
              Get in touch
            </h1>
            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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

          {/* RIGHT SIDE FORM */}
          <div className="space-y-6 text-white">

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                rows="6"
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full bg-transparent border px-6 py-4 outline-none transition-colors
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
                className={`w-full bg-transparent border px-6 py-4 outline-none transition-colors
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
                className={`w-full bg-transparent border px-6 py-4 outline-none transition-colors
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

      {/* MAP */}
      <div className="w-full h-[350px] md:h-[450px]">
        <iframe
          title="google-map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.070254033463!2d72.89369464442747!3d21.2256051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc031221a5f%3A0xc7c9f86cd0087785!2sCookEr&#39;s%20Eatery%20%7C%20best%20cafe%20in%20varachha!5e1!3m2!1sen!2sin!4v1763530424042!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
