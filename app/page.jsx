"use client";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/Product/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Product />
   
    </div>
  );
}
