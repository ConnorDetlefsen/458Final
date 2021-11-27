//this is what the products are mapped to in index

import Link from "next/link";
const ROUTE_PRODUCT_ID = "/products/[id]";

export default function productContainer({ product }) {
  return (
    <div className="flex flex-row bg-gray-200 items-center h-16 p-8">
      <Link
        href={{
          pathname: ROUTE_PRODUCT_ID,
          query: {
            id: product.id,
            name: product.name,
            price: product.price,
          },
        }}
      >
        <a>{product.name}</a>
      </Link>
    </div>
  );
}
