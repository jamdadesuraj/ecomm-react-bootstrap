import React from "react";
import HeroSection from "./HeroSection";

const About = () => {
  const data = {
    name: "Ecommerence Store",
    btn: "Get Products",
    img: "./images/about.jpg",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
