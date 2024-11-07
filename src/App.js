import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Products from "./components/Products/Products.jsx";
import Promo from "./components/Promo/Promo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Header />
      <Categories />
      <Products />
      <Promo />
      <Footer />
      </React.Fragment>
  );
}

export default App;
