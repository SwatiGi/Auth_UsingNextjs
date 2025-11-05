import Product from "./page"

export let metadata = {
"title":"Products Store - Products List"
}
export default function showMeta() {
  return <Product metadata={metadata}/>
}
