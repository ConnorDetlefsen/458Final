import Layout from "../../components/layout";
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
    <div className="bg-yellow-200">
      <Header />
      <br />
      <h1>Product ID: {router.query.id}</h1>
      <h1>Product name: {router.query.name}</h1>
      <h1>Product price: {router.query.price}</h1>
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
