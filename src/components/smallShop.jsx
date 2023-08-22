import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineHeart, AiOutlinePlus, AiOutlineMinus, AiFillStar, AiOutlineArrowLeft, } from 'react-icons/ai';
import Data from "../assets/item"

const productsPerPage = 12;
// const randomItems = Data.slice(0, productsPerPage);

const ProductItem = ({ imageUrl, title, unit, rating, price, initialQuantity, setInitialQuantity, category }) => {
  return (
    <div className="col">
      <div className="product-item">
        <a href="https" className="btn-wishlist">
          <AiOutlineHeart width="24" height="24" />
        </a>
        <figure>
          <a href="single-product.html" title={title}>
            <img src={imageUrl} className="tab-image" alt={title} />
          </a>
        </figure>
        <h3>{title}</h3>
        <p className="qty">{category}</p>
        <span className="qty">{unit}</span>
        <span className="rating">
          <AiFillStar width="24" height="24" className="text-primary" />{' '}
          {rating}
        </span>
        <span className="price">{price}</span>
        <div className="d-flex align-items-center justify-content-between">
          <div className="input-group product-qty">
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-left-minus btn btn-danger btn-number"
                data-type="minus"
                data-field=""
              >
                <AiOutlineMinus width="16" height="16" />
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
                data-field=""
              >
                <AiOutlinePlus width="16" height="16" />
              </button>
            </span>
          </div>
          <a href="https" className="nav-link">
            Add to Cart <svg width="24" height="24"><use xlinkHref="#cart"></use></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsPageSmall = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = Data.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const range = 5; // Number of page numbers to display on each side of the current page
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = Data.slice(startIndex, endIndex);


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
              />
              <button className="btn btn-dark rounded-end rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="widget-product-categories pt-5">
          <h5 className="widget-title">Categories</h5>
          <ul className="product-categories sidebar-list list-unstyled">
            <li className="cat-item">
              <a href="/collections/categories">All</a>
            </li>
            <li className="cat-item">
              <a href="https" className="nav-link">Phones</a>
            </li>
            <li className="cat-item">
              <a href="https" className="nav-link">Accessories</a>
            </li>
            <li className="cat-item">
              <a href="https" className="nav-link">Tablets</a>
            </li>
            <li className="cat-item">
              <a href="https" className="nav-link">Watches</a>
            </li>
          </ul>
        </div>
        <div className="widget-product-tags pt-3">
          <h5 className="widget-title">Tags</h5>
          <ul className="product-tags sidebar-list list-unstyled">
            <li className="tags-item">
              <a href="https" className="nav-link">White</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">Cheap</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">Mobile</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">Modern</a>
            </li>
          </ul>
        </div>
        <div className="widget-product-brands pt-3">
          <h5 className="widget-title">Brands</h5>
          <ul className="product-tags sidebar-list list-unstyled">
            <li className="tags-item">
              <a href="https" className="nav-link">Apple</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">Samsung</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">Huwai</a>
            </li>
          </ul>
        </div>
        <div className="widget-price-filter pt-3">
          <h5 className="widget-title">Filter By Price</h5>
          <ul className="product-tags sidebar-list list-unstyled">
            <li className="tags-item">
              <a href="https" className="nav-link">Less than $10</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">$10 - $20</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">$20 - $30</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">$30 - $40</a>
            </li>
            <li className="tags-item">
              <a href="https" className="nav-link">$40 - $50</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
          <main className="col-md-9">
          <div className="filter-shop d-flex justify-content-between">
      <div className="showing-product">
        <p>Showing 1–9 of 55 results</p>
      </div>
      <div className="sort-by">
        <select id="input-sort" className="form-control" data-filter-sort="" data-filter-order="">
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
                      return(
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
                      )
                    })}
              {/* Repeat the above lines to add more product items */}
            </div>
            <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
        <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
          
            <AiOutlineArrowLeft  className="chevron-left pe-3"  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>
          
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <span
              key={startPage + index}
              className={`page-numbers nav-link ${currentPage === startPage + index ? 'current' : ''}  pe-3`}
              onClick={() => handlePageChange(startPage + index)}
            >
              {startPage + index}
            </span>
          ))}
            <AiOutlineArrowRight className="chevron-right ps-3" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}/>
          
        </div>
      </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageSmall;
