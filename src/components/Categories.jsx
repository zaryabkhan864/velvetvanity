function Categories() {
  const categories = [
    { name: "NEW ARRIVALS", image: require("../constants/newarrival.png") },
    { name: "SKINCARE", image: require("../constants/skincare.png") },
    { name: "MAKEUP", image: require("../constants/makeup.png") },
  ];

  return (
    <section className="py-1- bg-white">
      <div className="flex justify-center space-x-8 pb-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center relative w-[347px] h-[352px] ">
            <img src={category.image} alt={category.name} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-pink-300 opacity-35 blur-sm"></div>
            <div className="absolute bottom-4 left-5">
              <h3 className="mt-4 text-lg text-white">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
