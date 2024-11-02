import React from 'react'

function CategoryCard({key ,img_path,name}) {
  return (
        <div className="text-center relative w-[347px] h-[352px] ">
          <img
            src={img_path}
            alt="Category"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-pink-300 opacity-35 blur-sm"></div>
          <div className="absolute bottom-4 left-5">
            <h3 className="mt-4 text-lg text-white">{name}</h3>
          </div>
        </div>
    )
}

export default CategoryCard