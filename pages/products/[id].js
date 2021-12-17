import Layout from "../../Components/layout";
import Head from "next/head";
import Header from "../../Components/header";

/*
export async function getStaticProps({ params }) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}
*/
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  return (
    <div className="">
      <Header />
      <br />
      <h1 className="p-12 text-7xl text-center border-b-2 border-gray-300">
        {router.query.name}
      </h1>
      <div className=" p-12 h-full w-full flex flex-col items-center text-4xl border-b-2 border-gray-300">
        <h1>{router.query.description}</h1>
      </div>
      <h1 className="p-12 text-7xl text-center border-b-2 border-gray-300">
        ${router.query.price}
        <div className="p-2" />
        <button className="bg-black text-white w-1/3 p-2  rounded-lg hover:bg-gray-600">
          Add to cart
        </button>
      </h1>

      <br />
    </div>
  );
}

/* couldnt figure this way out 
export default function Post({ post }) {
  return (
    <Layout>
      <Header />

      <br />
      {post.id}
      <br />
    </Layout>
  );
}
*/
