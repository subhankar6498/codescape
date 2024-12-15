import React from "react";

const Pricing = () => {
  return (
    <div>
      <section id="pricing" class="pricing section light-background">
        {/* Section Title */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Unlike fixed web designing plans, we provide two distinct web
            designing approaches—Standard and Premium. Recognizing that web
            design needs are unique; our adaptive approach offers flexibility to
            comply with your specific requirements. Your website deserves a
            solution as unique as your vision. Feel free to choose our approach.
            Together, let's finalize a suitable plan.
          </p>
        </div>
        {/* End Section Title */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row g-4 justify-content-center">
            {/* Basic Plan */}
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing-card">
                <h3>Standard Web Designing</h3>
                {/* <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">9.9</span>
                  <span class="period">/ month</span>
                </div> */}
                <p class="description">
                  Suitable for people who need a website as a necessity and are
                  not focused heavily on digital marketing.
                </p>

                {/* <h4>Featured Included:</h4> */}
                <ul class="features-list">
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    You get a high secure website in a short turnaround time
                    (5-20 Days) and budget-friendly option.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Recommended for people who need limited pages and
                    minimalistic customization options. We offer up to 2
                    iterations.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Web Designing Process starts from Requirement
                    Gathering,Frontend Customization using Hyrrokkin Secure
                    Templates, CMS Development (For dynamic websites), UAT and
                    Go Live.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    CMS Theme will be licensed under your business name and the
                    license fee will be covered under your AMC.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Hosting Options are limited to Hyrrokkin Secure hosting.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Freedom to Choose Image Assets from Freepik. We will
                    download the licensed version of it and share the license
                    file with you.
                  </li>
                </ul>

                <a href="#" class="btn btn-primary">
                  Call Now
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing-card popular">
                <div class="popular-badge">Most Popular</div>
                <h3>Premium Web Designing</h3>
                {/* <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">19.9</span>
                  <span class="period">/ month</span>
                </div> */}
                <p class="description">
                  Suitable for people who want premium online identity and high
                  converting website that complements their digital marketing
                  approach
                </p>
                <h4>Featured Included:</h4>
                <ul class="features-list">
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    you get a high secure website & unmatched performance as
                    cost is not a limitation. Time varies with your scope.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Get unlimited iterations until we achieve your idea. We
                    don’t start the coding process without your design approval.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Web Designing Process involves requirement gathering, UI
                    Design to transform your idea into actual design, Frontend
                    Development from the Scratch, CMS Development, UAT and Go
                    Live.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    CMS Theme ownership will be awarded to your company.
                    Hyrrokkin will never resell/reuse your source code.
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    You can opt to either use Hyrrokkin Secure Hosting or your
                    servers
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Freedom to choose assets from Envato Elements and Freepik.
                    We will download the licensed version & share the license
                    file with you
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    We develop content from your hints/optimize your text
                    content to ensure the content resonates with your customer
                    persona.
                  </li>
                </ul>

                <a href="#" class="btn btn-light">
                  Call Now
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing-card">
                <h3>Learning Plan</h3>
                {/* <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">39.9</span>
                  <span class="period">/ month</span>
                </div> */}
                <p class="description">
                  100% Secure Coding, Total Peace of Mind
                </p>

                <h4>Featured Included:</h4>
                <ul class="features-list">
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    100% Transparent Process
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Guided & Documented Approach
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    End-to-End Services
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    Testing and debugging
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>
                    best web development tools
                  </li>
                </ul>

                <a href="#" class="btn btn-primary">
                  Call Now
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
