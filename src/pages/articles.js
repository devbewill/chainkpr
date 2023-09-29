import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  try {
    const files = fs.readdirSync("public/articles");

    const articles = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/articles/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    return {
      props: { articles },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}

function Articles({ articles }) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-40 px-6">
        <h2 className="text-sm font-semibold text-primary uppercase">
          Articles
        </h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Articles list
        </p>
        <p className="mt-4 text-gray-600 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:p-0 mt-10 mb-32">
          {articles.map(({ slug, frontmatter }) => (
            // <article
            //   key={slug}
            //   className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border-"
            // >
            //   <img
            //     alt={frontmatter.title}
            //     src={`/${frontmatter.socialImage}`}
            //     className="h-56 w-full object-contain px-3"
            //   />

            //   <div className="bg-white p-6">
            //     <time
            //       datetime="2022-10-10"
            //       className="block text-xs text-gray-500"
            //     >
            //       {frontmatter.date}
            //     </time>

            //     <a href={`/article/${slug}`} legacyBehaviour>
            //       <h3 className="mt-0.5 text-xl font-bold text-gray-900">
            //         {frontmatter.title}
            //       </h3>
            //     </a>

            //     <p className="mt-2 text-sm/relaxed text-gray-600">
            //       {frontmatter.excerpt}
            //     </p>
            //   </div>
            // </article>
            <article className="flex bg-white transition hover:shadow-xl border-black border-2 rounded-xl">
              <div className="rotate-180 p-3 [writing-mode:_vertical-lr]">
                <time className="flex items-center justify-between gap-4 text-sm font-bold uppercase text-gray-900">
                  <span>{frontmatter.date}</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                  className="aspect-square h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-extrabold text-2xl text-gray-900">
                      {frontmatter.title}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-md/relaxed text-gray-700">
                    {frontmatter.excerpt}
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href={`/article/${slug}`}
                    legacyBehaviour
                    className="block bg-black px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary"
                  >
                    Read article
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Articles;
