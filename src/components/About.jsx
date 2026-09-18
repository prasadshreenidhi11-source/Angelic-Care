import "./About.css";

const services = [
  {
    icon: "👥",
    title: "Support Workers You Can Trust",
    text: "Feel better in the comfort of your own home. We specialize in in-home support and daily living assistance to an array of individuals. Whether you need daily or weekly assistance due to disability, aging, palliative care, illness, recovery, or rehabilitation, our support workers will provide an individualised service that you can trust."
  },
  {
    icon: "🤝",
    title: "Experienced and Supportive",
    text: "We understand that not one plan fits all. Daily services can include anything from meal preparation, hygiene, cleaning, transport, shopping and assistance/supervision. We take the time to get to know you and develop an individualized support plan that fits your specific needs."
  },
  {
    icon: "❤️",
    title: "Experienced Support Workers",
    text: "Companionship is key to a trusted relationship with our Support Workers. We not only strive to help you with everyday tasks but want to develop a caring relationship with you. We provide one-on-one attention and support that cannot compare in other settings."
  }
];

function About() {
  return (
    <section className="about-section">

      {/* TOP SECTION */}

      <div className="about-top">

        <div className="about-heading">

          <span className="about-label">
            About Us
          </span>

          <h2>
            Who We Are
          </h2>

          <div className="about-badge">
            <span>✦</span>
            Est 2011 - Accredited NDIS, SIL & SDA Provider
          </div>

          <p className="about-description">
            Anne's Angels is a community-focused support provider
            dedicated to helping individuals live independently
            with dignity, comfort and confidence in their own homes.
          </p>

        </div>


        {/* PHOTO */}

        <div className="about-image">

          <img
            src="/about-care.jpg"
            alt="Care worker supporting an elderly woman"
          />

          <div className="image-overlay">
            <span>CARE WITH COMPASSION</span>
          </div>

        </div>

      </div>


      {/* MARQUEE TITLE */}

      <div className="services-heading">
        <span>OUR SUPPORT</span>

        <h3>
          Care That Moves With You
        </h3>
      </div>


      {/* MARQUEE */}

      <div className="services-marquee">

        <div className="services-track">

          {[...services, ...services].map((service, index) => (

            <article
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h4>
                {service.title}
              </h4>

              <div className="card-line"></div>

              <p>
                {service.text}
              </p>

            </article>

          ))}

        </div>

      </div>


      {/* QUOTE */}

<div className="about-quote">

  <div className="anne-photo">
    <img
      src="/anne-kerr.png"
      alt="Anne Kerr - Director and Founder"
    />
  </div>

  <div className="quote-content">

    <div className="quote-mark">
      “
    </div>

    <p>
      We provide heart-led care that empowers our
      community to thrive independently at home.
    </p>

    <span>
      Anne Kerr
    </span>

    <small>
      Director & Founder
    </small>

  </div>

</div>
      
    </section>
  );
}

export default About;