
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setsortOrder] = useState("");

  const data = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Phone", price: 25000, category: "Electronics" },
    { id: 3, name: "T-Shirt", price: 799, category: "Clothing" },
    { id: 4, name: "Shoes", price: 1999, category: "Footwear" },
    { id: 5, name: "Watch", price: 3499, category: "Accessories" },
    { id: 6, name: "Headphones", price: 1499, category: "Electronics" },
    { id: 7, name: "Jeans", price: 1299, category: "Clothing" },
    { id: 8, name: "Backpack", price: 999, category: "Accessories" },
    { id: 9, name: "Keyboard", price: 2499, category: "Electronics" },
    { id: 10, name: "Cap", price: 499, category: "Clothing" }
  ];

  const handleSearch = () => {
    const searchTerm = search.toLowerCase();

    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      )
    );
  };

  function handleSort(e) {
    setsortOrder(e.target.value);
  }

  const productsToDisplay = search ? filteredData : data;

  const sortedData = [...productsToDisplay];

  if (sortOrder === "low") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "category") {
    sortedData.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <select value={sortOrder} onChange={handleSort}>
        <option value="">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="category">Category: A to Z</option>
      </select>

      {sortedData.map((item) => (
        <div key={item.id}>
          <p>=============================</p>
          <p>{item.name}</p>
          <p>Price: ₹{item.price}</p>
          <p>Category: {item.category}</p>
          <p>=============================</p>
        </div>
      ))}
    </>
  );
}

export default App;
