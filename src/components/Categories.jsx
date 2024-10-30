function Categories() {
  const categories = [
    { name: "New arrivals", image: "../constants/newarrival.png" },
    { name: "skincare", image: "../constants/skincare.png" },
    { name: "Makeup", image: "../constants/makeup.png" },
  ];

  return (
    <section className="py-1- bg-white">
      <div className="flex justify-center space-x-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} />
            <h3 className="mt-4 text-lg text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
