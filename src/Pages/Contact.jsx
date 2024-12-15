import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { customerContact } from "../Api/Functions/contact.api";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      lastQualification: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await customerContact(data);

      if (response?.status === 200) {
        toast.success(
          "Thank you for reaching out! We'll get back to you shortly.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "custom-toast-success",
          }
        );
        reset();
      } else {
        toast.error("We couldn't process your request. Please try again.", {
          position: "bottom-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  return (
    <div>
      <section id="contact" className="contact section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <p className="text-center text-muted">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div
                className="info-box shadow-sm rounded p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="mb-4">Contact Information</h3>
                <p className="text-muted mb-4">
                  Feel free to reach out through any of these channels. We'll
                  respond as soon as possible.
                </p>

                <div
                  className="info-item mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="d-flex align-items-start">
                    <div className="icon-box me-3">
                      <i className="bi bi-geo-alt fs-4"></i>
                    </div>
                    <div className="content">
                      <h4 className="mb-2">Our Location</h4>
                      <p className="text-muted mb-1">16/1 baidik para lane </p>
                      <p className="text-muted">Hindmotor, Hooghly.</p>
                    </div>
                  </div>
                </div>

                <div
                  className="info-item mb-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="d-flex align-items-start">
                    <div className="icon-box me-3">
                      <i className="bi bi-telephone fs-4"></i>
                    </div>
                    <div className="content">
                      <h4 className="mb-2">Phone Number</h4>
                      <p className="text-muted mb-1">+91 8584802135</p>
                      <p className="text-muted">+91 7980873838</p>
                    </div>
                  </div>
                </div>

                <div
                  className="info-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="d-flex align-items-start">
                    <div className="icon-box me-3">
                      <i className="bi bi-envelope fs-4"></i>
                    </div>
                    <div className="content">
                      <h4 className="mb-2">Email Address</h4>
                      <p className="text-muted mb-1">codescape186@gmail.com</p>
                      {/* <p className="text-muted">contact@example.com</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div
                className="contact-form shadow-sm rounded p-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="mb-3">Send Us a Message</h3>
                <p className="text-muted mb-4">
                  Please fill out the form below and we'll get back to you as
                  soon as possible.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Your Name"
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Your Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.mobile ? "is-invalid" : ""
                          }`}
                          placeholder="Your Mobile Number"
                          {...register("mobile", {
                            required: "Mobile number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message:
                                "Please enter a valid 10-digit mobile number",
                            },
                          })}
                        />
                        {errors.mobile && (
                          <div className="invalid-feedback">
                            {errors.mobile.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastQualification ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your last qualification"
                          {...register("lastQualification", {
                            required: "Last qualification is required",
                          })}
                        />
                        {errors.lastQualification && (
                          <div className="invalid-feedback">
                            {errors.lastQualification.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className={`form-control ${
                            errors.message ? "is-invalid" : ""
                          }`}
                          rows="6"
                          placeholder="Your Message"
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 10,
                              message:
                                "Message must be at least 10 characters long",
                            },
                          })}
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback">
                            {errors.message.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary px-5 py-2 position-relative"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
