import React from "react";
import Navbar from "./Navbar.jsx";

function Banner() {
  return (
    <header className="h-[680px] bg-gradient-to-br from-lavender via-vividpink to-lightpink">
      <Navbar />

      <div className="flex relative items-center px-10">
        <div className="flex-1 pl-[100px] pt-[328px] text-white">
          <h1 className="font-Sen font-Black text-40px">
            CLEARER SKIN THIS WAY!
          </h1>
          <p className="text-20px">
            Our new skincare line features clarifying ingredients
          </p>
          <button
            className="bg-gradient-to-r from-lightpink to-lavender text-18px font-black
          w-[302px] h-[52px] px-[80px] py-[17px] text-white my-2"
          >
            Shop Now
          </button>
        </div>
        <div className="text-white relative">
          <div className="w-[222px] h-[17px] text-32px">
            <h1>We Say yes to...</h1>
          </div>
          <div className="w-[246px] h-[68px] font-Regular text-20px my-10">
            <p>Vitamins, antioxidants, botanicals and other clean ingrediens</p>
          </div>
          <div className="w-[140px] h-[140px] my-10 absolute">
            <img
              src={require("../../constants/arrow.png")}
              alt="arrow"
              className="w-[109px] h-[109px] -rotate-180"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[79px] left-[700px] w-[609px] h-[601px] ">
        <img
          src={require("../../constants/banner.png")}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

export default Banner;