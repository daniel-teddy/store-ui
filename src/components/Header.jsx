import React, { useEffect, useState } from "react";
import Logo from "../images/ALEMDAR_TEKNIK_LOGO.png";
import giftIcon from "../images/gift.svg";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Popup from "./PopUp";
import SearchPop, { Matched } from "./searchPop";
import ShowMenu from "./showMenu";
import Data from "../assets/item";

const Header = () => {
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



  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let quantity = 0;
    let cost = 0;
    storedCartItems.forEach((item) => {
      quantity += item.quantity;
      cost += item.quantity * item.price;
    });
    setTotalQuantity(quantity);
    setTotalCost(cost);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [showPopupS, setShowPopupS] = useState(false);
  const togglePopupS = () => {
    setShowPopupS(!showPopupS);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { //adjust the value to hide or display the items
        setShowSearchResults(true);
      } else {
        setShowSearchResults(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Popup show={showPopup} handleClose={togglePopup} />
      <SearchPop showS={showPopupS} handleCloseS={togglePopupS} />
      <ShowMenu showM={showMenu} handleCloseM={toggleMenu} />

      <header>
        <div className="container-fluid">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar row  p-2 my-2 rounded-4">
                <div
                  className=" d-none d-md-block bg-light"
                  style={{ width: "fit-content", textDecoration: "none" }}
                >
                  <a
                    href="/register_lab.html"
                    className=" border-0 bg-transparent"
                  >
                    Register Lab
                  </a>
                  {/* <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Arduino</option>
                  <option>Adaptors</option>
                  <option>Raspberry</option>
                  <option>Accessories</option>
                  <option>Solar</option>
                  <option>Modules</option>
                  <option>IC</option>
                </select> */}
                </div>
                <div
                  className="col-11 col-md-7"
                  style={{ marginLeft: ".75rem" }}
                >
                  <form
                    id="search-form"
                    className="text-center"
                    action=""
                    method=""
                  >
                    <input
                      type="text"
                      id="h_text"
                      className="form-control border-0 bg-light"
                      placeholder="Search for more than 20,000 products"
                      value={searchTerm} // Controlled input
                onChange={handleSearchChange}
                    />
                  </form>
                </div>
                {/* <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  />
                </svg>
              </div> */}
              </div>
            </div>
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              {/* <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div> */}
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li className="border-0 bg-light d-lg-none">
                  <a href="/register_lab.html">Register Lab</a>
                </li>
                <li>
                  <Link
                    to="cart"
                    className="rounded-circle bg-light  mx-1"
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <AiOutlineUser height="24" width="24" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="cart"
                    className="rounded-circle bg-light red-hover mx-1"
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <AiOutlineHeart height="24" width="24" />
                  </Link>
                </li>

                <li className="">
                  <Link
                    onClick={togglePopup}
                    className="rounded-circle bg-light  mx-1 "
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <AiOutlineShoppingCart height="24" width="24" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={togglePopupS}
                    className="rounded-circle bg-light d-lg-none mx-1"
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <AiOutlineSearch height="24" width="24" />
                  </Link>
                </li>
              </ul>
              <div className="cart text-end d-none d-lg-block dropdown">
                <button
                  onClick={togglePopup}
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <span className="fs-6 text-muted dropdown-toggle">
                    Your Cart
                  </span>
                  <h5 className="mb-0">
                    {/* <span className="cart-total">{totalCost} TL</span> */}
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
              <nav className="main-menu d-flex navbar navbar-expand-lg">
                <button
                  onClick={toggleMenu}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header justify-content-center">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <select className="filter-categories border-0 mb-0 me-5">
                      <option disabled selected hidden>Select an option </option>
                      <option>Electronics</option>
                      <option>Solar System</option>
                      <option>Security System</option>
                    </select>
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                      <CustomLink to="/shop/">Arduino</CustomLink>
                      <CustomLink to="/shop/">Adaptors</CustomLink>
                      <CustomLink to="/shop/">Raspberry</CustomLink>
                      <CustomLink to="/shop/">Accessories</CustomLink>
                      <CustomLink to="/shop/solar">Solar</CustomLink>
                      <CustomLink to="/shop/">Modules</CustomLink>
                      <CustomLink to="/shop/">IC</CustomLink>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="d-none d-lg-block">
                <a href="#discount" className="nav-link btn-coupon-code">
                  <img src={giftIcon} alt="Gift Icon" />
                  <strong className="ms-2">Get your coupon code</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={showSearchResults ? "srcsrc d-none" : "srcsrc"}>
        <ul className="list-group mb-3 mt-3" style={{ overflowY: "hidden" }}>
          {searchTerm.trim() !== "" && (
            <ul className="list-group mb-3 mt-3">
              {filteredItems.map((item, index) => (
                <Link to={`/explore/${item.ItemName}`} key={index}>
                  <Matched
                    title={item.ItemName}
                    category={item.category}
                  />
                </Link>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;

export function CustomLink({ to, children, ...props }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
}
