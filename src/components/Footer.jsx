import React from "react";

function Footer() {
  return (
    <footer className="py-10 bg-white text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://play.google.com"
          target="_blank"
          // rel="noopener noreferrer"
        >
          <img src="google-play-logo.png" alt="Google Play" />
        </a>
        <a
          href="https://www.apple.com/app-store"
          target="_blank"
          // rel="noopener noreferrer"
        >
          <img src="app-store-logo.png" alt="App Store" />
        </a>
      </div>

      <form className="mt-6">
        <input type="email" placeholder="Enter your email address" className="px-4 py-2 border rounded-" />
        <button type="submit" className="ml-2 px-4 py-2 bg-pink-300 text-wrap rounded-full">subscribe</button>
      </form>
      <p>Velvet Vanity ,2023</p>
    </footer>
  );
}

export default Footer;
