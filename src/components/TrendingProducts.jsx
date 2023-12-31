import React from "react";
import ProductCard from "./productCard";
import Data from "../assets/item"
import { Link } from "react-router-dom";

const randomItems = Data.sort(() => Math.random() - 0.5);
let selectedElementsRandom = randomItems.slice(0, 20);

const TrendingProducts = () => {

  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Trending Products</h3>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link to="/shop"
                      className="nav-link text-uppercase fs-6 active"
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-all"
                      type="button"
                    >
                      All
                    </Link>
                    <Link to="/shop"
                      className="nav-link text-uppercase fs-6"
                      id="nav-fruits-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-fruits"
                      type="button"
                    >
                      Arduino &amp; Raspberry
                    </Link>
                    <Link to="/shop"
                      className="nav-link text-uppercase fs-6"
                      id="nav-juices-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-juices"
                      type="button"
                    >
                      Mixers
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-all"
                  role="tabpanel"
                  aria-labelledby="nav-all-tab"
                >
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    
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
};

export default TrendingProducts;
