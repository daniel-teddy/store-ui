import React from "react";
// import backgroundpattern from '../images/background-pattern.jpg'
import productThumb1 from "../images/main-removebg-preview.png";

import { Link } from "react-router-dom";
const BannerSection = () => {
  return (
    <section
      className="py-3"
      // style={{
      //   backgroundImage: `url(${backgroundpattern})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      // }}
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
                            10% discount
                          </div>
                          <h3 className="banner-title">
                            On all Raspberry products
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Dignissim massa diam elementum.
                          </p>
                          <a
                            href="https://teddy-webdev.click"
                            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                          >
                            shop collection
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img
                            src={productThumb1}
                            className="img-fluid"
                            alt="Product Thumb"
                          />
                        </div>
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
                  background: `url('https://hackster.imgix.net/uploads/attachments/1473969/_Un47llkZ61.blob?auto=compress%2Cformat&w=900&h=675&fit=min') no-repeat`,
                  backgroundPosition: "right bottom",
                  backgroundSize: "55%",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">15% off</div>
                    <h3 className="item-title">Sensors &amp; modules</h3>
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
