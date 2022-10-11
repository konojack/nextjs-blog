import { getFileBySlug, getList } from 'lib/markdownParser';
import Head from 'next/head';
import React from 'react';

export const getStaticPaths = async () => {
  const articles = getList('_articles');
  const arrayOfParams = articles.map((art) => ({ params: { slug: art.slug } }));

  return {
    paths: arrayOfParams,
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug('_articles', slug);

  return {
    props: {
      article
    }
  };
};

export default function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </>
  );
}
