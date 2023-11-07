import React, { useState } from "react";
// import bgLeaves from "../images/bg-leaves-img-pattern.png";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const ApplyDiscount = () => {
  const dataCollectionRef = collection(db, "discount-subscriptions");
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
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
        email_field: usermail,
        news_subscription: subscribed,
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

  return (
    <section className="py-5" id="discount">
      <div className="container-fluid">
        <div
          className="bg-secondary py-5 my-5 rounded-5"
          // style={{ background: `url(${bgLeaves}) no-repeat` }}
        >
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 p-5">
                <div className="section-header">
                  <h2 className="section-title display-4">
                    Get <span className="text-primary">25% Discount</span> on
                    your first purchase
                  </h2>
                </div>
                <p>
                  Subscribe to our news letter and get a 25% coupon and be notified for all up coming events and campain
                </p>
              </div>
              <div className="col-md-6 p-5">
                <form method="post" id="subscribe-us" name="subscribe-us">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Name"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="abc@mail.com"
                      onChange={(event) => {
                        setUsermail(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <label className="form-check-label" htmlFor="subscribe">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="subscribe"
                        name="isChecked"
                        onChange={(event) => {
                          setSubscribed(event.target.checked);
                        }}
                      />
                      Subscribe to the newsletter
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      id="form-submit"
                      className="btn btn-dark btn-lg"
                      onClick={fireSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
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
      </div>
    </section>
  );
};

export default ApplyDiscount;
