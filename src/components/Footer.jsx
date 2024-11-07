import React from "react";
import { TbFlower } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10 bg-white text-center">
      <div className="text-lavender font-Sen text-40px mb-20 font-ExtraBold">
        <h2 href="#">download our app</h2>
        <div className="flex justify-center">
          <img
            src={require("../constants/googleplay and appstore.png")}
            alt="google/app"
          />
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <TbFlower className="text-lavender text-64px" />
      </div>
      <div className="flex justify-center mb-20">
        <div className="flex-1">
          <h3 className="text-40px text-lavender">
            unlock10% off your first order
          </h3>
          <div className="mt-4 ">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="border-2 border-gray-300 px-4 py-2 w-[600px] h-[72px] text-center"
            />
          </div>
          <button className="my-6 text-lavender">SUBSCRIBE</button>
          <div className="flex justify-center">
            <p className="w-[300px] text-center text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur delectus fuga tempore quae consequuntur
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-5 text-left">
          <div>
            <p>about US</p>
            <p>FAQ</p>
            <p>SHIPPING</p>
            <p>TERMS AND CONDITIONS</p>
            <p>PRIVACY POLICY</p>
          </div>
          <div>
            <p>CONTACT US</p>
            <p>GIFT CARD TERMS</p>
            <p>RETURNS</p>
            <p>COOKIE POLICY</p>
            <p>COOKIE PREFERENCES</p>
          </div>
        </div>
      </div>
      <div className="flex text-40px text-lavender justify-center ">
        <FaTwitter className="mx-2" />
        <FaFacebookF className="mx-2" />
        <RiInstagramFill className="mx-2" />
        <FaTiktok className="mx-2" />
        <FaYoutube className="mx-2" />
      </div>
    </footer>
  );
}

export default Footer;
