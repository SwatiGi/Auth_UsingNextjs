import Product from "./page"

export let metadata = {
"title":"Products Store - Products List"
}
export default function showMeta({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
