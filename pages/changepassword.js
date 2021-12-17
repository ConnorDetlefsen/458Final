import Layout from "../Components/layout";
import { supabase } from "../utils/supabaseClient";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const { user } = Auth.useUser();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();

    const { user, error } = await supabase.auth.update({ password: password });
    if (!error) toast.success("Successfully changed password");
    else {
      toast.error("Error updating password");
    }
    setPassword("");
    setpasswordConfirm("");
  };

  const handlePasswordConfirmChange = (event) => {
    setpasswordConfirm(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //update to display 6 character limit

  return (
    <div>
      <Head>
        <title>Change Password</title>
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

              <title>Change Password</title>
            </head>
            <h1 className="p-9 text-4xl text-center border-b-2 border-gray-300">
              Change Password
            </h1>
            <div className="flex justify-center p-9  ">
              <div className="w-1/2 py-0 items-center m-0 rounded-2xl shadow-2xl	bg-gray-100">
                <form className="flex flex-col flex-wrap">
                  <label className="p-9 text-2xl text-center ">
                    Password:
                    <span className="px-2" />
                    <input
                      className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                      placeholder="Create a password"
                      type="text"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </label>
                  <label className="p-2 text-2xl text-center ">
                    Confirm:
                    <span className="px-2" />
                    <input
                      className="rounded-md border-2 w-2/3 border-gray-300 text-base p-2"
                      placeholder="Confirm your password"
                      type="text"
                      name="email"
                      value={passwordConfirm}
                      onChange={handlePasswordConfirmChange}
                    />
                  </label>
                  {passwordConfirm === password && (
                    <input
                      type="submit"
                      value="Submit"
                      onClick={handleSubmit}
                      className="p-2 rounded-md  text-xl bg-black text-white hover:bg-gray-600"
                    />
                  )}
                  {passwordConfirm != password && (
                    <div className="p-2 rounded-md flex flex-row justify-center">
                      <p className="text-sm">Passwords must match</p>
                    </div>
                  )}
                </form>
                <div className=" p-8 flex flex-row justify-center">
                  <Link href={"/forgotpassword"}>
                    <a className="p-2"> Forgot your password?</a>
                  </Link>
                  <Link href={"/login"}>
                    <a className="p-2">Login</a>
                  </Link>
                </div>
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
