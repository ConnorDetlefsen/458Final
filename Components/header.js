import Link from "next/link";
import { Auth } from "@supabase/ui";
import { supabase } from "../utils/supabaseClient";
import { toast } from "react-toastify";

export default function header({}) {
  const { user } = Auth.useUser();

  return (
    <nav className="flex flex-row items-center justify-between h-16 p-8 border-b-2 border-gray-300">
      <div className="flex flex-row items-center	">
        <Link href={`/`}>
          <a className="text-black text-5xl	">PartOut</a>
        </Link>
        <div className="p-4" />

        <Link class="nav-link" href={`/about`}>
          <a className="text-black text-2xl	">About</a>
        </Link>
        <div className="p-4" />
      </div>
      <div>
        {!user && (
          <span>
            <Link className="	" href={`/login`}>
              <a className="text-black text-2xl 	">Login</a>
            </Link>
          </span>
        )}
        {user && (
          <div className="flex flex-row items-center">
            <span>
              <Link className="	" href={`/profile`}>
                <a className="text-black text-2xl 	">Profile</a>
              </Link>
            </span>
            <div className="p-4" />
            <span>
              <Link className="	" href={`/createlisting`}>
                <a className="text-black text-2xl">Create Listing</a>
              </Link>
            </span>
            <div className="p-4" />
            <button
              className="text-black text-2xl "
              onClick={async () => {
                const { error } = await supabase.auth.signOut();
                if (!error) {
                  toast.success("Successfully logged out");
                }
                if (error) console.log("Error logging out:", error.message);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
