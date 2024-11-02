import React from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import { ProductData } from "../DataFile/DataFile.js";
function Products() {
  return (
    <section className="py-10 bg-white m-8 font-Sen">
      <h2 className="text-2xl text-pink-400 font-medium text-center mb-6">
        NEW ARRIVALS
      </h2>
      <div className="flex justify-around">
        {ProductData.map((product) => (
          <ProductCard
            key={product.id}
            img_path={product.img_path}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
