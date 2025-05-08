"use client";
import React from "react";
import FooterHeader from "./FooterHeader";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => (
  <footer className="w-full bg-white">
    <FooterHeader />
    <FooterTop />
    <FooterBottom />
  </footer>
);

export default Footer; 