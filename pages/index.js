import Head from "next/head";
import Header from "../Components/header";
import Product from "../Components/product";
import Layout from "../Components/layout";
import Link from "next/link";
import productContainer from "../Components/productContainer";
import { Auth } from "@supabase/ui";

import { useState } from "react";

const ROUTE_PRODUCT_ID = "/products/[id]";

export default function Home(allProductData) {
  const [products, setProducts] = useState([
    { id: 1, name: "tire", price: 110 },
    { id: 2, name: "wheels", price: 250 },
  ]);

  return (
    <Layout home>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />

        <title>Hello, world!</title>
      </head>
      <section>
        {products.map((product) => (
          <div key={`product-${product.id}`} className="bg-pink-100 p-6 ">
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
        ))}
      </section>
    </Layout>
  );
}
/* old code for mapping dynamic routing
 <ul className="flex flex-col items-center justify-center min-h-screen py-2">
          {[allProductData].map(({ id, name }) => (
            <li key={id}>
              <Link href={`/products/${id}`}>
                <a>{name}</a>
              </Link>
              <div>{id}</div>
              <br />
            </li>
          ))}
        </ul>
*/
