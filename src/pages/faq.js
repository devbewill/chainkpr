import Head from "next/head";
import Layout from "@/components/Layout";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Datome - Faq</title>
        <meta name="description" content="Datome - Faq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Faq></Faq>
      </Layout>
    </>
  );
}
