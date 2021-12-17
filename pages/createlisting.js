import Layout from "../Components/layout";
import { supabase } from "../utils/supabaseClient";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function CreateListing() {
  const { user } = Auth.useUser();
  //const { history } = this.props;
  const router = useRouter();

  const user1 = supabase.auth.user();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [condition, setCondition] = useState("New");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const useridFinal = user.id;
    const nameFinal = name;
    const descriptionFinal = description;
    const conditionFinal = condition;
    const priceFinal = parseInt(price);

    const { data, error } = await supabase.from("listings").insert([
      {
        name: nameFinal,
        owner_id: useridFinal,
        description: descriptionFinal,
        price: priceFinal,
        condition: conditionFinal,
      },
    ]);
    if (!error) {
      toast.success("Successfully listed item!");
      setName("");
      setPrice("");
      setDescription("");
      setCondition("New");
    } else {
      toast.error("Error submitting item");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  return (
    <Layout home>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />

        <title>Create Listing</title>
      </head>
      <h1 className="p-9 text-4xl text-center border-b-2 border-gray-300">
        CREATE LISTING
      </h1>
      <div className="flex justify-center p-4  ">
        <div className="w-1/2 py-0 items-center m-0 rounded-2xl shadow-2xl	bg-gray-100">
          <form className="flex flex-col flex-wrap ">
            <div className="flex flex-row  h-full p-4 items-center text-2xl">
              Item Name:
              <span className="px-2" />
              <input
                className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                placeholder="Enter your product's name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex flex-row  h-full p-4 items-center text-2xl">
              Item Condition:
              <span className="px-2" />
              <select
                className="rounded-md border-2 m-0 w-1/2 h-1/5 border-gray-300 text-base p-2"
                value={condition}
                onChange={handleConditionChange}
              >
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="flex flex-row  h-full p-4 items-center text-2xl">
              Description:
              <span className="px-2" />
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter a description for your item"
                className="p-2 rounded-md border-2 m-0 h-24 w-2/3 border-gray-300 text-sm "
              ></textarea>
            </div>
            <div className="flex flex-row  h-full p-4 items-center text-2xl">
              Selling Price:
              <span className="px-2" />
              <input
                className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                placeholder="Enter the price you want to sell your item for"
                type="text"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="p-2 rounded-md  text-md bg-black text-white hover:bg-gray-600"
              onClick={handleSubmit}
            />
          </form>
          <div className="p-2" />
        </div>
      </div>
    </Layout>
  );
}
