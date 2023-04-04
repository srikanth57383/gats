/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { Container, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "./ContactFormModal.css";
import "react-phone-number-input/style.css";
import "../../css/form-floating-label.css";
// import "../../css/contactus.css";

const ContactFormModal = props => {
  const { modal, toggle } = props;
  const [success, setSuccess] = useState(false);
  const [submintForm, setSubmitForm] = useState(false);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Get country code from IP Address for Phone number input filed
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=16c06a48afce45e5a1c1427e1c4b628f"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCountry(data.country_code2);
      });
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, event) => {
    setSubmitForm(true);

    const payload = {
      Full_Name: data.fullname,
      Email: data.email,
      Phone: formatPhoneNumberIntl(value),
      Message: data.message,
      Website: "zyclyx",
      Company: data.company,
      Country: data.country,
      Interested: data.interest,
      Submit: submintForm,
    };

    // Submit form data
    fetch(`${process.env.GATSBY_API_URL}/submit_contact_form.php`, {
      method: "post",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setSuccess(true);
        event.target.reset();
        setValue("");
        setHasError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        setSubmitForm(false);
      })
      .catch(error => {
        if (error) {
          setSuccess(false);
          setSubmitForm(false);
          setHasError(true);
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="full-width-modal"
        contentClassName="full-width-modal"
      >
        <ModalHeader toggle={toggle}>We are happy to assist you</ModalHeader>
        <ModalBody>
          <Container className="c-form-wrapper">
            {success && (
              <div className="success-msg">
                <h4 className="text-center">Thank you for contacting us!</h4>
                <p className="text-center">
                  We will get in touch with you soon
                </p>
              </div>
            )}
            {hasError && (
              <p className="text-center text-danger py-3">
                Something Went wrong, Please try after some time
              </p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="floating-label-form c-form"
            >
              <div className="row py-md-2 d-flex justify-content-center">
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      placeholder="Full Name"
                      ref={register({ required: true })}
                    />
                    {errors.fullname && (
                      <span className="err-msg">
                        * Please enter your full name
                      </span>
                    )}
                    <label htmlFor="username">
                      Full Name
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      placeholder="Email"
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="err-msg">* Please enter your email</span>
                    )}
                    <label htmlFor="email">
                      Email
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12 phone-label">
                  <PhoneInput
                    placeholder="Work Phone"
                    className="form-group floating-label  py-1"
                    value={value}
                    onChange={setValue}
                    defaultCountry={country}
                    label="Phone"
                    required
                  />
                  {/* <label htmlFor="phone">
                    Phone
                    <span className="required">*</span>
                  </label> */}
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      placeholder="Company"
                      ref={register({ required: true })}
                    />
                    {errors.company && (
                      <span className="err-msg">
                        * Please enter your company name
                      </span>
                    )}
                    <label htmlFor="company">
                      Company
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      placeholder="Country"
                      ref={register({ required: true })}
                    />
                    {errors.country && (
                      <span className="err-msg">
                        * Please enter country name
                      </span>
                    )}
                    <label htmlFor="country">
                      Country
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <select
                      className="form-control"
                      name="interest"
                      placeholder="Intrested In"
                      ref={register({ required: true })}
                    >
                      <option selected disabled className="bg-light" value="">
                        I am intrested in
                      </option>
                      <option value="Robotic Process Automation">
                        Robotic Process Automation
                      </option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Optical Character Recognition">
                        Optical Character Recognition
                      </option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Internet of Things">
                        Internet of Things
                      </option>
                      <option value="Big Data">Big Data</option>
                      <option value="Network Security">Network Security</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Application & Data Security">
                        Application & Data Security
                      </option>
                      <option value="Governance & Compliance">
                        Governance & Compliance
                      </option>
                      <option value="Endpoint & Mobile Security">
                        Endpoint & Mobile Security
                      </option>
                      <option value="Identity & Access Management">
                        Identity & Access Management
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Outsourcing">Outsourcing</option>
                      <option value="Staffing Solutions">
                        Staffing Solutions
                      </option>
                      <option value="Data Center Services">
                        Data Center Services
                      </option>
                      <option value="System Infra Services">
                        System Infra Services
                      </option>
                      <option value="End User Computing">
                        End User Computing
                      </option>
                      <option value="Data Visualization">
                        Data Visualization
                      </option>
                      <option value="Predictive Analytics">
                        Predictive Analytics
                      </option>
                      <option value="Career Opportunities">
                        Career Opportunities
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.interest && (
                      <span className="err-msg">
                        * Please select your Interest
                      </span>
                    )}
                    <label htmlFor="interest">
                      Interested in
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <textarea
                      className="form-control pt-3 pb-4"
                      name="message"
                      placeholder="Description"
                      ref={register({ required: true, max: 300 })}
                    />
                    {errors.message && (
                      <span className="err-msg">
                        * Please describe your query
                      </span>
                    )}
                    <label htmlFor="message">
                      Description
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-12" />
                <button
                  type="submit"
                  className="button d-flex align-items-center btn-style my-4"
                  disabled={submintForm}
                >
                  {submintForm ? (
                    <>
                      Sending ..
                      <div
                        className="spinner-border spinner-border-sm ml-3 text-warning"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </>
                  ) : (
                    "Message us"
                  )}
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </button>
              </div>
            </form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
