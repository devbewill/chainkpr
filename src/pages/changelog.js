import Head from "next/head";
import Layout from "@/components/Layout";
import { changelog } from "./api/changelog";

export default function Changelog() {
  const changelogEntries = changelog.map((entry) => {
    return (
      <div key={entry.version} className="flex flex-col mb-10 py-10 border-b-2">
        <span className="text-sm text-gray-400">Version {entry.version}</span>
        <p className="text-xl font-bold pb-3">{entry.released}</p>

        {entry.list.map((change) => {
          const typesColor =
            change.type === "feature"
              ? "#7BCDBA"
              : change.type === "fixed"
              ? "#9799CA"
              : "#DBAD6A";
          return (
            <div key={change.title} className="flex-column lg:flex my-2">
              <div className="flex lg:w-2/12">
                <span
                  className="leading-7 px-4 h-fit text-center text-white rounded-md uppercase font-bold text-sm"
                  style={{ backgroundColor: typesColor }}
                >
                  {change.type}
                </span>
              </div>
              <div className="flex flex-col lg:w-10/12 gap-y-1">
                <span className="font-bold text-md">{change.title}</span>
                {/* <span className="text-xs">{change.description}</span> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  });

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
