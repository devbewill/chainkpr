import Head from "next/head";
import Layout from "@/components/Layout";
import AccordionFaq from "@/components/AccordionFaq";

export default function Faq() {
  return (
    <>
      <Layout>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 max-w-7xl px-6 py-40">
          <div className="self-start lg:sticky top-10 col-span-1 overflow-y-scroll">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary uppercase">
                Faq
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                If something is not clear..
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This page is designed to provide comprehensive answers to the
                most common inquiries. We've curated a collection of questions
                to shed light on our platform, its functionalities, features,
                and how it can elevate your business operations.
                <br></br> If you can't find the answer you're looking for, feel
                free to reach out to our dedicated support team.
              </p>
            </div>
          </div>

          <div className="h-full col-span-2 ">
            <AccordionFaq></AccordionFaq>
          </div>
        </div>
      </Layout>
    </>
  );
}
