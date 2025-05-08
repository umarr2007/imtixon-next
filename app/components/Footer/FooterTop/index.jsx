"use client";
import React from "react";
import Image from "next/image";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const FooterTop = () => (
  <div className="bg-[#f6f6f6] py-6 px-4 md:px-8 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 justify-between rounded-t-lg">
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="GreenShop" width={150} height={40} />
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <LocationPinIcon />
      <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <EmailIcon />
      <span>contact@greenshop.com</span>
    </div>
    <div className="flex items-center gap-2 text-gray-700">
      <LocalPhoneIcon />
      <span>+88 01911 717 490</span>
    </div>
  </div>
);

export default FooterTop;
