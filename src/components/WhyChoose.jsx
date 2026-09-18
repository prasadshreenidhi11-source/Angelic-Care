import "./WhyChoose.css";

const flipCards = [
  {
    icon: "♡",
    title: "Emotional Needs",
    description:
      "Holistic care that focuses on the heart. We provide companionship that reduces isolation and promotes happiness."
  },
  {
    icon: "⌂",
    title: "Independent Living",
    description:
      "Flexible home-care services designed to keep you in the environment you love most, supported by professionals you can trust."
  },
  {
    icon: "◎",
    title: "Our Mission",
    description:
      "To deliver compassionate, individualised support that empowers every participant to live with dignity, independence and confidence."
  },
  {
    icon: "◉",
    title: "Our Vision",
    description:
      "To be a trusted leader in quality in-home care and NDIS services, helping individuals thrive in their home and community."
  }
];

function WhyChoose() {
  return (
    <section className="why-section">

      {/* LEFT IMAGE */}

      <div className="why-image-card">

        <img
          src="/why-choose.jpg"
          alt="Support and companionship"
        />

        <div className="call-card">

          <div className="call-icon">
            ☎
          </div>

          <h3>
            Clarify Your
            <br />
            Question, Call
            <br />
            Us Now
          </h3>

          <p>
            +61 448 377 117
          </p>

        </div>

      </div>


      {/* CENTER CONTENT */}

      <div className="why-center">

        <span className="why-label">
          Why Choose Us
        </span>

        <h2>
          Your Comfort,
          <br />
          Our Priority
        </h2>

        <div className="title-line"></div>

        <p className="why-intro">
          Anne's Angels is committed to delivering
          compassionate, individualised support. We bridge
          the gap between needing assistance and
          maintaining a fulfilling, independent lifestyle
          within your own community.
        </p>


        {/* FLIP CARDS */}

        <div className="flip-card-grid">

          {flipCards.slice(0, 2).map((card, index) => (

            <div className="flip-card" key={index}>

              <div className="flip-card-inner">

                {/* FRONT */}

                <div className="flip-card-front">

                  <div className="flip-icon">
                    {card.icon}
                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <span className="hover-hint">
                    Hover to discover →
                  </span>

                </div>


                {/* BACK */}

                <div className="flip-card-back">

                  <div className="flip-icon">
                    {card.icon}
                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="why-right">

        {flipCards.slice(2).map((card, index) => (

          <div className="flip-card right-flip" key={index}>

            <div className="flip-card-inner">

              {/* FRONT */}

              <div className="flip-card-front">

                <div className="flip-icon">
                  {card.icon}
                </div>

                <h3>
                  {card.title}
                </h3>

                <span className="hover-hint">
                  Hover to discover →
                </span>

              </div>


              {/* BACK */}

              <div className="flip-card-back">

                <div className="flip-icon">
                  {card.icon}
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>

              </div>

            </div>

          </div>

        ))}


        {/* ANNE KERR */}

        <div className="anne-message">

          <div className="anne-flip-inner">

            {/* FRONT */}

            <div className="anne-front">

              <img
                src="/anne-kerr.png"
                alt="Anne Kerr"
              />

              <div>
                <h3>
                  Want to know what
                  <br />
                  Anne Kerr says?
                </h3>

                <span>
                  Hover to read →
                </span>
              </div>

            </div>


            {/* BACK */}

            <div className="anne-back">

              <div className="quote-symbol">
                “
              </div>

              <p>
                Let us help you navigate through
                the ever-changing world of NDIS
                and how you can maximise your
                supports.
              </p>

              <strong>
                Anne Kerr
              </strong>

              <small>
                Director
              </small>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;