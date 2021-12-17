import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../Components/header";
import Layout from "../Components/layout";
import Link from "next/link";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const ROUTE_PRODUCT_ID = "/products/[id]";

export default function Home(allProductData) {
  const [products, setProducts] = useState([]);
  const { user } = Auth.useUser();

  useEffect(() => {
    //run the fetchGratitudes() function
    //after the initial render of the app
    // so we have access to the logged in user
    fetchListings();
  }, []);

  const fetchListings = async () => {
    //get the gratitudes data from supabase
    //set the value of gratitudes state to that data
    let { data: listings, error } = await supabase.from("listings").select("*");
    if (!error) {
      /*check date*/
      console.log(listings);

      setProducts(listings);
    } else {
      //there was an error
      console.log(error);
    }
    console.log();
  };
  /*
  let { data, error } = await supabase.from("listings").select("*");
  console.log(data);
  console.log(error);
  */
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
        <h1 className="p-9 text-4xl text-center border-b-2 border-gray-300">
          PRODUCTS
        </h1>

        <div className="flex-row flex justify-center p-8 flex-wrap">
          {products.map((product) => (
            <div
              key={`product-${product.id}`}
              className=" shadow-md rounded-lg m-4 p-3 w-1/5 flex flex-col border-2  border-gray-300"
            >
              <div className="flex flex-row justify-between flex-wrap">
                <Link
                  href={{
                    pathname: ROUTE_PRODUCT_ID,
                    query: {
                      id: product.product_id,
                      name: product.name,
                      price: product.price,
                      description: product.description,
                    },
                  }}
                >
                  <a className="text-2xl text-black py-2">{product.name}</a>
                </Link>
                <p className="py-2 text-lg">Favorite</p>
              </div>
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
