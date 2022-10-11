import { getFileBySlug, getList } from 'lib/markdownParser';

export const getAllArticles = () => {
  const articles = getList('_articles');

  return articles.sort((a, b) => b.createdAt - a.createdAt);
};

export const getArticle = async (slug) => {
  const article = await getFileBySlug('_articles', slug);

  return article;
};
