"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProduct(data.products);
      } catch (error) {
        console.log("Error while fetching", error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      {product.length === 0 ? (
        <h1>Loading....</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className="p-2 border border-pink-500 rounded-xl hover:shadow hover:shadow-pink-500">
                <h2 className="font-semibold">{item.title}</h2>
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
