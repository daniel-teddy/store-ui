import React from 'react'
import backgroundpattern from '../images/background-pattern.jpg'

import imgLink1 from '../images/product-thumb-11.jpg'
import imgLink2 from '../images/product-thumb-12.jpg'
import ApplyDiscount from '../components/ApplyDiscount'

function CartPage() {
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
          <h1 className="page-title pb-2">Cart</h1>
          <nav className="breadcrumb fs-6">
            <a className="breadcrumb-item nav-link" href="https">Home</a>
            <a className="breadcrumb-item nav-link" href="https">Pages</a>
            <span className="breadcrumb-item active" aria-current="page">Cart</span>
          </nav>
        </div>
      </div>
    </section>
    <section className="shopify-cart padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="cart-table">
              <div className="cart-header">
                <div className="row d-flex">
                  <h6 className="cart-title text-uppercase text-muted col-lg-4 pb-3">Product</h6>
                  <h6 className="cart-title text-uppercase text-muted col-lg-3 pb-3">Quantity</h6>
                  <h6 className="cart-title text-uppercase text-muted col-lg-4 pb-3">Subtotal</h6>
                </div>
              </div>
              <div className="cart-item border-top border-bottom">
                <div className="row align-items-center"> 
                  <div className="col-lg-4 col-md-3">
                    <div className="cart-info d-flex flex-wrap align-items-center mb-4">
                      <div className="col-lg-5">
                        <div className="card-image">
                          <img src={imgLink1} alt="cloth" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card-detail ps-3">
                          <h5 className="card-title">
                            <a href="https" className="text-decoration-none">Iphone 13</a>
                          </h5>
                          <div className="card-price">
                            <span className="money text-dark" data-currency-usd="$1200.00">$1500.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7">
                    <div className="row d-flex">
                      <div className="col-md-4">
                        <div className="input-group product-qty">
                          <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                          </span>
                          <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" /> {/* add event listener */}
                          <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-8 text-center">
                        <div className="total-price">
                          <span className="money text-dark">$1500.00</span>
                        </div>
                      </div>   
                    </div>             
                  </div>
                  <div className="col-lg-1 col-md-2">
                    <div className="cart-remove">
                      <a href="https">
                        <svg width="32px">
                          <use xlinkHref="#trash"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-item border-top border-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-3">
                    <div className="cart-info d-flex flex-wrap align-items-center">
                      <div className="col-lg-5">
                        <div className="card-image">
                          <img src={imgLink2} alt="product" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card-detail ps-3">
                          <h5 className="card-title">
                            <a href="https" className="text-decoration-none">Pink watch</a>
                          </h5>
                          <div className="card-price">
                            <span className="money text-dark" data-currency-usd="$1200.00">$870.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7">
                    <div className="row d-flex">
                      <div className="col-lg-4">
                        <div className="input-group product-qty">
                          <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                          </span>
                          <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                          <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-8 text-center">
                        <div className="total-price">
                          <span className="money text-dark">$870.00</span>
                        </div>
                      </div>   
                    </div>             
                  </div>
                  <div className="col-lg-1 col-md-2">
                    <div className="cart-remove">
                      <a href="https">
                        <svg width="32px">
                          <use xlinkHref="#trash"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cart-totals bg-grey padding-medium">
              <h4 className="text-dark pb-4">Cart Total</h4>
              <div className="total-price pb-5">
                <table cellSpacing="0" className="table text-uppercase">
                  <tbody>
                    <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="price-amount amount text-dark ps-5">
                          <bdi>
                            <span className="price-currency-symbol">$</span>2,370.00
                          </bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total pt-2 pb-2 border-bottom">
                      <th>Total</th>
                      <td data-title="Total">
                        <span className="price-amount amount text-dark ps-5">
                          <bdi>
                            <span className="price-currency-symbol">$</span>2,370.00</bdi>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="button-wrap row g-2">
                <div className="col-md-6"><button className="btn btn-dark btn-lg text-uppercase btn-rounded-none w-100">Update Cart</button></div>
                <div className="col-md-6"><button className="btn btn-dark btn-lg text-uppercase btn-rounded-none w-100">Continue Shopping</button></div>
                <div className="col-md-12"><button className="btn btn-primary btn-lg text-uppercase btn-rounded-none w-100">Proceed to checkout</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ApplyDiscount />
    </>
  )
}

export default CartPage