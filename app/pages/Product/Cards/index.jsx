"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

const Cards = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    } else if (category) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }
  }, [category, search]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-[30px]">
      <div className="mb-6 flex justify-end gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#46a358] focus:border-[#46a358] transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">
            No products found.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <Link
              href={`/pages/Product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {product.title}
              </h3>
              <p className="text-green-600 font-bold mb-2">
                ${product.price}
              </p>
              <p className="text-gray-600 text-sm text-center line-clamp-3">
                {product.description}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
