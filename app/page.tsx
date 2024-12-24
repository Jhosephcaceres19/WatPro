'use client'
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function watpro() {
  return (
    <div className="bg-linear-20 from-black via-sky-700 to-sky-500 min-h-screen">
      <Navbar />
      <div>
        <Header />
      </div>
    </div>
  );
}
