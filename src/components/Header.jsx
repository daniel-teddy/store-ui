import React from 'react';
import Logo from '../images/logo1.png'
import giftIcon from '../images/gift.svg'

import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="index.html">
                <img src={Logo} alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="" method="">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 20,000 products"
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
                <a href="htps://teddy-webdev.click" className="rounded-circle bg-light p-2 mx-1">
                  <AiOutlineUser height="24" width="24"/>
                </a>
              </li>
              <li>
                <a href="htps://teddy-webdev.click" className="rounded-circle bg-light p-2 mx-1">
                  <AiOutlineHeart height="24" width="24"/>
                </a>
              </li>
              <li className="d-lg-none">
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
              </li>
              <li className="d-lg-none">
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
              </li>
            </ul>
            <div className="cart text-end d-none d-lg-block dropdown">
              <button
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
                    <li className="nav-item active">
                      <Link href="#women" className="nav-link">
                        Arduino
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link href="#men" className="nav-link">
                        Adaptors
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#kids" className="nav-link">
                        Raspberry
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#accessories" className="nav-link">
                        Accessories
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link href="#brand" className="nav-link">
                        Solar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#sale" className="nav-link">
                        Modules
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#blog" className="nav-link">
                        IC
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="d-none d-lg-block">
              <a href="htps://teddy-webdev.click" className="nav-link btn-coupon-code">
                <img src={giftIcon} alt="Gift Icon" />
                <strong className="ms-2">Get your coupon code</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


