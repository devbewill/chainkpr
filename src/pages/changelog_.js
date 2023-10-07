import Head from "next/head";
import Layout from "@/components/Layout";
import { changelog } from "./api/changelog";

const ChangelogItem = ({ version, released, type, title, description }) => (
  <div>
    <h3>{version}</h3>
    <h2>{released}</h2>
    <li>
      <b>Type:</b> {type}
      <br />
      <b>Title:</b> {title}
      <br />
      <b>Description:</b> {description}
    </li>
  </div>
);

export default function Changelog() {
  const changelogItems = changelog.map((changelogEntry) => (
    <ChangelogItem
      key={changelogEntry.version}
      version={changelogEntry.version}
      released={changelogEntry.released}
      type={changelogEntry.list[0].type}
      title={changelogEntry.list[0].title}
      description={changelogEntry.list[0].description}
    />
  ));
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
          <ul>{changelogItems}</ul>
          {/* <div className="h-full col-span-2 ">
            {changelog.map((item) => (
              <div
                key={item.version}
                className="lg:flex py-3 border-b-2 last:border-0"
              >
                <h1 className=" py-2 text-lg font-bold lg:w-1/3 lg:pr-24">
                  {item.version}
                </h1>
                <h2 className=" py-2 text-lg font-bold lg:w-1/3 lg:pr-24">
                  {item.released}
                </h2>
              </div>
            ))}
          </div> */}
        </div>
      </Layout>
    </>
  );
}
