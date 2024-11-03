import React from "react";
import Navbar from "./Navbar.jsx";

function Banner() {
  return (
    <header className="bg-gradient-to-br from-lavender via-vividpink to-lightpink">
      <Navbar />

      <div className="flex relative items-center justify-around">
        <div className="p-10 ">
          <h1 className="text-32px">CLEARER SKIN THIS WAY!</h1>
          <p>Our new skincare line features clarifying ingredients</p>
          <button
            className="bg-gradient-to-r from-lightpink to-lavender text-18px font-black
          w-[302px] h-[52px] top-96 left-[2px] text-white mt-7"
          >
            Shop Now
          </button>
        </div>
        <div className="flex ralative items-center ">
          <div className="relative">
            <img
              src={require("../../constants/banner.png")}
              alt="Banner"
              className="w-[609px] h-[601px] relative"
            />
          </div>
          <div>
            <h2>we say yes to...</h2>
            <p>vitamins, antioxidants, botanicals and other clean ingrediens</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
