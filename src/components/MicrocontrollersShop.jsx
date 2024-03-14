import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Data from "../assets/item";
import { Link } from "react-router-dom";

const productsPerPage = 12;
// const randomItems = Data.slice(0, productsPerPage);

function ProductItem(props) {
  const { imageUrl, title, unit, rating, price, category } = props;

  const [initialQuantity, setInitialQuantity] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setInitialQuantity(initialQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (initialQuantity > 1) {
      setInitialQuantity(initialQuantity - 1);
    }
  };
  const addToFavorite = (e) => {
    e.preventDefault();
    const favoriteItem = {
      name: title,
    };

    const existingfavoriteItems =
      JSON.parse(localStorage.getItem("favoritesItems")) || [];

    existingfavoriteItems.push(favoriteItem);

    localStorage.setItem(
      "favoritesItems",
      JSON.stringify(existingfavoriteItems)
    );

    alert(`${title} added to favorite`);
  };
  const handleAddtoCart = (e) => {
    e.preventDefault();
    const cartItem = {
      name: title,
      quantity: initialQuantity,
      price: price,
      image: imageUrl,
    };

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    existingCartItems.push(cartItem);

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    alert(`${title} added to cart`);
  };
  return (
    <div className="col">
      <div className="product-item">
        <button className="btn-wishlist" onClick={addToFavorite}>
          <AiOutlineHeart />
        </button>
        <figure>
          <div title={title} className="overflow-none">
            <img src={imageUrl} className="tab-image" alt="Product Thumbnail" />
          </div>
        </figure>
        <h3>{title}</h3>
        <h5 className="qty">{category}</h5>
        <span className="qty">{unit}</span>
        <span className="rating">
          <AiFillStar className="text-primary" /> {rating}
        </span>
        {/* <span className="price">{price} TL</span> */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="input-group product-qty">
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-left-minus btn btn-danger btn-number"
                data-type="minus"
                onClick={handleDecrement}
              >
                <AiOutlineMinus height="16" width="16" />
              </button>
            </span>
            <input
              type="text"
              id="quantity"
              name="quantity"
              className="form-control input-number"
              value={initialQuantity}
              onChange={(e) => setInitialQuantity(e.target.value)}
              min="1"
              max="100"
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-right-plus btn btn-success btn-number"
                data-type="plus"
                onClick={handleIncrement}
              >
                <AiOutlinePlus height="16" width="16" />
              </button>
            </span>
          </div>
          <button className="rfces" onClick={handleAddtoCart}>
            Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

const ProductsPageSmallMicrocontrollers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const totalProducts = Data.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const range = 5;
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const newData = Data?.filter((item) => item.category === "microcontrollers");

  const filteredProducts = newData?.filter((item) =>
    item.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTag("");
  };

  const displayedProducts = filteredProducts
    ?.filter(
      (item) =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (!selectedTag || (item.tags && item.tags.includes(selectedTag))) &&
        (!selectedBrand ||
          (item.brand && item.brand.includes(selectedBrand))) &&
        (!selectedPriceRange ||
          (item.price >= selectedPriceRange.min &&
            item.price <= selectedPriceRange.max))
    )
    .slice(startIndex, endIndex);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory("All");
    setSelectedTag("");
  };
  const handlePriceRangeClick = (priceRange) => {
    setSelectedPriceRange(priceRange);
    setSelectedCategory("All");
    setSelectedTag("");
    setSelectedBrand("");
  };
  return (
    <div className="shopify-grid">
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3">
            <div className="sidebar">
              <div className="widget-menu">
                <div className="widget-search-bar pe-5">
                  <form role="search" method="get" className="d-flex">
                    <input
                      className="form-control form-control-lg rounded-start rounded-0 bg-light"
                      type="email"
                      placeholder="What are you looking for?"
                      aria-label="What are you looking for?"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <button
                      className="btn btn-dark rounded-end rounded-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget-product-categories pt-5">
                <h5 className="widget-title">Categories</h5>
                <ul className="product-categories sidebar-list list-unstyled">
                  <li
                    className={`cat-item ${
                      selectedCategory === "All" ? "active" : ""
                    }`}
                  >
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategoryClick("All")}
                    >
                      All
                    </span>
                  </li>
                  <li
                    className={`cat-item ${
                      selectedCategory === "pannels" ? "active" : ""
                    }`}
                  >
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategoryClick("pannels")}
                    >
                      pannels
                    </span>
                  </li>
                  <li
                    className={`cat-item ${
                      selectedCategory === "batteries" ? "active" : ""
                    }`}
                  >
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategoryClick("batteries")}
                    >
                      batteries
                    </span>
                  </li>
                </ul>
              </div>
              <div className="widget-product-tags pt-3">
                <h5 className="widget-title">Tags</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  {["White", "Cheap", "Mobile", "Modern"].map((tag) => (
                    <li className="tags-item" key={tag}>
                      <span
                        className={`nav-link ${
                          selectedTag === tag ? "active" : ""
                        }`}
                        onClick={() => handleTagClick(tag)}
                        style={{ cursor: "pointer" }}
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                {selectedTag && <p>Selected Tag: {selectedTag}</p>}
              </div>

              <div className="widget-product-brands pt-3">
                <h5 className="widget-title">Brands</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  {["abax", "simtek", "others"].map((brand) => (
                    <li className="tags-item" key={brand}>
                      <span
                        className={`nav-link ${
                          selectedBrand === brand ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleBrandClick(brand)}
                      >
                        {brand}
                      </span>
                    </li>
                  ))}
                </ul>
                {selectedBrand && <p>Selected Brand: {selectedBrand}</p>}
              </div>
              <div className="widget-price-filter pt-3">
                <h5 className="widget-title">Filter By Price</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  {[
                    { min: 0, max: 100 },
                    { min: 100, max: 300 },
                    { min: 300, max: 500 },
                    { min: 500, max: 700 },
                    { min: 700, max: 1000 },
                  ].map((priceRange) => (
                    <li className="tags-item" key={priceRange.min}>
                      <span
                        className={`nav-link ${
                          selectedPriceRange === priceRange ? "active" : ""
                        }`}
                        onClick={() => handlePriceRangeClick(priceRange)}
                        style={{ cursor: "pointer" }}
                      >
                        {`${priceRange.min}USD - ${priceRange.max}USD`}
                      </span>
                    </li>
                  ))}
                </ul>
                {selectedPriceRange && (
                  <p>
                    Selected Price Range: {selectedPriceRange.min}TL -
                    {selectedPriceRange.max}TL
                  </p>
                )}
              </div>
            </div>
          </aside>
          <main className="col-md-9">
            <div className="filter-shop d-flex justify-content-between">
              <div className="showing-product">
                <p>Showing 1–9 of 55 results</p>
              </div>
              <div className="sort-by">
                <select
                  id="input-sort"
                  className="form-control"
                  data-filter-sort=""
                  data-filter-order=""
                >
                  <option value="">Default sorting</option>
                  <option value="">Name (A - Z)</option>
                  <option value="">Name (Z - A)</option>
                  <option value="">Price (Low-High)</option>
                  <option value="">Price (High-Low)</option>
                  <option value="">Rating (Highest)</option>
                  <option value="">Rating (Lowest)</option>
                  <option value="">Model (A - Z)</option>
                  <option value="">Model (Z - A)</option>
                </select>
              </div>
            </div>

            <div className="product-grid row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
              {displayedProducts.map((item, index) => {
                if (selectedCategory === "All") {
                  return (
                    <Link to={`/explore/${item.ItemName}`} key={index}>
                      <ProductItem
                        key={index}
                        title={item.ItemName}
                        imageUrl={item.pic}
                        category={item.category}
                        unit="15 Unit"
                        rating="4.5"
                        price={item.price}
                        initialQuantity="1"
                      />
                    </Link>
                  );
                } else if (
                  selectedCategory === "pannels" &&
                  item.category === "pannels"
                ) {
                  return (
                    <Link to={`/explore/${item.ItemName}`} key={index}>
                      <ProductItem
                        key={index}
                        title={item.ItemName}
                        imageUrl={item.pic}
                        category={item.category}
                        unit="15 Unit"
                        rating="4.5"
                        price={item.price}
                        initialQuantity="1"
                      />
                    </Link>
                  );
                } else if (
                  selectedCategory === "batteries" &&
                  item.category === "batteries"
                ) {
                  return (
                    <Link to={`/explore/${item.ItemName}`} key={index}>
                      <ProductItem
                        key={index}
                        title={item.ItemName}
                        imageUrl={item.pic}
                        category={item.category}
                        unit="15 Unit"
                        rating="4.5"
                        price={item.price}
                        initialQuantity="1"
                      />
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            <nav
              className="navigation paging-navigation text-center padding-medium"
              role="navigation"
            >
              <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
                <AiOutlineArrowLeft
                  className="chevron-left pe-3"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />

                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                  <span
                    key={startPage + index}
                    className={`page-numbers nav-link ${
                      currentPage === startPage + index ? "current" : ""
                    }  pe-3`}
                    onClick={() => handlePageChange(startPage + index)}
                  >
                    {startPage + index}
                  </span>
                ))}
                <AiOutlineArrowRight
                  className="chevron-right ps-3"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </div>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageSmallMicrocontrollers;
