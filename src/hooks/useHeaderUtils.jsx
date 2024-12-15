import { useEffect, useState } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
// import PureCounter from "@srexi/purecounterjs";
import { Swiper } from "swiper";

const useHeaderUtils = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  // Toggle scrolled class
  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");

      if (
        !selectHeader?.classList.contains("scroll-up-sticky") &&
        !selectHeader?.classList.contains("sticky-top") &&
        !selectHeader?.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) {
        selectBody?.classList.add("scrolled");
      } else {
        selectBody?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", toggleScrolled);
    toggleScrolled(); // Initial check

    return () => window.removeEventListener("scroll", toggleScrolled);
  }, []);

  // Mobile nav toggle
  const toggleMobileNav = () => {
    setIsMobileNavActive((prev) => !prev);
    document.querySelector("body")?.classList.toggle("mobile-nav-active");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    mobileNavToggleBtn?.classList.toggle("bi-list");
    mobileNavToggleBtn?.classList.toggle("bi-x");
  };

  // Nav menu click handlers
  useEffect(() => {
    const handleNavMenuClick = () => {
      if (document.querySelector(".mobile-nav-active")) {
        toggleMobileNav();
      }
    };

    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", handleNavMenuClick);
    });

    return () => {
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.removeEventListener("click", handleNavMenuClick);
      });
    };
  }, []);

  // Dropdown toggles
  useEffect(() => {
    const handleDropdownToggle = (e) => {
      e.preventDefault();
      e.currentTarget.parentNode.classList.toggle("active");
      e.currentTarget.parentNode.nextElementSibling.classList.toggle(
        "dropdown-active"
      );
      e.stopImmediatePropagation();
    };

    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", handleDropdownToggle);
      });

    return () => {
      document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
          navmenu.removeEventListener("click", handleDropdownToggle);
        });
    };
  }, []);

  // Scroll top button
  useEffect(() => {
    const scrollTop = document.querySelector(".scroll-top");

    const toggleScrollTop = () => {
      if (scrollTop) {
        if (window.scrollY > 100) {
          scrollTop.classList.add("active");
        } else {
          scrollTop.classList.remove("active");
        }
      }
    };

    const handleScrollTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollTop?.addEventListener("click", handleScrollTopClick);
    window.addEventListener("scroll", toggleScrollTop);
    toggleScrollTop(); // Initial check

    return () => {
      scrollTop?.removeEventListener("click", handleScrollTopClick);
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // // GLightbox initialization
  // useEffect(() => {
  //   const glightbox = GLightbox({
  //     selector: ".glightbox",
  //   });

  //   return () => {
  //     glightbox.destroy();
  //   };
  // }, []);

  // // Swiper initialization
  // useEffect(() => {
  //   const initSwiper = () => {
  //     document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
  //       const config = JSON.parse(
  //         swiperElement.querySelector(".swiper-config")
  //       );
  //       new Swiper(swiperElement, config);
  //     });
  //   };

  //   initSwiper();
  // }, []);

  // // PureCounter initialization
  // useEffect(() => {
  //   new PureCounter();
  // }, []);

  // // FAQ toggles
  // useEffect(() => {
  //   const handleFaqToggle = (faqItem) => {
  //     faqItem.parentNode.classList.toggle("faq-active");
  //   };

  //   document
  //     .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  //     .forEach((faqItem) => {
  //       faqItem.addEventListener("click", () => handleFaqToggle(faqItem));
  //     });

  //   return () => {
  //     document
  //       .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  //       .forEach((faqItem) => {
  //         faqItem.removeEventListener("click", () => handleFaqToggle(faqItem));
  //       });
  //   };
  // }, []);

  // // Hash link scroll correction
  // useEffect(() => {
  //   if (window.location.hash) {
  //     const section = document.querySelector(window.location.hash);
  //     if (section) {
  //       setTimeout(() => {
  //         const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
  //         window.scrollTo({
  //           top: section.offsetTop - parseInt(scrollMarginTop),
  //           behavior: "smooth",
  //         });
  //       }, 100);
  //     }
  //   }
  // }, []);

  // Navmenu scrollspy
  useEffect(() => {
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll(".navmenu a");

      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;

        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", navmenuScrollspy);
    navmenuScrollspy(); // Initial check

    return () => window.removeEventListener("scroll", navmenuScrollspy);
  }, []);

  return {
    isMobileNavActive,
    toggleMobileNav,
  };
};

export default useHeaderUtils;
