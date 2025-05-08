"use client";

import React, { useEffect, useState } from "react";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kategoriyalar</h1>

      {error && <p className="text-red-600">{error}</p>}

      <ul className="space-y-2 mb-6">
        {categories.map((category) => (
          <li
            key={category.slug}
            className={`cursor-pointer p-2 rounded transition-all duration-200 font-[700] text-[#000] hover:text-[#46a358] ${
              selectedCategory === category.slug
                ? "text-[#46a358] font-[700]"
                : ""
            }`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;