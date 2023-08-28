import React from 'react';
import adImgae3 from '../images/ad-image-3.png'
import adImgae4 from '../images/ad-image-4.png'
const DiscountSection = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-ad bg-danger" style={{ background: `url(${adImgae3}) no-repeat right bottom` }}>
              <div className="banner-content p-5">
                <div className="categories text-primary fs-3 fw-bold">Up to 25% Off</div>
                <h3 className="banner-title">Robotic Course</h3>
                <p>Early bird discount for Robotic coding course</p>
                <a href="https://teddy-webdev.click" className="btn btn-dark text-uppercase">Register Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-ad bg-info" style={{ background: `url(${adImgae4}) no-repeat right bottom` }}>
              <div className="banner-content p-5">
                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                <h3 className="banner-title">Creamy Muffins</h3>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <a href="https://teddy-webdev.click" className="btn btn-dark text-uppercase">Show Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
