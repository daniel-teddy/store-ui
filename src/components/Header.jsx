import React, { useState } from 'react';
import Logo from '../images/logo1.png';
import giftIcon from '../images/gift.svg';
import { AiOutlineHeart, AiOutlineUser,  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Popup from './PopUp';

const Header = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  //const [filteredItems, setFilteredItems] = useState(items);
  const setFilteredItems = items;

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filtered);
  };


  // const handlePath = () => {
  //   // Replace '/your-desired-route' with the actual route you want to navigate to
  //   window.location.href = '/cart';
  // };

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <Popup show={showPopup} handleClose={togglePopup} />
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
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Arduino</option>
                  <option>Adaptors</option>
                  <option>Raspberry</option>
                  <option>Accessories</option>
                  <option>Solar</option>
                  <option>Modules</option>
                  <option>IC</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="" method="">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 20,000 products"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            {/* <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div> */}
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <Link to="cart" className="rounded-circle bg-light p-2 mx-1">
                  <AiOutlineUser height="24" width="24"/>
                </Link>
              </li>
              <li>
                <Link to="cart" className="rounded-circle bg-light p-2 mx-1">
                  <AiOutlineHeart height="24" width="24"/>
                </Link>
              </li>
              {/* <li className="d-lg-none">
                <a
                  href="htps://teddy-webdev.click"
                  className="rounded-circle bg-light p-2 mx-1"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#cart" />
                  </svg>
                </a>
              </li> */}
              {/* <li className="d-lg-none">
                <a
                  href="htps://teddy-webdev.click"
                  className="rounded-circle bg-light p-2 mx-1"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSearch"
                  aria-controls="offcanvasSearch"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#search" />
                  </svg>
                </a>
              </li> */}
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
                <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                <h5 className="mb-0">
                  <span className="cart-total">$1290.00</span>
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
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header justify-content-center">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <select className="filter-categories border-0 mb-0 me-5">
                    <option>Shop by Departments</option>
                    <option>Electronics</option>
                    <option>Solar System</option>
                    <option>Security System</option>
                  </select>
                  <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <CustomLink to="/shop">Arduino</CustomLink>
                  <CustomLink to="/shop">Adaptors</CustomLink>
                  <CustomLink to="/shop">Raspberry</CustomLink>
                  <CustomLink to="/shop">Accessories</CustomLink>
                  <CustomLink to="/shop">Solar</CustomLink>
                  <CustomLink to="/shop">Modules</CustomLink>
                  <CustomLink to="/shop">IC</CustomLink>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="d-none d-lg-block">
              <a href='#discount' className="nav-link btn-coupon-code">
                <img src={giftIcon} alt="Gift Icon" />
                <strong className="ms-2">Get your coupon code</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;

function CustomLink({ to, children, ...props }){

  return (
    <li className="nav-item">
    <Link className="nav-link" to={to} {...props}> {children}
    </Link>
  </li>
      
  );

}
