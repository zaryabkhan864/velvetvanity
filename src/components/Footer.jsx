import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="google-play-logo.png" alt="Google Play" />
        </a>
        <a
          href="https://www.apple.com/app-store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="app-store-logo.png" alt="App Store" />
        </a>
      </div>

      <form>
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">subscribe</button>
      </form>
      <p>Velvet Vanity ,2023</p>
    </footer>
  );
}

export default Footer;
