import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import Footer from "../common/Footer";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  const data = {
    name: "SRJ Store",
    btn: "Products",
    img: "./images/banner.jpg",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
