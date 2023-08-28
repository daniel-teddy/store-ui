import React, { useState } from "react";
import { AiOutlineHeart, AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


function ProductCard(props) {
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
const addToFavorite = (e)=>{
  e.preventDefault();
  const favoriteItem = {
    name: title,
  };

  
  const existingfavoriteItems = JSON.parse(localStorage.getItem("favoritesItems")) || [];

  
  existingfavoriteItems.push(favoriteItem);

  
  localStorage.setItem("favoritesItems", JSON.stringify(existingfavoriteItems));

 
  alert(`${title} added to favorite`);
  
}
const handleAddtoCart = (e)=>{
  e.preventDefault();
  const cartItem = {
    name: title,
    quantity: initialQuantity,
    price: price,
    image: imageUrl,
  };

  
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  
  existingCartItems.push(cartItem);

  
  localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

 
  alert(`${title} added to cart`);
  
}
  return (
    <div className="col">
      <div className="product-item">
        <button className="btn-wishlist" onClick={addToFavorite}>
          <AiOutlineHeart />
        </button>
        <figure>
          <div title={title}  className="overflow-none">
            <img src={imageUrl} className="tab-image" alt="Product Thumbnail" />
          </div>
        </figure>
        <h3>{title}</h3>
        <h5 className="qty">{category}</h5>
        <span className="qty">{unit}</span>
        <span className="rating">
          <AiFillStar className="text-primary" /> {rating}
        </span>
        <span className="price">{price} TL</span>
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

export default ProductCard;
