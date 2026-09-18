import "./Services.css";

const services = [
  {
    title: "Assistance with Self-Care Services",
    description:
      "Personalized support for daily tasks like hygiene, dressing, and meal preparation to maintain your personal well-being.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Nursing",
    description:
      "Professional clinical care delivered in your home, focusing on health management, medication, and wound care recovery.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "NDIS Support Coordination",
    description:
      "Expert guidance to help you understand your NDIS plan and connect with the best local service providers.",
    image:
      "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Supported Independent Living",
    description:
      "24/7 assistance in a shared living environment, helping you build life skills while living safely and independently.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "In-home Support",
    description:
      "Practical help with household chores, shopping, and companionship to keep you comfortable and active at home.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SIL & SDA Accommodation & Support",
    description:
      "Specialist housing solutions and high-intensity support tailored for participants with complex physical or functional needs.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
];

function Services() {
  return (
    <section className="services-section">

      <div className="services-heading">
        <span>Our Services</span>

        <h2>
          We offer an <strong>individualised</strong> services
        </h2>

        <p>
          All our staff are qualified and highly trained. Anne’s Angels is
          an approved and Registered NDIS Provider, but we can offer our
          services to the general public.
        </p>
      </div>

      <div className="services-marquee">

        <div className="services-track">

          {[...services, ...services].map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-card-inner">

                {/* FRONT */}
                <div
                  className="service-front"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="service-overlay"></div>

                  <h3>{service.title}</h3>

                  <span className="service-arrow">
                    →
                  </span>
                </div>

                {/* BACK */}
                <div className="service-back">

                  <div className="back-icon">
                    ✦
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;