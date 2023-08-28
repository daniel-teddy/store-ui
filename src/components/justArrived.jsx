import React from "react";

import ProductCard from "./productCard";
import img1 from '../images/images-tech/item1.jpg'
import img2 from '../images/images-tech/item2.jpg'
import img3 from '../images/images-tech/item3.jpg'
import img4 from '../images/images-tech/item4.jpg'
import img5 from '../images/images-tech/item5.jpg'

function JustArrived() {

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between">
              <h2 className="section-title">Just arrived</h2>

              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-all"
                  role="tabpanel"
                  aria-labelledby="nav-all-tab"
                >
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
                  
                  >
                  <ProductCard
                      imageUrl={img1}
                      title="iPhone XR"
                      unit="1 Unit"
                      rating="4.5"
                      price="18.00"
                      initialQuantity="10"
                    />
                  <ProductCard
                      imageUrl={img2}
                      title="iPhone XR"
                      unit="1 Unit"
                      rating="4.5"
                      price="18.00"
                      initialQuantity="10"
                    />
                  <ProductCard
                      imageUrl={img3}
                      title="iPhone XR"
                      unit="1 Unit"
                      rating="4.5"
                      price="18.00"
                      initialQuantity="10"
                    />
                  <ProductCard
                      imageUrl={img4}
                      title="iPhone XR"
                      unit="1 Unit"
                      rating="4.5"
                      price="18.00"
                      initialQuantity="10"
                    />
                  <ProductCard
                      imageUrl={img5}
                      title="iPhone XR"
                      unit="1 Unit"
                      rating="4.5"
                      price="18.00"
                      initialQuantity="10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JustArrived;
