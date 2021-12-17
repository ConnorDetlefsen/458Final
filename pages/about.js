import Layout from "../Components/layout";
export default function About() {
  const handleSubmit = () => {
    console.log("submit");
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

        <title>Hello, world!</title>
      </head>
      <section className="flex flex-col min-h-full flex-grow">
        <h1 className="p-9 text-4xl text-center border-b-2 border-gray-300">
          ABOUT
        </h1>
        <div className="flex flex-row flex-wrap items-center h-full border-b-2 border-gray-300">
          <h1 className="px-9 text-3xl">Buying</h1>
          <p className="text-left w-4/5 p-9 text-lg">
            We created PartOut to curate listings for individual items so that
            buyers can find used wheels at the lowest price possible. We’ve made
            the buying process simple by eliminating the hassle of communicating
            with the seller to figure out logistics, therefore, all you have to
            do is purchase online and have your item arrive at your door.
          </p>
        </div>
        <div className="flex flex-row flex-wrap h-full items-center border-b-2 border-gray-300	">
          <h1 className="px-9 text-3xl">Selling</h1>
          <p className="text-left w-4/5 p-9 text-lg">
            PartOut aggregates buyers who are looking for the specific item you
            are selling. Just search for your item, submit your listing, and
            start selling. Once your item sells, ship your item using the
            prepaid shipping label we send you. Once the buyer receives the
            item, you get paid.
          </p>
        </div>
        <div className="w-full flex flex-col items-center ">
          <h1 className="text-center p-6 text-xl">
            Sign up to learn about news, updates, promotions, and more!
          </h1>
          <div className="flex flex-row">
            <form>
              <input
                type="text"
                placeholder="Enter your email address..."
                className="h-12 w-64 p-2 rounded-md border-2	border-gray-300"
              ></input>
              <button
                className="p-2 m-2 rounded-md border-2 border-gray-300 hover:text-white hover:bg-black"
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="p-2" />
        </div>
      </section>
    </Layout>
  );
}
