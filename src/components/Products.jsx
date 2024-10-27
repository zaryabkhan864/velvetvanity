import React from "react";
function Products() {
  const products = [
    { name: "FACE WASH", price: "$14.00", image: "" },
    { name: "HAYLURONIC ACID", price: "$15.50", image: "" },
    { name: "NEW LINE", price: "$20.00", image: "" },
    { name: "LIP GLOSS", price: "$10.00", image: "" },
    { name: "SERUM", price: "$13.00" },
  ];

  return (
    <section>
      <h2>New Arrivals</h2>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Purchase</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
