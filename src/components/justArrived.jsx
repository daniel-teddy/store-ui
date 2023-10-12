import React from "react";

import ProductCard from "./productCard";
import { Link } from 'react-router-dom';
import Data from "../assets/item";



function JustArrived() {
  const randomItems = Data.sort(() => Math.random() - 0.5);
  let selectedElementsRandom = randomItems.slice(0, 5);
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
                  {selectedElementsRandom.map((item, index) => {
                      const maxNameLength = 25;
                      const itemName = item.ItemName.length > maxNameLength
                        ? item.ItemName.slice(0, maxNameLength) + " ..."
                        : item.ItemName;
                      return(
                        <Link to={`/explore/${item.ItemName}`} key={index}>
                        <ProductCard
                      title={itemName}
                      imageUrl={item.pic}
                      category={item.category}
                      unit="15 Unit"
                      rating="4.5"
                      // price={item.price}
                      initialQuantity="1"
                    />
                        </Link>
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
  );
}

export default JustArrived;
