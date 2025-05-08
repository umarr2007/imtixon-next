"use client";
import React from "react";
import Image from "next/image";

const FooterHeader = () => (
  <div className="bg-white py-8 px-4 md:px-8 rounded-lg shadow-sm mt-8 max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
      <div className="flex flex-col items-center md:items-start text-center md:text-left border-r border-gray-200 pr-4">
        <Image
          src="/kaktus.png"
          alt="Garden Care"
          width={64}
          height={64}
          className=" mb-2"
        />
        <h3 className="font-bold text-lg mb-1">Garden Care</h3>
        <p className="text-gray-500 text-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left border-r border-gray-200 pr-4">
        <Image
          src="/kaktus.png"
          alt="Garden Care"
          width={64}
          height={64}
          className=" mb-2"
        />
        <h3 className="font-bold text-lg mb-1">Plant Renovation</h3>
        <p className="text-gray-500 text-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left border-r border-gray-200 pr-4">
        <Image
          src="/kaktus.png"
          alt="Garden Care"
          width={64}
          height={64}
          className=" mb-2"
        />
        <h3 className="font-bold text-lg mb-1">Watering Graden</h3>
        <p className="text-gray-500 text-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="md:col-span-1 flex flex-col items-center md:items-start">
        <h4 className="font-bold mb-2">Would you like to join newsletters?</h4>
        <form className="flex w-full mb-2">
          <input
            type="email"
            placeholder="enter your email address..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#46a358] text-white px-5 py-2 rounded-r font-semibold"
          >
            Join
          </button>
        </form>
        <p className="text-gray-500 text-xs">
          We usually post offers and challenges in newsletter. We're your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  </div>
);

export default FooterHeader;
