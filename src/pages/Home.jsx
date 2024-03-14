import React, { useEffect } from "react";
// import CategorySection from '../components/CategorySection';
import NewlyArrivedBrands from "../components/NewlyBrands";
import TrendingProducts from "../components/TrendingProducts";
import DiscountSection from "../components/DiscountSection";
import JustArrived from "../components/justArrived";
import ApplyDiscount from "../components/ApplyDiscount";
import RelatedProducts from "../components/RelatedProducts";
import FeaturesSection from "../components/FeaturesSection";
import BannerSection from "../components/BannerSection";
// import ShowSchool from "../components/ShowSchool";j

function Home() {
  // const [popAdv, setPopAdv] = useState(true);
  // const updatePopAdv = (newValue) => {
  //   setPopAdv(newValue);
  // };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="">
        {/* {popAdv && <ShowSchool popAdv={popAdv} updatePopAdv={updatePopAdv} />} */}
        <BannerSection />
        {/* <CategorySection /> */}
        <NewlyArrivedBrands />
        <TrendingProducts />
        <DiscountSection />
        <JustArrived />
        <ApplyDiscount />
        <RelatedProducts />
        <FeaturesSection />
      </div>
    </>
  );
}

export default Home;
