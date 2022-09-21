import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { Article } from "../../components/types";
import { fetchAPI } from "../../lib/strapiApi";
import { getStrapiMedia } from "../../lib/strapiMedia";

const Blog: React.FC<{ articles: Article[] }> = ({ articles }) => {
  console.log(articles);
  return (
    <Layout>
      <div className="text-4xl my-4 text-center">Articles</div>
      <div className="grid grid-cols-3 lg:grid-cols-4">
        {articles.map((article, i) => {
          const {
            title,
            description,
            category,
            image,
            slug,
            createdAt,
            updatedAt,
          } = article.attributes;

          const imageUrl = getStrapiMedia(image);
          const imageWidth = image.data.attributes.formats.small.width;
          const imageHeight = image.data.attributes.formats.small.height;
          const imageCaption = image.data.attributes.formats.small.caption;

          return (
            <Link href={`/blog/articles/${slug}`} key={article.id}>
              <div className="rounded-md cursor-pointer hover:-translate-y-1 transition-all m-2 p-3 bg-white bg-opacity-10 flex flex-col">
                <h2 className="text-xl mb-2 font-bold">{title}</h2>
                <Image
                  src={imageUrl}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageCaption}
                  className="rounded-md"
                />
                <p>{description}</p>
                <div className="flex-1" />
                <div className="italic justify-self-end">
                  {updatedAt
                    ? "Updated at: " + new Date(updatedAt).toLocaleDateString()
                    : "Created at: " + new Date(createdAt).toLocaleDateString()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesRes = await fetchAPI("/articles", {
    populate: [
      "image.formats.thumbnail",
      "category",
      "author.picture.formats.thumbnail",
    ],
  });
  const articles = articlesRes.data;

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
};
