import React from "react";
import FeaturesCardPart from "../Components/FeaturesCardPart";

const Features = () => {
  return (
    <div>
      {/* Feature Section */}
      <section id="features" class="features section">
        {/* Section Title */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            We don't stop at website creation; we enhance your services with
            added value..
          </p>
        </div>
        {/* End Section Title */}

        <div class="container">
          <div class="d-flex justify-content-center">
            <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li class="nav-item">
                <a
                  class="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <h4>Modisit</h4>
                </a>
              </li>
              {/* End tab nav item */}

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>Praesenti</h4>
                </a>
                {/* End tab nav item */}
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <h4>Explica</h4>
                </a>
              </li>
              {/* End tab nav item */}
            </ul>
          </div>

          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-1">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>
                    We are Committed to delivering outstanding, top-tier website
                    services, covering every aspect comprehensively, from A to
                    Z.
                  </h3>
                  <p class="fst-italic">Why us _</p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>Speedy Delivery (7 days)</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>User Friendly Backend</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>Web Maintenance</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-illustration-1.webp"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}

            <div class="tab-pane fade" id="features-tab-2">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>
                    Custom B2C, B2B and eCommerce solutions optimized for
                    traffic, engagement and conversion.
                  </h3>
                  <p class="fst-italic">Website Redesign</p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Whether you need a design refresh or a complete website
                        overhaul, we analyze your site’s pain points and
                        opportunities to revitalize your digital presence. Our
                        award-winning web designers will breathe new life into
                        your website, enhancing its functionality, user
                        experience, and aesthetic appeal. The result? A modern,
                        dynamic site that drives increased traffic and bolsters
                        your industry reputation.
                      </span>
                    </li>
                    {/* <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li> */}
                    {/* <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li> */}
                    {/* <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li> */}
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-illustration-2.webp"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}
            {/*  */}

            <div class="tab-pane fade" id="features-tab-3">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Search Engine Optimization</h3>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        We offer a comprehensive range of services designed to
                        boost your website’s ranking and attract organic,
                        non-paid Google search traffic. Our team can conduct a
                        thorough SEO audit of your website, providing actionable
                        insights and strategies to enhance your organic reach
                        and visibility on search engines.
                      </span>
                    </li>
                    {/* <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li> */}
                    {/* <li>
                      <i class="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li> */}
                  </ul>
                  <p class="fst-italic">
                    What our clients LOVE about our work
                    <br />
                    The Digital Silk team was great. Their overall quality of
                    work is second to none
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-illustration-3.webp"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* End tab content item */}
          </div>
        </div>
      </section>
      {/* Feature Section */}

      {/* Features Card Part */}
      <FeaturesCardPart />
      {/* Features Card Part */}

      {/* Features 2 section */}
      <section id="features-2" class="features-2 section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div
                class="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div class="d-flex align-items-center justify-content-end gap-4">
                  <div class="feature-content">
                    <h3>Use On Any Device</h3>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; In ac dui quis mi
                      consectetuer lacinia.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-display"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}

              <div
                class="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div class="d-flex align-items-center justify-content-end gap-4">
                  <div class="feature-content">
                    <h3>Feather Icons</h3>
                    <p>
                      Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus
                      vestibulum volutpat sapien arcu sed augue aliquam erat
                      volutpat.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-feather"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}

              <div
                class="feature-item text-end"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div class="d-flex align-items-center justify-content-end gap-4">
                  <div class="feature-content">
                    <h3>Retina Ready</h3>
                    <p>
                      Aenean tellus metus bibendum sed posuere ac mattis non
                      nunc vestibulum fringilla purus sit amet fermentum aenean
                      commodo.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-eye"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
            </div>

            <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="phone-mockup text-center">
                <img
                  src="assets/img/phone-app-screen.webp"
                  alt="Phone Mockup"
                  class="img-fluid"
                />
              </div>
            </div>
            {/* End Phone Mockup */}

            <div class="col-lg-4">
              <div
                class="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div class="d-flex align-items-center gap-4">
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-code-square"></i>
                  </div>
                  <div class="feature-content">
                    <h3>W3c Valid Code</h3>
                    <p>
                      Donec vitae sapien ut libero venenatis faucibus nullam
                      quis ante etiam sit amet orci eget eros faucibus
                      tincidunt.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}

              <div
                class="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div class="d-flex align-items-center gap-4">
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-phone"></i>
                  </div>
                  <div class="feature-content">
                    <h3>Fully Responsive</h3>
                    <p>
                      Maecenas tempus tellus eget condimentum rhoncus sem quam
                      semper libero sit amet adipiscing sem neque sed ipsum.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}

              <div
                class="feature-item"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div class="d-flex align-items-center gap-4">
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-browser-chrome"></i>
                  </div>
                  <div class="feature-content">
                    <h3>Browser Compatibility</h3>
                    <p>
                      Nullam dictum felis eu pede mollis pretium integer
                      tincidunt cras dapibus vivamus elementum semper nisi
                      aenean vulputate.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
            </div>
          </div>
        </div>
      </section>
      {/* Features 2 section */}
    </div>
  );
};

export default Features;
