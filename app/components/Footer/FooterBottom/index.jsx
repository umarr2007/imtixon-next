"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactlessIcon from '@mui/icons-material/Contactless';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import CameraIcon from '@mui/icons-material/Camera';
const FooterBottom = () => (
  <div className="bg-white py-12 px-4 md:px-8 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-100">
    <div>
      <h4 className="font-bold mb-4">My Account</h4>
      <ul className="space-y-2 flex flex-col text-gray-700">
        <Link href={"/"}>My Account</Link>
        <Link href={"/"}>Our stores</Link>
        <Link href={"/"}>Contact us</Link>
        <Link href={"/"}>Career</Link>
        <Link href={"/"}>Specials</Link>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Help & Guide</h4>
      <ul className="space-y-2 flex flex-col text-gray-700">
        <Link href={"/"}>Help Center</Link>
        <Link href={"/"}>How to Buy</Link>
        <Link href={"/"}>Shipping & Delivery</Link>
        <Link href={"/"}>Product Policy</Link>
        <Link href={"/"}>How to Return</Link>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Categories</h4>
      <ul className="space-y-2 text-gray-700">
        <li>House Plants</li>
        <li>Potter Plants</li>
        <li>Seeds</li>
        <li>Small Plants</li>
        <li>Accessories</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Social Media</h4>
      <div className="flex gap-3 mb-4">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </div>
      <h4 className="font-bold mb-2">We accept</h4>
      <div className="flex gap-2">
        <ContactlessIcon />
        <CardMembershipIcon />
        <CameraIcon />
        <ControlCameraIcon />
      </div>
    </div>
  </div>
);

export default FooterBottom;
