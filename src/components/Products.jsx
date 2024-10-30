import React from "react";
function Products() {
  const products = [
    { name: "FACE WASH", price: "$14.00", image: "../constants/facewash.png" },
    { name: "HAYLURONIC ACID", price: "$15.50", image: "../constants/hyaluronicacid.png" },
    { name: "NEW LINE", price: "$20.00", image: "../constants/newline.png" },
    { name: "LIP GLOSS", price: "$10.00", image: "../constants/lipgloss.png" },
    { name: "SERUM", price: "$13.00" ,image:"../constants/serum.png"},
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
      <div className="grid grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <h3 className="mt-4 text-lg text-pink-500">{product.name}</h3>
            <p>{product.price}</p>
            <button>Purchase</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
