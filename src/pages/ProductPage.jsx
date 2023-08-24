import React from 'react'
import {
    AiFillStar,
    AiOutlinePlus,
    AiOutlineMinus,
  } from "react-icons/ai";
  import { useParams } from 'react-router-dom';
// import IMg from '../images/post-thumb-2.jpg'
import ProductCard from '../components/productCard';
import Data from "../assets/item";

const randomItems = Data.sort(() => Math.random() - 0.5);
let selectedElementsRandom = randomItems.slice(0, 5);
function ProductPage() {
  const { id } = useParams();
  const item = Data.find((item) => {
    return item.id === parseInt(id);
  })
  return (
    <div className="">
      <section id="selling-product" className="single-product padding-xlarge">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="product-preview mb-3">
                <img src={item.pic} alt="single-product" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-info">
                <div className="element-header">
                  <h2 itemProp="name" className="display-6">
                    {item.ItemName}
                  </h2>
                  <div className="rating-container d-flex align-items-center">
                    <div className="rating" data-rating="1">
                      <AiFillStar width="36" height="36" class="text-primary" />
                      <span className="rating-count ps-2">{item.ratings || "4.2"}</span>
                    </div>
                  </div>
                </div>
                <div className="product-price pt-3 pb-3">
                  <strong className="text-primary display-6 fw-bold">
                    {"$" + item.price||"$870.00"}
                  </strong>
                  <del className="ms-2">{item.discount || "$940.00"}</del>
                </div>
                <p>
                  {item.description || "Justo, cum feugiat imperdiet nulla molestie ac vulputatescelerisque amet. Bibendum adipiscing platea blandit sit sedquam semper rhoncus. Diam ultrices maecenas consequat eutortor orci, cras lectus mauris, cras egestas quam venenatisneque."}
                </p>
                <div className="cart-wrap py-5">
                  {/* <div className="color-options product-select">
                    <div className="color-toggle" data-option-index="0">
                      <h6 className="item-title text-uppercase text-dark text-decoration-underline">
                        Color:
                      </h6>
                      <ul className="select-list list-unstyled d-flex">
                        <li
                          className="select-item pe-3"
                          data-val="Green"
                          title="Green"
                        >
                          <a href="https">Green</a>
                        </li>
                        <li
                          className="select-item pe-3"
                          data-val="Green"
                          title="Green"
                        >
                          <a href="https">Green</a>
                        </li>
                        <li
                          className="select-item pe-3"
                          data-val="Green"
                          title="Green"
                        >
                          <a href="https">Green</a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="swatch product-select" data-option-index="1">
                    <h6 className="item-title text-uppercase text-dark text-decoration-underline">
                      Size:
                    </h6>
                    <ul className="select-list list-unstyled d-flex">
                      <li data-value="S" className="select-item pe-3">
                        <a href="https">XL</a>
                      </li>
                      <li data-value="S" className="select-item pe-3">
                        <a href="https">XL</a>
                      </li>
                      <li data-value="S" className="select-item pe-3">
                        <a href="https">XL</a>
                      </li>
                      <li data-value="S" className="select-item pe-3">
                        <a href="https">XL</a>
                      </li>
                      
                    </ul>
                  </div> */}
                  <div className="product-quantity">
                    <div className="stock-number text-dark">{item.quantity || "5"} in stock</div>
                    <div className="stock-button-wrap pt-3">
                      <div
                        className="input-group product-qty"
                        style={{ maxWidth: "150px" }}
                      >
                        <span className="input-group-btn">
                          <button
                            type="button"
                            className="quantity-left-minus btn btn-light btn-number"
                            data-type="minus"
                            data-field=""
                          >
                            <AiOutlineMinus />
                          </button>
                        </span>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          className="form-control input-number text-center"
                          value="1"
                          min="1"
                          max="100"
                        />
                        <span className="input-group-btn">
                          <button
                            type="button"
                            className="quantity-right-plus btn btn-light btn-number"
                            data-type="plus"
                            data-field=""
                          >
                            <AiOutlinePlus />
                          </button>
                        </span>
                      </div>
                      <div className="qty-button d-flex flex-wrap pt-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-medium text-uppercase me-3 mt-3"
                        >
                          Buy now
                        </button>
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="1269"
                          className="btn btn-dark btn-medium text-uppercase mt-3"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-info-tabs py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="tabs-listing">
            <nav>
              <div className="nav nav-tabs d-flex flex-wrap justify-content-center" id="nav-tab" role="tablist">
                <button className="nav-link active text-uppercase pe-5" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                <button className="nav-link text-uppercase pe-5" id="nav-information-tab" data-bs-toggle="tab" data-bs-target="#nav-information" type="button" role="tab" aria-controls="nav-information" aria-selected="false">Additional information</button>
                <button className="nav-link text-uppercase pe-5" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active border-top border-bottom py-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <h5>Product Description</h5>
                {/* <p>{item.description || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio..."}</p> */}
                <ul style={{ listStyleType: 'disc' }} className="list-unstyled ps-4">
                  <li>Donec nec justo eget felis facilisis fermentum.</li>
                  <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                  <li>Aliquam porttitor mauris sit amet orci.</li>
                </ul>
                {/* <p>{item.description || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio..."}</p> */}
              </div>
              <div className="tab-pane fade border-top border-bottom py-5" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                <p>It is Comfortable and Best</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
              </div>
              <div className="tab-pane fade border-top border-bottom py-5" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                <div className="review-box d-flex flex-wrap">
                  <div className="col-lg-6 d-flex flex-wrap">
                    <div className="col-md-2">
                      <div className="image-holder">
                        <img src="images/reviewer-1.jpg" alt="review" className="img-fluid rounded-circle" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="review-content">
                        <div className="rating-container d-flex align-items-center">
                          <AiFillStar />
                          <span className="rating-count">(3.5)</span>
                        </div>
                        <div className="review-header">
                          <span className="author-name">Tina Johnson</span>
                          <span className="review-date">– 03/07/2023</span>
                        </div>
                        <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-wrap">
                    <div className="col-md-2">
                      <div className="image-holder">
                        <img src="images/reviewer-2.jpg" alt="review" className="img-fluid rounded-circle" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="review-content">
                        <div className="rating-container d-flex align-items-center">
                          {/* Add your rating SVG and click logic here */}
                          <span className="rating-count">(3.5)</span>
                        </div>
                        <div className="review-header">
                          <span className="author-name">Jenny Willis</span>
                          <span className="review-date">– 03/06/2022</span>
                        </div>
                        <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="related-products" className="product-store position-relative padding-large">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between my-5">
              <h2 className="section-title">Related Products</h2>
              <div className="d-flex align-items-center">
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary"  style={{ marginRight: "1rem" }}>❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="bootstrap-tabs product-tabs">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-all"
                  role="tabpanel"
                  aria-labelledby="nav-all-tab"
                >
                  <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                  {selectedElementsRandom.map((item, index) => {
                      return(
                        <ProductCard
                        key={index}
                      title={item.ItemName}
                      imageUrl={item.pic}
                      category={item.category}
                      unit="15 Unit"
                      rating="4.5"
                      price={item.price}
                      initialQuantity="1"
                    />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ProductPage