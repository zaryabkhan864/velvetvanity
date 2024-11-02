import React from "react";
import CategoryCard from "../Cards/CategoryCard.jsx";
import { CategoryData } from "../DataFile/DataFile.js";

function Categories() {
  return (
    <>    

      <section className="flex justify-around pb-4py-1- bg-white">
        {CategoryData.map((category) => (
          <CategoryCard
            key={category.id}
            img_path={category.img_path}
            name={category.name}
          />
        ))}
      </section>
    </>
  );
}

export default Categories;
