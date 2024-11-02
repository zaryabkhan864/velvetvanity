import React from "react";

function Banner() {
  return (
    <header>
      <nav className="flex  justify-between">
        <div>
          <a href="#">VELVETVANITY</a>
        </div>
        <div>
          <a href="#">New arrivals</a>
          <a href="#">Search</a>
          <a href="#">Blog</a>
          <a href="#">Sale</a>
        </div>
      </nav>
      <div className="flex relative items-center justify-around">
        <div className="p-10 ">
          <h1 className="text-32px">CLEARER SKIN THIS WAY!</h1>
          <p>Our new skincare line features clarifying ingredients</p>
          <button>Shop Now</button>
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
