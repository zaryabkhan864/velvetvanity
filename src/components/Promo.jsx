import React from "react";

function Promo() {
  return (
    <section className="flex">
      <div className="relative w-full h-full">
        <div className="absolute w-[437px] h-[546px] bg-purple-400 ">
          <img src={require("../constants/promo.png")} alt="PROMO PHOTO" />
        </div>
        <div className="absolute bg-pink-300 w-[1241px] ">
          <h2>NEW ARRIVALS</h2>
          <p>
            Discover our latest products and get the best skincare exprience
          </p>
          <button>Shop now</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
