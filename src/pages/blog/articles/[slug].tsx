import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Layout from "../../../components/Layout";
import { Article } from "../../../components/types";
import { fetchAPI } from "../../../lib/strapiApi";
import { getStrapiMedia } from "../../../lib/strapiMedia";

const Article = ({ article, source }: { article: Article; source: any }) => {
  const { author, title, image, createdAt } = article.attributes;
  const imageUrl = getStrapiMedia(image);
  const authorUrl = getStrapiMedia(author.data.attributes.picture);
  console.log(source);
  return (
    <Layout>
      <div className="flex flex-col items-center pt-4">
        <div className="prose dark:prose-invert prose-xl">
          <h2>{title}</h2>
          <Image
            className="rounded-lg overflow-clip"
            src={imageUrl}
            width={image.data.attributes.formats.medium.width}
            height={image.data.attributes.formats.medium.height}
            alt={image.data.attributes.formats.medium.caption}
          />
          <MDXRemote {...source} />
          <Image
            src={authorUrl}
            alt={
              author.data.attributes.picture.data.attributes.formats.thumbnail
                .caption
            }
            width={
              author.data.attributes.picture.data.attributes.formats.thumbnail
                .width
            }
            height={
              author.data.attributes.picture.data.attributes.formats.thumbnail
                .height
            }
          />
          <p>{new Date(createdAt).toLocaleString()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params?.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  const source = await articlesRes.data[0].attributes.content;
  const mdxSource = await serialize(source);

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
      source: mdxSource,
    },
    revalidate: 1,
  };
};
