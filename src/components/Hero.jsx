import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = window.scrollY;
      const maxScroll = window.innerHeight;

      const value = Math.min(scrollAmount / maxScroll, 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="hero-page">

      {/* HERO IMAGE */}
      <div className="hero-stage">

        <img
          src="/hero.png"
          alt="Nurse holding a laptop"
          className="hero-photo"
          style={{
            transform: `
              scale(${1 + progress * 2.2})
              translateY(${progress * 4}%)
            `,
          }}
        />

        {/* Navigation */}
        <nav className="navbar">

          <div className="logo">
            Anne's Angels
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">NDIS Info</a>
            <a href="#">Contact</a>
          </div>

          <button className="contact-btn">
            Get In Touch
          </button>

        </nav>

        {/* Initial hero text */}
        <div
          className="hero-intro"
          style={{
            opacity: 1 - progress * 2,
          }}
        >
          <span>CARE YOU CAN TRUST</span>

          <h1>
            Supporting You To Live
            <br />
            <strong>Independently</strong> With Dignity
          </h1>

          <p>
            We provide compassionate, high-quality support
            services tailored to your needs.
          </p>

          <button>
            Learn More →
          </button>
        </div>


        {/* Laptop screen message */}
        <div
          className="laptop-message"
          style={{
            opacity: Math.max(0, (progress - 0.35) * 2),
            transform: `
              translate(-50%, -50%)
              scale(${0.7 + progress * 0.5})
            `,
          }}
        >

          <h2>
            Registered
            <br />
            NDIS provider
          </h2>

          <div className="message-line">
            <span></span>
            <b>♥</b>
            <span></span>
          </div>

          <p>
            To help you live independently in your own home
            individualised high-quality personal support.
          </p>

          <p>
            Registered NDIS provider who provide disability
            services SIL and SDA Residences.
          </p>

        </div>


        {/* Scroll indicator */}
        <div
          className="scroll-down"
          style={{
            opacity: 1 - progress,
          }}
        >
          <span>↓</span>
        </div>

      </div>

    </main>
  );
}

export default Hero;