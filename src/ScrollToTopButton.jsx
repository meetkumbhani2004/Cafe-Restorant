import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // One section = approx 600px (you can adjust)
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {show && (
        <button
  onClick={scrollTop}
  style={{
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#ffffff",
    color: "#000000",
    padding: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "all 0.3s ease",   
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.15)";
    e.currentTarget.style.boxShadow = "0px 6px 18px rgba(0,0,0,0.25)";
    e.currentTarget.style.background = "#f0f0f0";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "#ffffff";
  }}
>
  <ArrowUp size={20} />
</button>

      )}
    </>
  );
}
