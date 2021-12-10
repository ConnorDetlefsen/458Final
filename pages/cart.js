import Layout from "../Components/layout";
export default function Cart() {
  return (
    <Layout home>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />

        <title>Your cart</title>
      </head>
      <section className="flex flex-col min-h-full flex-grow">
        <h1 className="p-12 text-7xl text-center border-b-2 border-gray-300">
          Cart
        </h1>
      </section>
    </Layout>
  );
}
