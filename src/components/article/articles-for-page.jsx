import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import Article from './article';
import MainArticle from './main-article';

const ArticlesForPage = ({ items }) => (
  <>
    {items.map((article, idx) => {
      if (idx === 0) {
        return (
          <MainArticle
            key={article.id}
            title={article.title}
            author={article.author}
            image={article.defaultImage}
            slug={article.slug}
            columns={12}
            columnsPhone={4}
          />
        );
      }
      return (
        <Article
          key={article.id}
          title={article.title}
          author={article.author}
          image={article.defaultImage}
          slug={article.slug}
          columns={4}
          columnsPhone={4}
        />
      );
    })}
  </>
);

ArticlesForPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default ArticlesForPage;
