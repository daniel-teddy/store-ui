import React from 'react';
// import backgroundpattern from '../images/background-pattern.jpg'
import productThumb1 from '../images/main-removebg-preview.png'
import adImgae1 from '../images/ad-image-1.png'
import adImgae2 from '../images/ad-image-2.png'
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
                          <div className="categories mb-3 pb-3">10% discount</div>
                          <h3 className="banner-title">On all Raspberry products</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.
                          </p>
                          <a
                            href="https://teddy-webdev.click"
                            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                          >
                            shop collection
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src={productThumb1} className="img-fluid" alt="Product Thumb" />
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
              <div className="banner-ad bg-success block-2" style={{ background: `url(${adImgae1}) no-repeat center`, backgroundPosition: 'right bottom' }}>
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">20% off</div>
                    <h3 className="banner-title">Arduino Components</h3>
                    <a href="https://teddy-webdev.click" className="d-flex align-items-center nav-link">
                      shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner Block 3 */}
              <div className="banner-ad bg-danger block-3" style={{ background: `url(${adImgae2}) no-repeat center`, backgroundPosition: 'right bottom' }}>
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">15% off</div>
                    <h3 className="item-title">Sensors &amp; modules</h3>
                    <a href="https://teddy-webdev.click" className="d-flex align-items-center nav-link">
                      shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg>
                    </a>
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
