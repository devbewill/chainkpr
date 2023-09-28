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
  const { tags, title, socialImage } = frontmatter;

  return (
    <div className="prose p-5 mx-auto mt-8">
      <h1>{title}</h1>

      <div className="relative w-full h-max-content overflow-hidden">
        <img src={`/${socialImage}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      {tags.map((tag) => (
        <div className="inline-flex rounded-md px-2 mr-2 bg-black text-white">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Article;
