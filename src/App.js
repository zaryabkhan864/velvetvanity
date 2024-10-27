import "./App.css";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Products from "./components/Products.jsx";
import Category from "./components/Category.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Category />
      <Footer/>
    </>
  );
}

export default App;
