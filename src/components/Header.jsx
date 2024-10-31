import React from "react";

function Header() {
  return <header className="p-4 my-8 bg-white  ">
    <nav className="flex justify-center space-x-8 text-pink-400 text-[1.1rem]">
    <a className="hover:text-pink-300" href="#new-arrivals">New Arrivals</a>
    <a className="hover:text-pink-300" href="#bestsellers">Bestsellers</a>
    <a className="hover:text-pink-300" href="#skincare">Skincare</a>
    <a className="hover:text-pink-300" href="#makeup">Makeup</a>
    <a className="hover:text-pink-300" href="#hair">Hair</a>
    <a className="hover:text-pink-300" href="#accessories">Accessories</a>
    <a className="hover:text-pink-300" href="#blog">Blog</a>
    <a className="hover:text-pink-300" href="#sale">Sale</a>
    </nav>
  </header>;
}

export default Header;
