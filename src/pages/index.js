import Head from "next/head";
import Announcement from "@/components/Announcement";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import PartnersLogos from "@/components/PartnersLogos";
import HowWorks from "@/components/HowWorks";
import Context from "@/components/Context";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Datome.io</title>
        <meta name="description" content="Datome.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Announcement></Announcement> */}
      <Layout>
        <Hero></Hero>
        <PartnersLogos></PartnersLogos>
        <Context></Context>
        <ProductInfo></ProductInfo>
        <HowWorks></HowWorks>
        <Industries></Industries>
        <Benefits></Benefits>
        <Contacts></Contacts>
      </Layout>
    </>
  );
}
