import React, { useEffect, useState } from "react";
// import backgroundpattern from '../images/background-pattern.jpg'
import MapsGoogle from "../components/mapsGoogle";
import JustArrived from "../components/justArrived";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function ContactPage() {
  const dataCollectionRef = collection(db, "contact-us");
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fireSubmit = async (event) => {
    event.preventDefault();

    // Email validation
    if (!usermail) {
      alert("Please enter a valid email.");
      return;
    }

    // Send data to Firebase
    try {
      await addDoc(dataCollectionRef, {
        name: username,
        mail_field: usermail,
        subject: subject,
        message: message,
        phone: phone,
      });

      setSuccessMessage("Submition sent successfully.");
      setIsSubmitted(true);

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      // setSuccessMessage("Error, try again or reload !");
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="py-5 mb-5"
        style={{
          // backgroundImage: `url(${backgroundpattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="page-title pb-2">Contact Us</h1>
            <nav className="breadcrumb fs-6">
              <a className="breadcrumb-item nav-link" href="https">
                Home
              </a>
              <span className="breadcrumb-item active" aria-current="page">
                Contact Us
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className="contact-us py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="contact-info col-lg-6 pb-3">
              <p>
                For any inquiery or suggestion do not hesitate to contact or
                visit us
              </p>
              <div className="page-content d-flex flex-wrap">
                <div className="col-lg-6 col-sm-12">
                  <div className="content-box text-dark pe-4 mb-5">
                    <h3 className="card-title">Office</h3>
                    <div className="contact-address pt-3">
                      <p>Polis Sk, Lefkoşa, TRNC</p>
                    </div>
                    <div className="contact-number">
                      <p>
                        <a href="tel:+90 542 877 20 05">+90 542 877 20 05</a>
                      </p>
                      <p>
                        <a href="https://api.whatsapp.com/send?phone=+90(542)8772005&text=Hello ...">
                          whatsap: +90 542 877 20 05
                        </a>
                      </p>
                    </div>
                    <div className="email-address">
                      <p>
                        <a href="mailto:ziya@alemdarteknik.com">
                          ziya@alemdarteknik.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-12">
                <div className="content-box">
                  <h3 className="card-title">Management</h3>
                  <div className="contact-address pt-3">
                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                  </div>
                  <div className="contact-number">
                    <p>
                      <a href="https">+123 987 321</a>
                    </p>
                    <p>
                      <a href="https">+123 123 654</a>
                    </p>
                  </div>
                  <div className="email-address">
                    <p>
                      <a href="https">contact@website.com</a>
                    </p>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div className="inquiry-item col-lg-6">
              <div className="bg-light p-5 rounded-5">
                <h2 className="display-7 text-dark">Get in Touch</h2>
                <p>Use the form below to get in touch with us.</p>
                <form id="form" className="form-group flex-wrap">
                  <div className="form-input col-lg-12 d-flex mb-3">
                    <input
                      type="text"
                      name="name"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      placeholder="Write Your Name Here"
                      className="form-control ps-3 me-3"
                    />
                    <input
                      type="email"
                      name="email"
                      onChange={(event) => {
                        setUsermail(event.target.value);
                      }}
                      placeholder="Write Your Email Here"
                      className="form-control ps-3"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      name="phone"
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                      placeholder="Phone Number"
                      className="form-control ps-3"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      name="subject"
                      onChange={(event)=>{
                        setSubject(event.target.value);
                      }}
                      placeholder="Write Your Subject Here"
                      className="form-control ps-3"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                    onChange={(event)=>{
                      setMessage(event.target.value);
                    }}
                      placeholder="Write Your Message Here"
                      className="form-control ps-3"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                </form>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg text-uppercase btn-rounded-none" onClick={fireSubmit}>
                    Submit
                  </button>
                </div>
                {isSubmitted && (
                  <div
                    className={`alert alert-success`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <JustArrived />
      <MapsGoogle />
    </>
  );
}

export default ContactPage;
