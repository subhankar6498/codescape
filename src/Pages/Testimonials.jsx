import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" class="testimonials section light-background">
        {/* Section Title */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonial open.jpeg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Bhaskar Bhattacharyya</h3>
                <h4>Ceo &amp; Founder</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>
                    "The website they built for my business is stunning, fast,
                    and user-friendly. My clients love it!"
                  </span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* End testimonial item */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonialopen2.jpeg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Chayan Karmakar</h3>
                <h4>Cinematographer</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>
                    "I gave them a complex set of requirements, and they
                    delivered exactly what I needed on time and within budget.
                    True professionals!"
                  </span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* End testimonial item */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonialopen3.jpeg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Kishore Ghosh</h3>
                <h4>Store Owner</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>
                    "The website they created is not only visually stunning but
                    also incredibly functional. My business saw a 40% increase
                    in traffic within weeks!"
                  </span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* End testimonial item */}

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonialopen4.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Ranbir Hudda</h3>
                <h4>Freelancer</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>
                    "Their attention to detail and commitment to delivering a
                    seamless user experience was outstanding. I highly recommend
                    their web development services!"
                  </span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
