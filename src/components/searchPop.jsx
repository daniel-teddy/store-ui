import React, { useState } from "react";
import Data from "../assets/item";
import { Link } from "react-router-dom";

function SearchPop({ handleCloseS, showS }) {
  const showHideClassName = showS
    ? "modal display-block"
    : "modal display-none";
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  let filteredItems = Data.filter((item) => {
    return (
      item.ItemName.toLowerCase().includes(searchTerm.toLowerCase()) 
      // || item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  if (searchTerm.trim() !== "") {
    filteredItems = filteredItems.slice(0, 12);
  }
  return (
    <div className={showHideClassName}>
      <div
        className="offcanvas offcanvas-end show"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasSearch"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleCloseS}
          ></button>
        </div>
        <div className="offcanvas-body" style={{overflow: "hidden"}}>
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Search</span>
            </h4>
            <form
              role="search"
              action="index.html"
              method="get"
              className="d-flex mt-3 gap-0"
            >
              <input
                className="form-control rounded-start rounded-0 bg-light"
                type="text" // Change input type from 'email' to 'text'
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                value={searchTerm} // Controlled input
                onChange={handleSearchChange} // Step 2: Handle input changes
              />
            </form>
            <ul className="list-group mb-3 mt-3" style={{maxHeight: "100vh", overflowY: "scroll"}}>
              {searchTerm.trim() !== "" && ( // Only render list if search term is not empty
                <ul className="list-group mb-3 mt-3">
                  {filteredItems.map((item, index) => (
                    <Link to={`/explore/${item.ItemName}`} key={index}>
                      <Matched title={item.ItemName} 
                      // price={item.price} 
                      category={item.category}
                      />
                    </Link>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPop;

export function Matched(props) {
  const { title, price, category } = props;

  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">{title}</h6>
        <small className="text-body-secondary">{price} </small>
        <small className="text-body-secondary">{category}</small>
      </div>
    </li>
  );
}
