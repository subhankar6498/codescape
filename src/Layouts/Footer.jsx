import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" class="footer">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">Codescape</span>
              </a>
              <div class="footer-contact pt-3">
                <p>16/1 BaidikPara Lane</p>
                <p>Hindmotor, Hooghly. Pin:712233.</p>
                <p class="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span>+91 85848 02135 / 7980873838</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>codescape186@gmail.com</span>
                </p>
              </div>
              <div class="social-links d-flex mt-4">
                <a href="">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            {/* <div class="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li>
                  <a href="#">Molestiae accusamus iure</a>
                </li>
                <li>
                  <a href="#">Excepturi dignissimos</a>
                </li>
                <li>
                  <a href="#">Suscipit distinctio</a>
                </li>
                <li>
                  <a href="#">Dilecta</a>
                </li>
                <li>
                  <a href="#">Sit quas consectetur</a>
                </li>
              </ul>
            </div> */}

            {/* <div class="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li>
                  <a href="#">Ipsam</a>
                </li>
                <li>
                  <a href="#">Laudantium dolorum</a>
                </li>
                <li>
                  <a href="#">Dinera</a>
                </li>
                <li>
                  <a href="#">Trodelas</a>
                </li>
                <li>
                  <a href="#">Flexo</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong class="px-1 sitename">Codescape</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div class="credits">
            {/* All the links in the footer should remain intact. */}
            {/*  */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed By <a href="https://themewagon.com">ThemeWagon</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
