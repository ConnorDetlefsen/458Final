import Layout from "../Components/layout";
import { supabase } from "../utils/supabaseClient";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const { user } = Auth.useUser();
  //const { history } = this.props;
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();

    const { error } = await supabase.auth.signIn({ email, password });

    if (!error) {
      router.push("/");
      toast.success("Successfully logged in");
    }

    if (error) console.log(error);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

        <title>Login</title>
      </head>
      <h1 className="p-9 text-4xl text-center border-b-2 border-gray-300">
        LOGIN
      </h1>
      <div className="flex justify-center p-9  ">
        <div className="w-1/2 py-0 items-center m-0 rounded-2xl shadow-2xl	bg-gray-100">
          <form className="flex flex-col flex-wrap">
            <label className="p-9 text-2xl text-center ">
              Email:
              <span className="px-2" />
              <input
                className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                placeholder="Enter your email address"
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label className="p-9 text-2xl text-center ">
              Password:
              <span className="px-2" />
              <input
                className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                placeholder="Enter your password"
                type="text"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="p-2 rounded-md  text-md bg-black text-white hover:bg-gray-600"
              onClick={handleSubmit}
            />
          </form>
          <div className=" p-8 flex flex-row justify-center">
            <Link href={"/forgotpassword"}>
              <a className="p-2"> Forgot your password?</a>
            </Link>
            <Link href={"/signup"}>
              <a className="p-2">Sign up</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
