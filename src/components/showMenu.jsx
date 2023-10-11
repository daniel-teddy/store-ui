import React from "react";
import { CustomLink } from "./Header";

function ShowMenu({ handleCloseM, showM }) {
  const showHideClassName = showM
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div
        className="offcanvas offcanvas-end show"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleCloseM}
          ></button>
        </div>

        <div className="offcanvas-body">
          <select className="filter-categories border-0 mb-0 me-5">
            <option>Shop by Departments</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
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
    </div>
  );
}

export default ShowMenu;
