import React from 'react';
import adImgae3 from '../images/robotic-car.png'
import adImgae4 from '../images/lab-equip.png'
import { Link } from 'react-router-dom';
const DiscountSection = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-ad bg-danger" style={{ background: `url(${adImgae3}) no-repeat right bottom`, 
          backgroundSize: "35%",
           }}>
              <div className="banner-content p-5">
                <div className="categories text-primary fs-3 fw-bold">Up to 25% Off</div>
                <h3 className="banner-title">Robotic Course</h3>
                <p>Early bird discount for Robotic coding course</p>
                <a href='https://alemdar-registration.netlify.app' className="btn btn-dark text-uppercase">Register Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-ad bg-info" style={{ background: `url(${adImgae4}) no-repeat right bottom`, backgroundSize: "45%" }}>
              <div className="banner-content p-5">
                <div className="categories text-primary fs-3 fw-bold">Up To 15% Off</div>
                <h3 className="banner-title">Lab Equipments</h3>
                <p>Discount on batch purchase for Lab Equipments</p>
                <Link to="/contact" className="btn btn-dark text-uppercase">Get Discount</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
