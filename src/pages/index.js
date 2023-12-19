import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import ProductInfo from "@/components/sections/ProductInfo";
import Features from "@/components/sections/Features";
import HowWorks from "@/components/sections/HowWorks";
import Context from "@/components/sections/Context";
import WhyUse from "@/components/sections/WhyUse";
import DatomePair from "@/components/sections/DatomePair";
import Contacts from "@/components/contacts/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chainkpr</title>
        <meta name="description" content="Chainkpr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      {/* <Announcement></Announcement> */}
      <Layout>
        <Hero></Hero>
        <Context></Context>
        <Features></Features>
        <ProductInfo></ProductInfo>
        <HowWorks></HowWorks>
        <WhyUse></WhyUse>
        <DatomePair></DatomePair>
        <Contacts></Contacts>
      </Layout>
    </>
  );
}
