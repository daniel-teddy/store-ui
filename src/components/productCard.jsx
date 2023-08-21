import React from "react";
import { AiOutlineHeart, AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from 'react-router-dom'

function ProductCard(props) {
  const { imageUrl, title, unit, rating, price, initialQuantity, setInitialQuantity, category } = props;

  return (
    <div className="col">
      <div className="product-item">
        <Link to="/product" className="btn-wishlist">
          <AiOutlineHeart />
        </Link>
        <figure>
          <Link href="product-single.html" title={title}  className="overflow-none">
            <img src={imageUrl} className="tab-image" alt="Product Thumbnail" />
          </Link>
        </figure>
        <h3>{title}</h3>
        <h5 className="qty">{category}</h5>
        <span className="qty">{unit}</span>
        <span className="rating">
          <AiFillStar className="text-primary" /> {rating}
        </span>
        <span className="price">${price}</span>
        <div className="d-flex align-items-center justify-content-between">
          <div className="input-group product-qty">
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-left-minus btn btn-danger btn-number"
                data-type="minus"
                data-field=""
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
                data-field=""
              >
                <AiOutlinePlus height="16" width="16" />
              </button>
            </span>
          </div>
          <Link to='/cart' className="nav-link">
            Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
