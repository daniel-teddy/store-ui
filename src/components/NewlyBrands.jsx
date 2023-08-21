import React from 'react';
import prodThum11 from "../images/product-thumb-11.jpg"
import prodThum12 from "../images/product-thumb-12.jpg"
import prodThum13 from "../images/product-thumb-13.jpg"
import prodThum14 from "../images/product-thumb-14.jpg"
const NewlyArrivedBrands = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between mb-5">
              <h2 className="section-title">Newly Arrived Brands</h2>
              <div className="d-flex align-items-center">
                <a href="https://" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="brand-carousel swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{width: "370px" , marginRight: '30px'}}>
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={prodThum11} className="img-fluid rounded" alt="Card title" />
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
                <div className="swiper-slide" style={{width: "370px" , marginRight: '30px'}}>
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={prodThum12} className="img-fluid rounded" alt="Card title" />
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
                <div className="swiper-slide" style={{width: "370px" , marginRight: '30px'}}>
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={prodThum13} className="img-fluid rounded" alt="Card title" />
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
                <div className="swiper-slide" style={{width: "370px" , marginRight: '30px'}}>
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={prodThum14} className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">MiSolar</p>
                          <h5 className="card-title">Solar charge controller</h5>
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
