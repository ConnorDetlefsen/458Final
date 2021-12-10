import Link from "next/link";
import { Auth } from "@supabase/ui";
import { supabase } from "../utils/supabaseClient";

export default function header({}) {
  const { user } = Auth.useUser();

  return (
    <nav className="flex flex-row items-center h-20 p-8 border-b-2 border-gray-300">
      <Link href={`/`}>
        <a className="text-black text-4xl	">PartOut</a>
      </Link>
      <div className="p-4" />

      <Link class="nav-link" href={`/about`}>
        <a className="text-black text-xl	">About</a>
      </Link>
      <div className="p-4" />
      {!user && (
        <span>
          <Link className="	" href={`/login`}>
            <a className="text-black text-xl 	">Login</a>
          </Link>
        </span>
      )}
      {user && (
        <div>
          <button
            className="text-black text-xl "
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.log("Error logging out:", error.message);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
