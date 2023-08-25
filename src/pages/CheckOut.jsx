import React from 'react'
import backgroundpattern from '../images/background-pattern.jpg'

function CheckOut() {
  return (
    <>
    <section className="py-5 mb-5" style={{
        backgroundImage: `url(${backgroundpattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1 className="page-title pb-2">Checkout</h1>
          <nav className="breadcrumb fs-6">
            <a className="breadcrumb-item nav-link" href="https">Home</a>
            <a className="breadcrumb-item nav-link" href="https">Pages</a>
            <span className="breadcrumb-item active" aria-current="page">Checkout</span>
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
                <input type="text" id="fname" name="firstname" className="form-control mt-2 mb-4 ps-3" />
                <label htmlFor="lname">Last Name*</label>
                <input type="text" id="lname" name="lastname" className="form-control mt-2 mb-4 ps-3" />
                <label htmlFor="cname">Company Name(optional)*</label>
                <input type="text" id="cname" name="companyname" className="form-control mt-2 mb-4" />
                <label htmlFor="cname">Country / Region*</label>
                <select className="form-select form-control mt-2 mb-4" aria-label="Default select example">
                  <option selected="" hidden="">United States</option>
                  <option value="1">UK</option>
                  <option value="2">Australia</option>
                  <option value="3">Canada</option>
                </select>
                <label htmlFor="address">Street Address*</label>
                <input type="text" id="adr" name="address" placeholder="House number and street name" className="form-control mt-3 ps-3 mb-3" />
                <input type="text" id="adr" name="address" placeholder="Appartments, suite, etc." className="form-control ps-3 mb-4" />
                <label htmlFor="city">Town / City *</label>
                <input type="text" id="city" name="city" className="form-control mt-3 ps-3 mb-4" />
                <label htmlFor="state">State *</label>
                <select className="form-select form-control mt-2 mb-4" aria-label="Default select example">
                  <option selected="" hidden="">Florida</option>
                  <option value="1">New York</option>
                  <option value="2">Chicago</option>
                  <option value="3">Texas</option>
                  <option value="3">San Jose</option>
                  <option value="3">Houston</option>
                </select>
                <label htmlFor="zip">Zip Code *</label>
                <input type="text" id="zip" name="zip" className="form-control mt-2 mb-4 ps-3" />
                <label htmlFor="email">Phone *</label>
                <input type="text" id="phone" name="phone" className="form-control mt-2 mb-4 ps-3" />
                <label htmlFor="email">Email address *</label>
                <input type="text" id="email" name="email" className="form-control mt-2 mb-4 ps-3" />
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-dark pb-4">Additional Information</h4>
              <div className="billing-details">
                <label htmlFor="fname">Order notes (optional)</label>
                <textarea className="form-control pt-3 pb-3 ps-3 mt-2" placeholder="Notes about your order. Like special notes for delivery."></textarea>
              </div>
              <div className="your-order mt-5">
                <h4 className="display-7 text-dark pb-4">Cart Totals</h4>
                <div className="total-price">
                  <table cellSpacing="0" className="table">
                    <tbody>
                      <tr className="subtotal border-top border-bottom pt-2 pb-2 text-uppercase">
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                          <span className="price-amount amount ps-5">
                            <bdi>
                              <span className="price-currency-symbol">$</span>2,370.00 </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total border-bottom pt-2 pb-2 text-uppercase">
                        <th>Total</th>
                        <td data-title="Total">
                          <span className="price-amount amount ps-5">
                            <bdi>
                              <span className="price-currency-symbol">$</span>2,370.00 </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="list-group mt-5 mb-3">
                    <label className="list-group-item d-flex gap-2 border-0">
                      <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios1" value="" checked="" />
                      <span>
                        <strong className="text-uppercase">Direct bank transfer</strong>
                        <small className="d-block text-body-secondary">Make your payment directly into our bank account. Please use your Order ID. Your order will shipped after funds have cleared in our account.</small>
                      </span>
                    </label>
                    <label className="list-group-item d-flex gap-2 border-0">
                      <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                      <span>
                        <strong className="text-uppercase">Check payments</strong>
                        <small className="d-block text-body-secondary">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</small>
                      </span>
                    </label>
                    <label className="list-group-item d-flex gap-2 border-0">
                      <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios3" value="" />
                      <span>
                        <strong className="text-uppercase">Cash on delivery</strong>
                        <small className="d-block text-body-secondary">Pay with cash upon delivery.</small>
                      </span>
                    </label>
                    <label className="list-group-item d-flex gap-2 border-0">
                      <input className="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios3" value="" />
                      <span>
                        <strong className="text-uppercase">Paypal</strong>
                        <small className="d-block text-body-secondary">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</small>
                      </span>
                    </label>
                  </div>
                  <button type="submit" name="submit" className="btn btn-dark btn-lg text-uppercase btn-rounded-none w-100">Place an order</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default CheckOut