import React from "react";

const Services = () => {
  return (
    <div>
      <section id="services" class="services section light-background">
        {/* Section Title */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row g-4">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-card d-flex">
                <div class="icon flex-shrink-0">
                  <i class="bi bi-activity"></i>
                </div>
                <div>
                  <h3>Website Design</h3>
                  <p>
                    Captivating your audience, establishing credibility, and
                    driving business growth all hinge on effective website
                    design
                  </p>
                  {/* <a href="service-details.html" class="read-more">
                    Read More <i class="bi bi-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* End Service Card */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card d-flex">
                <div class="icon flex-shrink-0">
                  <i class="bi bi-diagram-3"></i>
                </div>
                <div>
                  <h3>Web Hosting</h3>
                  <p>
                    Your online presence relies on reliable website hosting,
                    serving as its backbone. We guarantee lightning-fast loading
                    speeds, uninterrupted access, and robust security measures
                    for your website
                  </p>
                  {/* <a href="service-details.html" class="read-more">
                    Read More <i class="bi bi-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* End Service Card */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card d-flex">
                <div class="icon flex-shrink-0">
                  <i class="bi bi-easel"></i>
                </div>
                <div>
                  <h3>Technical Support</h3>
                  <p>
                    Benefit from our local support, offering prompt, dependable,
                    and amicable service, guaranteeing seamless operation of
                    your website around the clock
                  </p>
                  {/* <a href="service-details.html" class="read-more">
                    Read More <i class="bi bi-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* End Service Card */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-card d-flex">
                <div class="icon flex-shrink-0">
                  <i class="bi bi-clipboard-data"></i>
                </div>
                <div>
                  <h3>Web Maintenance Tutorial</h3>
                  <p>
                    Never fret future updates on your site as we will show show
                    you how
                  </p>
                  {/* <a href="service-details.html" class="read-more">
                    Read More <i class="bi bi-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
            {/* End Service Card */}

            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
