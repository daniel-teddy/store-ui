import React from 'react';
// import vegies from '../images/icon-vegetables-broccoli.png';
import bread from '../images/icon-bread-baguette.png';
import drinks from "../images/icon-soft-drinks-bottle.png";
import wines from "../images/icon-wine-glass-bottle.png";
import animal from "../images/icon-animal-products-drumsticks.png";
import herbs from "../images/icon-bread-herb-flour.png";
import { SiArduino } from 'react-icons/si'

const CategorySection = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="https://teddy-webdev.click" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button
                    className="swiper-prev products-carousel-prev btn btn-primary"
                    style={{marginRight: "1rem"}}
                  >
                    ❮
                  </button>
                  <button className="swiper-next products-carousel-next btn btn-primary">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper" style={{gap : '10px', width: '100%'}}>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <SiArduino style={{width: "8rem"}}/>
                  <h3 className="category-title">Arduino</h3>
                </a>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <img src={bread} alt="Category Icon" />
                  <h3 className="category-title">Raspberry</h3>
                </a>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <img src={drinks} alt="Category Icon" />
                  <h3 className="category-title">Adaptors</h3>
                </a>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <img src={wines} alt="Category Icon" />
                  <h3 className="category-title">Components</h3>
                </a>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <img src={animal} alt="Category Icon" />
                  <h3 className="category-title">Sound System</h3>
                </a>
                <a href="category.html" className="nav-link category-item swiper-slide" style={{width: "237px"}}>
                  <img src={herbs} alt="Category Icon" />
                  <h3 className="category-title">Solar Systems</h3>
                </a>
                {/* Add more category items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
