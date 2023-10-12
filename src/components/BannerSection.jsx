import React from "react";

import productThumb2 from "../images/sensors.png"

import { Link } from "react-router-dom";
const BannerSection = () => {
  return (
    <section
      className="py-3"
     
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-blocks">
              {/* Banner Block 1 */}
              <div className="banner-ad large bg-info block-1">
                <div className="swiper main-swiper">
                  <div className="swiper-wrapper">
                    {/* Swiper Slide */}
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">
                            Coding Lab
                          </div>
                          <h3 className="banner-title">
                            Learn based on practice
                          </h3>
                          <p>
                           We provide a great laboratory experience for electronic practice, with an amazing team of engineers and great products.
                          </p>
                          <a href='https://alemdar-registration.netlify.app'
                            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                          >
                            Register Now
                          </a>
                        </div>
                        {/* <div className="img-wrapper col-md-5">
                          <img
                            src={productThumb1}
                            className="img-fluid"
                            alt="Product Thumb"
                          />
                        </div> */}
                      </div>
                    </div>
                    {/* Repeat other swiper slides for Banner Block 1 */}
                  </div>
                  {/* Swiper Pagination */}
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              {/* Banner Block 2 */}
              <div
                className="banner-ad bg-success block-2"
                style={{
                  background: `url('https://knowhow.distrelec.com/wp-content/uploads/2023/03/iStock-458960107.jpg') center`,
                  backgroundPosition: "right bottom",
                  backgroundSize: "100%",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3 white">
                      20% off
                    </div>
                    <h3 className="banner-title white">Arduino Components</h3>
                    <Link
                      to="/shop"
                      className="d-flex align-items-center nav-link white"
                    >
                      shop collection{" "}
                      <svg width="24" height="24">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Banner Block 3 */}
              <div
                className="banner-ad bg-danger block-3"
                style={{
                  background: `url(${productThumb2}) center`,
                  backgroundPosition: "right bottom",
                  backgroundSize: "55%",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3 ">15% off</div>
                    <h3 className="item-title ">Sensors &amp; modules</h3>
                    <Link
                      to="/shop"
                      className="d-flex align-items-center nav-link white"
                    >
                      shop collection{" "}
                      <svg width="24" height="24">
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* / Banner Blocks */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
