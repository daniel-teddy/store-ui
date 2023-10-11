import React from "react";

function SearchPop({ handleCloseS, showS }) {
  const showHideClassName = showS
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div
        className="offcanvas offcanvas-end show"
        data-bs-scroll="true"
        tabindex="-1"
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
        <div className="offcanvas-body">
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
                type="email"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
              />
              <button
                className="btn btn-dark rounded-end rounded-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="list-group mb-3 mt-3">
              
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">
                    BMI160 Gyro Sensör Modülü - 6 DOF - Eğim - İvmeölçer -
                    Jiroskop
                  </h6>
                  <small className="text-body-secondary">QTY: 3</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">
                    BMI160 Gyro Sensör Modülü - 6 DOF - Eğim - İvmeölçer -
                    Jiroskop
                  </h6>
                  <small className="text-body-secondary">QTY: 2</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">
                    BMI160 Gyro Sensör Modülü - 6 DOF - Eğim - İvmeölçer -
                    Jiroskop
                  </h6>
                  <small className="text-body-secondary">QTY: 3</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">HX711 Çift Kanal Tartı Sensörü Modülü</h6>
                  <small className="text-body-secondary">QTY: 1</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">iPhone XR</h6>
                  <small className="text-body-secondary">QTY: 1</small>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPop;
