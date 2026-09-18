import React from "react";
import "./WhereToStart.css";

const WhereToStart = () => {
  return (
    <section className="where-start">

      {/* Background overlay */}
      <div className="where-overlay"></div>

      <div className="where-container">

        {/* TOP CONTENT */}
        <div className="where-top">

          <div className="where-label">
            <span></span>
            Where To Start
          </div>

          <h2>
            Make Your First Steps
            <br />
            Towards <span>Better Living.</span>
          </h2>

          <div className="heart-line">
            〰♡〰
          </div>

          <p>
            Our team is ready to listen and help. Reach out today
            <br className="desktop-break" />
            for a friendly chat about your unique care needs.
          </p>

        </div>


        {/* CONTACT CARD */}
        <div className="contact-card">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="icon-circle">
              💬
            </div>

            <h3>
              Contact us For More
              <br />
              Information or to
              <br />
              <span>Book our Care.</span>
            </h3>

            <div className="divider"></div>

            <div className="contact-details">

              <div className="detail">
                <div className="small-icon">☎</div>

                <div>
                  <strong>Call Us</strong>
                  <p>(07) 1234 5678</p>
                </div>
              </div>


              <div className="vertical-line"></div>


              <div className="detail">
                <div className="small-icon">✉</div>

                <div>
                  <strong>Email Us</strong>
                  <p>info@annesangels.com.au</p>
                </div>
              </div>


              <div className="vertical-line"></div>


              <div className="detail">
                <div className="small-icon">◷</div>

                <div>
                  <strong>Office Hours</strong>
                  <p>Mon - Fri&nbsp; | &nbsp;8:00am - 5:00pm</p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="contact-right">

            <div className="location-icon">
              📍
            </div>

            <h4>Our Location</h4>

            <p className="address">
              10 Krefter Crescent, Highfields,
              <br />
              QLD, Australia, Queensland
            </p>

            <button className="contact-button">
              Contact Now
              <span>→</span>
            </button>

            <div className="signature">
              We're here for you! ♡
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhereToStart;