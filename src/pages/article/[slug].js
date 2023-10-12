import React, { useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "@/components/Layout";

import hljs from "highlight.js/lib/core";
import "highlight.js/styles/ir-black.css";
import json from "highlight.js/lib/languages/json";
hljs.registerLanguage("json", json);

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync("public/articles");

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`public/articles/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

function Article({ frontmatter, content }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const { tags, title, socialImage, excerpt } = frontmatter;

  return (
    <Layout>
      <div className="prose p-5 mx-auto mt-28 mb-10 lg:mt-36">
        <h1 className="text-5xl mb-3">{title}</h1>
        <p className="font-bold">{excerpt}</p>
        <div className="relative w-full h-max-content overflow-hidden">
          <img className="m-0" src={`/${socialImage}`} alt="image" />
        </div>

        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <div className="mt-10 pt-5 border-t">
          {tags.map((tag) => (
            <div
              key={tag}
              className="inline-flex rounded-full px-3 py-1 my-1 mr-2 bg-primary text-white text-xs font-bold uppercase"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Article;
