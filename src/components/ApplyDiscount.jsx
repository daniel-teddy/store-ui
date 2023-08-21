import React from "react";
import bgLeaves from "../images/bg-leaves-img-pattern.png";

const ApplyDiscount = () => {
 

  return (
    <section className="py-5">
      <div className="container-fluid">
        <div
          className="bg-secondary py-5 my-5 rounded-5"
          style={{ background: `url(${bgLeaves}) no-repeat` }}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictumst amet, metus, sit massa posuere maecenas. At tellus ut
                  nunc amet vel egestas.
                </p>
              </div>
              <div className="col-md-6 p-5">
                <form  method="post" id="subscribe-us" name="subscribe-us" >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="uname"
                      id="uname"
                      placeholder="Name"
                      
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="uemail"
                      id="uemail"
                      placeholder="abc@mail.com"
                      
                      required
                    />
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <label className="form-check-label" htmlFor="subscribe">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        
                      />
                      Subscribe to the newsletter
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" id="form-submit" className="btn btn-dark btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
                {/* {formResult && (
        <div
          className={`alert ${
            formResult.success ? 'alert-success' : 'alert-danger'
          }`}
        >
          {formResult.message}
        </div>
      )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyDiscount;
