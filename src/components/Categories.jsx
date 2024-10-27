function Categories() {
  const categories = [
    { name: "New arrivals", image: "#" },
    { name: "skincare", image: "#" },
    { name: "Makeup", image: "#" },
  ];

  return (
    <section>
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            {/* <img src={category.image} alt={category.name} /> */}
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
