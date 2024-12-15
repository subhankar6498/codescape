import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 align-items-center justify-content-between">
            <div class="col-xl-5" data-aos="fade-up" data-aos-delay="200">
              <span class="about-meta">MORE ABOUT US</span>
              <h2 class="about-title">INTRODUCTION</h2>
              <p class="about-description">
                IT is the backbone of every business sector. It heads towards
                innovation, and innovation is paramount for businesses to run
                smoothly. With newly designed software, IT enables
                communication, helps in storing data, and puts forward the
                latest and best of technology. From a civil servant, teacher,
                farmer, everyone and every department use computers. If you and
                your business require exclusively talented and skillful software
                developers with ample experience then Company Bench is just the
                place for you. It is one of the top consulting firms in India.
              </p>

              <div class="row feature-list-wrapper">
                <div class="col-md-6">
                  <ul class="feature-list">
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Save The Overhead
                      Costs
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Availability of
                      Right Resources Across The Globe
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Mobile App
                      Development
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Web Development
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Laravel Development
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Retail Software
                      Development
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Education (how to
                      Developmet any app)
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="feature-list">
                    <li>
                      <i class="bi bi-check-circle-fill"></i> Dedicated Team of
                      Experts
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i> eCommerce Design &
                      Development
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>UX/UI Web Design
                    </li>
                  </ul>
                </div>
              </div>

              <div class="info-wrapper">
                <div class="row gy-4">
                  <div class="col-lg-5">
                    {/* <div class="profile d-flex align-items-center gap-3">
                      <img
                        src="assets/img/avatar-1.webp"
                        alt="CEO Profile"
                        class="profile-image"
                      />
                      <div>
                        <h4 class="profile-name">********</h4>
                        <p class="profile-position">CEO &amp; Founder</p>
                      </div>
                    </div> */}
                  </div>
                  <div class="col-lg-7">
                    <div class="contact-info d-flex align-items-center gap-2">
                      <i class="bi bi-telephone-fill"></i>
                      <div>
                        <p class="contact-label">Call us anytime</p>
                        <p class="contact-number">
                          7980873838/
                          <br />
                          8584802135
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div class="image-wrapper">
                <div
                  class="images position-relative"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <img
                    src="assets/img/about-5.webp"
                    alt="Business Meeting"
                    class="img-fluid main-image rounded-4"
                  />
                  <img
                    src="assets/img/about-2.webp"
                    alt="Team Discussion"
                    class="img-fluid small-image rounded-4"
                  />
                </div>
                <div class="experience-badge floating">
                  <h3>
                    15+ <span>Years</span>
                  </h3>
                  <p>Of experience in business service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
