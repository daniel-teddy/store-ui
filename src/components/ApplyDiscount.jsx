import React, { useState } from "react";
import axios from "axios";
import bgLeaves from "../images/bg-leaves-img-pattern.png";

const ApplyDiscount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isChecked: false, // Initialize checkbox state
  });


  // Step 3: Event handlers to update the state on input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use a conditional to handle checkboxes differently
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // console.log('Name:', formData.name);
    // console.log('Email:', formData.email);
    // console.log('Checkbox:', formData.isChecked);
    console.log('Data:', formData);
    const data={
      Name: formData.name,
      Email: formData.email,
      Subscribe: "subscribed",
    }
    const url = 'https://sheet.best/api/sheets/8a536518-c9c8-4983-a978-70c1480a6b98'
    axios.post(url,data).then((response)=>{
       console.log(response);
       setFormData('');
       
    })
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictumst amet, metus, sit massa posuere maecenas. At tellus ut
                  nunc amet vel egestas.
                </p>
              </div>
              <div className="col-md-6 p-5">
                <form  method="post" id="subscribe-us" name="subscribe-us" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
            value={formData.name}
            onChange={handleInputChange}
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
                      name="email"
            value={formData.email}
            onChange={handleInputChange}
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
                        name="isChecked"
              checked={formData.isChecked}
              onChange={handleInputChange}
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
