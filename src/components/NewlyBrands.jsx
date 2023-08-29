import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewlyArrivedBrands = () => {
  const [translationX, setTranslationX] = useState(0);

  // Function to increase the translation value
  const increaseTranslation = () => {
    if (translationX < 0) {
      setTranslationX(translationX + 24);
    } else if (translationX < 24) {
      setTranslationX(0);
    }
  };

  // Function to decrease the translation value
  const decreaseTranslation = () => {
    if (translationX > -74) {
      setTranslationX(translationX - 24);
    }
  };
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between mb-5">
              <h2 className="section-title">Newly Arrived Brands</h2>
              <div className="d-flex align-items-center">
                <Link to="/shop" className="btn-link text-decoration-none">
                  View All Categories →
                </Link>
                <div className="swiper-buttons">
                  <button
                  onClick={increaseTranslation}
                    className="swiper-prev products-carousel-prev btn btn-primary"
                    style={{marginRight: "1rem"}}
                  >
                    ❮
                  </button>
                  <button
                  onClick={decreaseTranslation} 
                  className="swiper-next products-carousel-next btn btn-primary">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="brand-carousel swiper">
              <div className="swiper-wrapper"
              style={{ transform: `translate3d(${translationX}rem, 0, 0)`,
              transition: 'transform 0.3s'}}
              >
                <div
                  className="swiper-slide"
                  style={{ width: "370px", marginRight: "30px" }}
                >
                  <div className="card mb-3 p-3 rounded-4 shadow border-0 qushb">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src='https://knowhow.distrelec.com/wp-content/uploads/2023/03/iStock-458960107.jpg'
                          className="img-fluid rounded"
                          alt="Card title"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Arduino</p>
                          <h5 className="card-title">Arduino UNO</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "370px", marginRight: "30px" }}
                >
                  <div className="card mb-3 p-3 rounded-4 shadow border-0 qushb">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src='https://cz.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/raspberrypi/pi-4-hero.png'
                          className="img-fluid rounded"
                          alt="Card title"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Raspberry</p>
                          <h5 className="card-title">Rapsberry pi 4</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "370px", marginRight: "30px" }}
                >
                  <div className="card mb-3 p-3 rounded-4 shadow border-0 qushb">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src='https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/27/880/g880SOLO3G-F.jpg'
                          className="img-fluid rounded"
                          alt="Card title"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">FocusRite</p>
                          <h5 className="card-title">Sound quality mixer</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "370px", marginRight: "30px" }}
                >
                  <div className="card mb-3 p-3 rounded-4 shadow border-0 qushb">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src='https://www.solarekip.com/wp-content/uploads/2021/12/abax-24v-2000w-inverter.jpg'
                          className="img-fluid rounded"
                          alt="Card title"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Solar</p>
                          <h5 className="card-title">
                            Solar charge controller
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "370px", marginRight: "30px" }}
                >
                  <div className="card mb-3 p-3 rounded-4 shadow border-0 qushb">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src='https://simtek.com.pk/wp-content/uploads/2023/03/Simtek-MPPT-60A-K26-6.jpg'
                          className="img-fluid rounded"
                          alt="Card title"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Solar</p>
                          <h5 className="card-title">
                            Solar charge controller
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Additional swiper slides */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewlyArrivedBrands;
