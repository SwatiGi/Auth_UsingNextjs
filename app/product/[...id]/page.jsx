// "use client"

// import { use, useEffect, useState } from "react"

// // ✅ dynamic metadata for each product
// // export async function generateMetadata({ params }) {
// //   const res = await fetch(`https://dummyjson.com/products/${params.id}`)
// //   const product = await res.json()

// //   return {
// //     title: product.title,
// //     description: product.description,
// //   }
// // }

// export default function ProductIdPage({ params }) {
//   const { id } = use(params)
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     if (!id) return
//     async function getProduct() {
//       const res = await fetch(`https://dummyjson.com/products/${id}`)
//       const data = await res.json()
//       setProduct(data)
//     }
//     getProduct()
//   }, [id])

//   return (
//     <div className="m-4 p-4 border border-pink-600 rounded-xl">
//       <h1 className="text-2xl font-bold mb-4">Product Details</h1>
//       {product ? (
//         <div>
//           <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//           <img
//             src={product.images?.[0]}
//             alt={product.title}
//             className="w-64 h-64 object-cover rounded-md mb-4"
//           />
//           <p className="mb-2">{product.description}</p>
//           <p className="font-medium">Price: ${product.price}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }


import React from 'react'
// export const metadata = {
// "title":"Product id page"
// }
export async function generateMetadata({ params }) {
  
  return {
    title: params.id,
  };
}

export default async function IdPage({ params }) {
 
  
   let { id } = await params;
  return (
       <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-500">
        Product ID: {id}
      </h1>
    </div>
  )
}
