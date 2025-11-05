import ProductDetail from "./page"


export async function generateMetadata({ params }) {
  const { id } = await params;

  // ✅ Product data fetch karo
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
// console.log(data)
  // ✅ Ab product ke title ko metadata me use karo
  return {
    title: data.category,
    description: data.description || `Details of product ${id}`,
  };
}

export default async function ProductPage({ params }) {
  const { id } =await params;
  return <ProductDetail id={id} /> ;
}


// import Link from "next/link"
// export let metadata = {
// "title":"Products Store - Products List"
// }
// export default function Product() {
//    return <div className="text-pink-500 text-2xl">I am Product <br />
//    <Link href="/product/5">Go to id 5</Link>
//    </div>
// }