import React, { useEffect, useState } from 'react';

function Popup({ handleClose, show }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    // Calculate the total quantity and total cost
    let quantity = 0;
    let cost = 0;
    storedCartItems.forEach((item) => {
      quantity += item.quantity;
      cost += item.quantity * item.price;
    });
    setTotalQuantity(quantity);
    setTotalCost(cost);
  }, []);

    const handlePath = () => {
    // Replace '/your-desired-route' with the actual route you want to navigate to
    window.location.href = '/cart';
  };

  return (
    <div className={showHideClassName}>
      <div className="offcanvas offcanvas-end show" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-modal="true" role="dialog">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{totalQuantity}</span>
          </h4>
          <ul className="list-group mb-3">
          
          {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.name}</h6>
                <small className="text-body-secondary">QTY: {item.quantity} / Unit Price: {item.price} TL</small>
              </div>
              <span className="text-body-secondary">{(item.quantity * item.price).toFixed(2)} TL</span>
            </li>
        ))}
            
            {/* <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Growers cider</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Fresh grapes</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Heinz tomato ketchup</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li> */}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (TRY)</span>
              <strong>TL {totalCost}</strong>
            </li>
          </ul>

          <button onClick={handlePath} className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Popup;
