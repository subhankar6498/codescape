import React from "react";

const CallToAction = ({
  id = "call-to-action",
  title = "Default Title",
  description = "Default description goes here.",
  buttonText = "Call To Action",
  buttonLink = "#",
  darkBackground = false,
  shapes = true,
}) => {
  return (
    <section
      id={id}
      className={`call-to-action section ${
        darkBackground ? "dark-background" : ""
      }`}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row content justify-content-center align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <a href={buttonLink} className="btn btn-cta">
              {buttonText}
            </a>
          </div>

          {shapes && (
            <>
              {/* Abstract Background Elements */}
              <div className="shape shape-1">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z"
                    transform="translate(100 100)"
                  ></path>
                </svg>
              </div>

              <div className="shape shape-2">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z"
                    transform="translate(100 100)"
                  ></path>
                </svg>
              </div>

              {/* Dot Pattern Groups */}
              <div className="dots dots-1">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <pattern
                    id="dot-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                  </pattern>
                  <rect
                    width="100"
                    height="100"
                    fill="url(#dot-pattern)"
                  ></rect>
                </svg>
              </div>

              <div className="dots dots-2">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <pattern
                    id="dot-pattern-2"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                  </pattern>
                  <rect
                    width="100"
                    height="100"
                    fill="url(#dot-pattern-2)"
                  ></rect>
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
