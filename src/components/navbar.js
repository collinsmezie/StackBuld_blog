import styles from "./components.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const categories =
    ["CINEMA", "DESIGN", "FOOD", "TECHNOLOGY", "SCIENCE", "ART"]


  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center space-x-12">
        <div>
          <Image src="/images/blog.png" alt="Logo" width={140} height={140} />
        </div>
        {categories &&
          categories.map((category, index) => (
            <div
              key={index}
              className={`${styles["category-link"]} text-lg font-light font-sans hover:text-teal-500 hover:border-teal-500 transition-colors duration-100 cursor-pointer`}
            >
              <Link href={`/${category.toLowerCase()}/`}>
                {category}
              </Link>
            </div>
          ))}
        <div className="text-lg font-light font-sans text-gray-800 hover:text-gray-600 cursor-pointer">
          John
        </div>
        <button className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-2 px-4 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
}
