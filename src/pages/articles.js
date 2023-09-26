import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

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
    <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 md:p-0 mt-8">
      {articles.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/article/${slug}`} legacyBehaviour>
            <Image
              width={650}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />

            <h1 className="p-4">{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
