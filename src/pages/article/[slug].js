import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

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
  try {
    const fileName = fs.readFileSync(`public/articles/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}

function Article({ frontmatter, content }) {
  // const tags = { frontmatter };
  return (
    <div className="prose p-5 mx-auto mt-8">
      {/* {tags.map((tag) => (
        <div>{tag}</div>
      ))} */}
      <h1>{frontmatter.title}</h1>
      <div className="relative w-full h-max-content overflow-hidden">
        <img src={`/${frontmatter.socialImage}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}

export default Article;
