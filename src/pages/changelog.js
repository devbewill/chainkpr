import Head from "next/head";
import Layout from "@/components/Layout";
import ChangelogItem from "@/components/ChangelogItem";
import { changelog } from "./api/changelog";

const changelogEntries = changelog.map((entry) => {
  return <ChangelogItem key={entry.version} entry={entry} />;
});

export default function Changelog() {
  return (
    <>
      <Layout>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 max-w-7xl px-6 py-40">
          <div className="self-start lg:sticky top-10 col-span-1 overflow-y-scroll">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary uppercase">
                Changelog
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                If something is not clear..
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This page is designed to provide comprehensive answers to the
                most common inquiries.
              </p>
            </div>
          </div>
          <div className="h-full col-span-2 lg:pl-10 ">{changelogEntries}</div>
        </div>
      </Layout>
    </>
  );
}
