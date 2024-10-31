import React from "react";
function Products() {
  const products = [
    {
      name: "FACE WASH",
      price: "$14.00",
      image: require("../constants/facewash.png"),
    },
    {
      name: "HAYLURONIC ACID",
      price: "$15.50",
      image: require("../constants/hyaluronicacid.png"),
    },
    {
      name: "NEW LINE",
      price: "$20.00",
      image: require("../constants/newline.png"),
    },
    {
      name: "LIP GLOSS",
      price: "$10.00",
      image: require("../constants/lipgloss.png"),
    },
    {
      name: "SERUM",
      price: "$13.00",
      image: require("../constants/serum.png"),
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl text-pink-400 font-medium text-center mb-6">
        New Arrivals
      </h2>
      <div className="grid grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="w-[258px] h-[368px]"
            />
            <h3 className="mt-4 text-lg text-pink-300">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <button className="w-[169px] h-8 top-96 left-[2px] border-2 border-pink-300 hover:bg-pink-100 text-pink-300">PURCHASE</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
