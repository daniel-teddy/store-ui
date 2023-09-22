import React, { useEffect, useState } from "react";
// import backgroundpattern from "../images/background-pattern.jpg";
import { Link } from "react-router-dom";

function CheckOut() {
  const [totalCost, setTotalCost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // const [selectedOption, setSelectedOption] = useState(0);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    company: '',
    country: '',
    city: '',
    street: '',
    apartment: '',
    state: '',
    zipcode: '',
    phone: '',
    mail: '',
    notes: '',
    selectedOption: '',
    amount: '',
  });

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption: selectedValue, 
      amount: (totalCost * 1.15).toFixed(2)

    }));
  };
  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkout Data:', formData);
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let quantity = 0;
    let cost = 0;
    storedCartItems.forEach((item) => {
      quantity += item.quantity;
      cost += item.quantity * item.price;
    });

    setTotalCost(cost);
    setTotalQuantity(quantity);
  }, []);

  useEffect(() => {
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
            <h1 className="page-title pb-2">Checkout</h1>
            <nav className="breadcrumb fs-6">
              <Link className="breadcrumb-item nav-link" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item nav-link" to="/cart">
                Cart
              </Link>
              <span className="breadcrumb-item active" aria-current="page">
                Checkout
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className="shopify-cart checkout-wrap padding-large">
        <div className="container-fluid">
          <form className="form-group">
            <div className="row d-flex flex-wrap">
              <div className="col-lg-6">
                <h4 className="text-dark pb-4">Billing Details</h4>
                <div className="billing-details">
                  <label htmlFor="fname">First Name*</label>
                  <input
                    value={formData.fname}
                    onChange={(e) => handleInputChange('fname', e.target.value)}
                    type="text"
                    id="fname"
                    name="firstname"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="lname">Last Name*</label>
                  <input
                    value={formData.lname}
                    onChange={(e) => handleInputChange('lname', e.target.value)}
                    type="text"
                    id="lname"
                    name="lastname"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="cname">Company Name(optional)*</label>
                  <input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    type="text"
                    id="cname"
                    name="companyname"
                    className="form-control mt-2 mb-4"
                  />
                  <label htmlFor="cname">Country / Region*</label>
                  <select
                    className="form-select form-control mt-2 mb-4"
                    aria-label="Default select example"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)} 
                  >
                    <option value="USA">
                      United States
                    </option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </select>
                  <label htmlFor="address">Street Address*</label>
                  <input
                    value={formData.street}
                    onChange={(e) => handleInputChange('street', e.target.value)}
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="House number and street name"
                    className="form-control mt-3 ps-3 mb-3"
                  />
                  <input
                    value={formData.apartment}
                    onChange={(e) => handleInputChange('apartment', e.target.value)}
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Appartments, suite, etc."
                    className="form-control ps-3 mb-4"
                  />
                  <label htmlFor="city">Town / City *</label>
                  <input
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    type="text"
                    id="city"
                    name="city"
                    className="form-control mt-3 ps-3 mb-4"
                  />
                  <label htmlFor="state">State *</label>
                  <select
                    className="form-select form-control mt-2 mb-4"
                    aria-label="Default select example"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                  >
                    <option value="Florida">
                      Florida
                    </option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Texas">Texas</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Huston">Houston</option>
                  </select>
                  <label htmlFor="zip">Zip Code *</label>
                  <input
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange('zipcode', e.target.value)}
                    type="text"
                    id="zip"
                    name="zip"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="Phone">Phone *</label>
                  <input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="email">Email address *</label>
                  <input
                    value={formData.mail}
                    onChange={(e) => handleInputChange('mail', e.target.value)}
                    type="text"
                    id="email"
                    name="email"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="text-dark pb-4">Additional Information</h4>
                <div className="billing-details">
                  <label htmlFor="fname">Order notes (optional)</label>
                  <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="form-control pt-3 pb-3 ps-3 mt-2"
                    placeholder="Notes about your order. Like special notes for delivery."
                  ></textarea>
                </div>
                <div className="your-order mt-5">
                  <h4 className="display-7 text-dark pb-4">
                    Cart Totals {totalQuantity} item(s)
                  </h4>
                  <div className="total-price">
                    <table cellSpacing="0" className="table">
                      <tbody>
                        <tr className="subtotal border-top border-bottom pt-2 pb-2 text-uppercase">
                          <th>Subtotal</th>
                          <td data-title="Subtotal">
                            <span className="price-amount amount ps-5">
                              <bdi>
                                <span className="price-currency-symbol">
                                {totalCost}{" "} 
                                </span>
                                 TL
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="order-total border-bottom pt-2 pb-2 text-uppercase">
                          <th>Total + VAT</th>
                          <td data-title="Total">
                            <span className="price-amount amount ps-5">
                              <bdi>
                                 {(totalCost * 1.15).toFixed(2)}{" "}
                                <span className="price-currency-symbol">
                                  TL
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="list-group mt-5 mb-3">
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios1"
                          value="bank"
                          checked={formData.selectedOption === 'bank'}
                          onChange={handleRadioChange}

                        />
                        <span>
                          <strong className="text-uppercase">
                            Direct bank transfer
                          </strong>
                          <small className="d-block text-body-secondary">
                            Make your payment directly into our bank account.
                            Please use your Order ID. Your order will shipped
                            after funds have cleared in our account.
                          </small>
                        </span>
                      </label>
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios2"
                          value="check"
                          checked={formData.selectedOption === 'check'}
                          onChange={handleRadioChange}

                        />
                        <span>
                          <strong className="text-uppercase">
                            Check payments
                          </strong>
                          <small className="d-block text-body-secondary">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </small>
                        </span>
                      </label>
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios3"
                          value="cash"
                          checked={formData.selectedOption === 'cash'}
                          onChange={handleRadioChange}

                        />
                        <span>
                          <strong className="text-uppercase">
                            Cash on delivery
                          </strong>
                          <small className="d-block text-body-secondary">
                            Pay with cash upon delivery.
                          </small>
                        </span>
                      </label>
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                         
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios3"
                          value="paypal"
                          checked={formData.selectedOption === 'paypal'}
                          onChange={handleRadioChange}

                        />
                        <span>
                          <strong className="text-uppercase">Paypal</strong>
                          <small className="d-block text-body-secondary">
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </small>
                        </span>
                      </label>
                    </div>
                    <button
                    onClick={handleSubmit}
                      
                      name="submit"
                      className="btn btn-dark btn-lg text-uppercase btn-rounded-none w-100"
                    >
                      Place an order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
