import React from "react";
import About from "./About";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Pricing from "./Pricing";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="company-badge mb-4">
                  <i className="bi bi-gear-fill me-2"></i>
                  Working for your success
                </div>

                <h1 className="mb-4">
                  Our Main Goal to Satisfied Local & Global Clients <br />
                  {/* <br /> */}
                  <span className="accent-text">
                    Experience real-world projects, skill development, and
                    teamwork in a nurturing remote work environment.
                  </span>
                </h1>

                <p className="mb-4 mb-md-5">
                  Take a peek behind the curtain and explore the custom web
                  design process our team follows. We build custom sites for
                  brands of all sizes that deliver measurable results.
                </p>

                <div className="hero-buttons">
                  <a
                    href="#about"
                    className="btn btn-primary me-0 me-sm-2 mx-1"
                  >
                    Get Started
                  </a>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="btn btn-link mt-2 mt-sm-0 glightbox"
                  >
                    <i className="bi bi-play-circle me-1"></i>
                    Play Video
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="hero-image"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src="assets/img/illustration-1.webp"
                  alt="Hero Image"
                  className="img-fluid"
                />

                <div className="customers-badge">
                  <div className="customer-avatars">
                    <img
                      src="assets/img/avatar-1.webp"
                      alt="Customer 1"
                      className="avatar"
                    />
                    <img
                      src="assets/img/avatar-2.webp"
                      alt="Customer 2"
                      className="avatar"
                    />
                    <img
                      src="assets/img/avatar-3.webp"
                      alt="Customer 3"
                      className="avatar"
                    />
                    <img
                      src="assets/img/avatar-4.webp"
                      alt="Customer 4"
                      className="avatar"
                    />
                    <img
                      src="assets/img/avatar-5.webp"
                      alt="Customer 5"
                      className="avatar"
                    />
                    <span className="avatar more">12+</span>
                  </div>
                  {/* <p className="mb-0 mt-2">
                    12,000+ lorem ipsum dolor sit amet consectetur adipiscing
                    elit
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="row stats-row gy-4 mt-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <div className="stat-content">
                  <h4>70+ Projects Developed</h4>
                  {/* <p className="mb-0">12 + Developers</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <div className="stat-content">
                  <h4>12+</h4>
                  <p className="mb-0"> year Indresty</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="stat-content">
                  <h4>Grow the Business</h4>
                  {/* <p className="mb-0">Etiam sit amet orci</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-award"></i>
                </div>
                <div className="stat-content">
                  <h4>On time Delevery</h4>
                  {/* <p className="mb-0">Vestibulum ante ipsum</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section  */}

      {/* About Section */}
      <About />
      {/* About Section */}

      {/* Features Section */}
      <Features />
      {/* Features Section */}

      {/* Call to Action Section */}
      <CallToAction
        id="cta-light"
        title="Why seek support with web development?"
        description="Businesses that we’ve worked with reported faster time-to-market, premium user experience, and flawless performance. We build web solutions"
        buttonText="Get Started"
        buttonLink="/contact"
      />
      {/* Call to Action Section */}

      {/* clients section */}
      {/* <Clients /> */}
      {/* clients section */}

      {/* Testimonials section */}
      <Testimonials />
      {/* Testimonials section */}

      {/* States section */}
      {/* <StatesPart /> */}
      {/* States section */}

      {/* Services section */}
      <Services />
      {/* Services section */}

      {/* Pricing section */}
      <Pricing />
      {/* Pricing section */}

      {/* Faq Section */}
      {/* <Faq /> */}
      {/* Faq Section */}

      {/* Call to Action Section */}
      <CallToAction
        id="cta-dark"
        title="Technologies we leverage"
        description="angular, vue-js, next-js, node-js, python, java, ruby, react-js, redux-Toolkit"
        buttonText="Learn More"
        buttonLink="#"
        darkBackground={true}
        shapes={false}
      />
      {/* Call to Action Section */}

      {/* Contact section */}
      <Contact />
      {/* Contact section */}
    </>
  );
};

export default Home;
