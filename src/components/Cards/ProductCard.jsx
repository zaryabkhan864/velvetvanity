import React from "react";

function ProductCard({ key, img_path, name, price }) {
  return (
    <div>
      <div>
        <img src={img_path} alt="Product" className="w-[258px] h-[368px]" />
        <h3 className="mt-4 text-lg text-vividpink">{name}</h3>
        <p className="text-gray-500">{price}</p>
        <button className="w-[169px] h-8 top-96 left-[2px] border-2 border-vividpink hover:bg-lightpink text-vividpink">
          PURCHASE
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
