import Head from "next/head";
import Header from "../Components/header";
import Layout from "../Components/layout";
import Link from "next/link";
import { Auth } from "@supabase/ui";
import { useState } from "react";

const ROUTE_PRODUCT_ID = "/products/[id]";

export default function Home(allProductData) {
  const [products, setProducts] = useState([
    { id: 1, name: "tire", price: 110 },
    { id: 2, name: "wheels", price: 250 },
    { id: 3, name: "Car", price: 1000 },
    { id: 4, name: "Tools", price: 10 },
    { id: 5, name: "Mod", price: 400 },
    { id: 6, name: "Car", price: 1000 },
    { id: 7, name: "Wheel", price: 10 },
    { id: 8, name: "Motorcycle Wheel", price: 400 },
    { id: 9, name: "5mm Round Cut Tennis Bracelet in White Gold", price: 1000 },
  ]);
  const { user } = Auth.useUser();

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
        <h1 className="p-12 text-7xl text-center border-b-2 border-gray-300">
          PRODUCTS
        </h1>

        <div className="flex-row flex justify-center p-8 flex-wrap">
          {products.map((product) => (
            <div
              key={`product-${product.id}`}
              className=" shadow-md rounded-lg m-4 p-3 w-1/4 flex flex-col border-2  border-gray-300"
            >
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
                <a className="text-4xl text-black py-2">{product.name}</a>
              </Link>
              <p>${product.price}</p>

              <button className="bg-black text-white w-1/3 p-2 rounded-lg hover:bg-gray-600">
                Add to cart
              </button>
            </div>
          ))}
        </div>
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
