import "tailwindcss/tailwind.css";
import { Auth } from "@supabase/ui";
import { supabase } from "../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
      <ToastContainer />
    </Auth.UserContextProvider>
  );
}

export default MyApp;
