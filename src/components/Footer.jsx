import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillAmazonSquare } from 'react-icons/ai';
import Logo from '../images/logo1.png'
const Footer = () => (
  <footer className="py-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-menu">
            <img src={Logo} alt="logo" />
            <div className="social-links mt-5">
              <ul className="d-flex list-unstyled gap-2">
                <li>
                  <a href="faceboook.com" className="btn btn-outline-light">
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href="x.com" className="btn btn-outline-light">
                    <AiFillTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href="instagram.com" className="btn btn-outline-light">
                      <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="amazon.com" className="btn btn-outline-light">
                    <AiFillAmazonSquare />
                  </a>
                </li>
                {/* Add more social links here */}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Related</h5>
            <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Careers</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Affiliate Programme</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Ultras Press</a>
                </li>
            </ul>
          </div>
        </div>

        {/* <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Customer Service</h5>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                  <a href="httpd" className="nav-link">About us</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Conditions </a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Our Journals</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Careers</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Affiliate Programme</a>
                </li>
                <li className="menu-item">
                  <a href="httpd" className="nav-link">Ultras Press</a>
                </li>
            </ul>
          </div>
        </div> */}

        <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Customer Service</h5>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                  <a href="about us" className="nav-link">About us</a>
                </li>
                <li className="menu-item">
                  <a href="conditions" className="nav-link">Conditions </a>
                </li>
                <li className="menu-item">
                  <a href="posts" className="nav-link">Our Journals</a>
                </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Subscribe Us</h5>
            <p>Subscribe to our newsletter to get updates about our grand offers.</p>
            <form className="d-flex mt-3 gap-0">
              <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
              <button className="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FooterBottom = () => (
  <div id="footer-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 copyright">
          <p>© 2023 alemdar teknik ltd. All rights reserved.</p>
        </div>
        <div className="col-md-6 credit-link text-end">
          <p>made by <a href="https://templatesjungle.com/">teddy-webdev</a></p>
        </div>
      </div>
    </div>
  </div>
);

export { Footer, FooterBottom };
