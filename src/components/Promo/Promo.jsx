import React from "react";

function Promo() {
  return (
    <section className="relative flex items-center justify-between bg-pink-300 m-16 font-black ">
      <div className="relative">
        <img
          src={require("../../constants/promo.png")}
          alt="PROMO PHOTO"
          className="relative -top-20 bg-purple-400 w-[437px] h-[546px] object-cover"
        />
      </div>
      <div className="w-2/3 px-10 text-white text-center text-3xl">
        <h2 className="mb-5">NEW ARRIVALS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex?
          Quo delectus quas quibusdam facilis, voluptas, aliquid corrupti eius
          nam incidunt modi repellat, voluptate mollitia quae soluta officiis
          dolorem laborum.
        </p>
        <button className="w-[302px] h-[52px] top-96 left-[2px] border-2 border-white hover:bg-pink-100 text-white mt-7">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default Promo;
