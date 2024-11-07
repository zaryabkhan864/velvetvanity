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
      <div>
        <h2 href="#">download our app</h2>
        <img
          src={require("../constants/googleplay and appstore.png")}
          alt="google/app"
        />
      </div>
      <div>
        <TbFlower />
      </div>
      <div className="flex">
        <div>
          <h3>unlock10% off your first order</h3>
          <div>
            <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
          </div>
          <button>SUBSCRIBE</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            veritatis, cum architecto corrupti rerum iusto omnis deleniti cumque
            magnam nobis sequi voluptate natus, velit doloremque ex tempora
            adipisci quasi recusandae.
          </p>
        </div>
        <div className="flex">
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
      <div className="flex">
        <FaTwitter />
        <FaFacebookF />
        <RiInstagramFill />
        <FaTiktok />
        <FaYoutube />
      </div>
    </footer>
  );
}

export default Footer;
