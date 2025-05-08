"use client";

import React, { useState } from "react";
import Cards from "./Cards";
import Categories from "./Categories/page";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("beauty");

  return (
    <div className="container mx-auto max-w-[1440px] p-4">
      <div className="flex justify-end mb-4"></div>

      <div className="flex gap-4">
        <div className="w-1/4">
          <Categories
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="w-3/4">
          <Cards category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Product;
