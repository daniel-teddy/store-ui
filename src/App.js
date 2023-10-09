import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/vendor.css";
import "./styles/preloader.css";
import "./index.css";

import Header from "./components/Header";
import { Footer, FooterBottom } from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import EditPrductPage from "./pages/EditPrductPage";
import ShopPageSolar from "./pages/solarPage";
import AboutPage from "./pages/AboutPage";
import PreLoader from "./components/preLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore/:name" element={<ProductPage />} />
            {/* <Route path='/product' element={<ProductPage />} /> */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/solar" element={<ShopPageSolar />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/edit-product" element={<EditPrductPage />} />
          </Routes>
          <Footer />
          <FooterBottom />
        </>
      )}
    </div>
  );
}

export default App;
