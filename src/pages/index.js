import Head from "next/head";
import Announcement from "@/components/Announcement";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import ProductInfo from "@/components/sections/ProductInfo";
import Features from "@/components/sections/Features";
import PartnersLogos from "@/components/sections/PartnersLogos";
import HowWorks from "@/components/sections/HowWorks";
import Context from "@/components/sections/Context";
import Benefits from "@/components/sections/Benefits";
import WhyUse from "@/components/sections/WhyUse";
import WhyBlockchain from "@/components/sections/WhyBlockchain";
import Industries from "@/components/sections/Industries";
import Contacts from "@/components/contacts/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Datome.io</title>
        <meta name="description" content="Datome.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      {/* <Announcement></Announcement> */}
      <Layout>
        <Hero></Hero>
        <PartnersLogos></PartnersLogos>
        <Context></Context>
        <Features></Features>
        <ProductInfo></ProductInfo>
        <HowWorks></HowWorks>
        <WhyUse></WhyUse>
        <WhyBlockchain></WhyBlockchain>
        {/* <Industries></Industries>
        <Benefits></Benefits> */}
        <Contacts></Contacts>
      </Layout>
    </>
  );
}
