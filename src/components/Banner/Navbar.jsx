import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-20 py-3  text-white">
        <div className="flex-1"></div>

        <div className="flex-1 text-center text-32px">
          <a href="#">VELVETVANITY</a>
        </div>

        <div className="flex-1 flex justify-end text-18px space-x-8 font-bold">
          <a href="#">New arrivals</a>
          <a href="#">Search</a>
          <a href="#">Blog</a>
          <a href="#">Sale</a>
          <MdOutlineShoppingCart className="text-24px"/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
