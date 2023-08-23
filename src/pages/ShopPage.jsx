import React from 'react'
import ApplyDiscount from '../components/ApplyDiscount'
import backgroundpattern from '../images/background-pattern.jpg'
import ProductsPageSmall from '../components/smallShop'

function ShopPage() {
  return (
    <>
    <section className="py-5 mb-5" style={{
        backgroundImage: `url(${backgroundpattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1 className="page-title pb-2">Shop</h1>
          <nav className="breadcrumb fs-6">
            <a className="breadcrumb-item nav-link" href="https">Home</a>
            <a className="breadcrumb-item nav-link" href="https">Pages</a>
            <span className="breadcrumb-item active" aria-current="page">Shop</span>
          </nav>
        </div>
      </div>
    </section>
    <ProductsPageSmall />
    <ApplyDiscount />
    </>
  )
}

export default ShopPage