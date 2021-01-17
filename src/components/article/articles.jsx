import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import Article from './article';

const Articles = ({ items }) => (
  <>
    {items.map(article => (
      <Article
        key={article.id}
        title={article.title}
        author={article.author}
        image={article.defaultImage}
        slug={article.slug}
        columns={4}
        columnsPhone={4}
      />
    ))}
  </>
);

Articles.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default Articles;
