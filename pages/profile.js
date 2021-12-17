import Layout from "../Components/layout";
import { supabase } from "../utils/supabaseClient";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect } from "react";
const ROUTE_PRODUCT_ID = "/products/[id]";

export default function Profile() {
  const { user } = Auth.useUser();

  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    //run the fetchGratitudes() function
    //after the initial render of the app
    // so we have access to the logged in user
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const useridFinal = user.id;

    //get the gratitudes data from supabase
    //set the value of gratitudes state to that data
    let { data: listings, error } = await supabase
      .from("listings")
      .select("*")
      // Filters
      .eq("owner_id", useridFinal);
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

  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {user ? (
          <Layout home>
            <head>
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossorigin="anonymous"
              />

              <title>Profile</title>
            </head>
            <h1 className="p-12 text-3xl text-center border-b-2 border-gray-300">
              {user.email} Profile
            </h1>
            <div className="flex flex-row justify-center flex wrap">
              <h1 className="p-12 text-2xl text-center ">
                <Link href={"/changepassword"}>
                  <a className="p-2">Change Password</a>
                </Link>
              </h1>
            </div>
            <h1 className="p-12 text-3xl text-center border-t-2 border-gray-300">
              Listings
            </h1>
            <div className="flex justify-center p-12  ">
              <div className="flex-row flex justify-center p-8 flex-wrap">
                {products.map((product) => (
                  <div
                    key={`product-${product.id}`}
                    className=" shadow-md rounded-lg m-4 p-3 flex flex-col border-2  border-gray-300"
                  >
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
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        ) : (
          <div className="p-12 text-7xl text-center border-b-2 border-gray-300">
            <span>
              <Link className="	" href={`/login`}>
                <a className="text-black text-2xl 	">Login</a>
              </Link>
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
