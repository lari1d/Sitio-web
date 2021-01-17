const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: '.env',
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const ArticleTemplate = path.resolve('src/templates/article-template.jsx');
  const AuthorTemplate = path.resolve('src/templates/author-template.jsx');
  const TagTemplate = path.resolve('src/templates/tag-template.jsx');
  const RevistaTemplate = path.resolve('src/templates/revista-template.jsx');

  return graphql(`
  {
    allContentfulTag {
      nodes {
        name
      }
    }

    allContentfulAuthor {
      nodes {
        username
      }
    }

    allContentfulArticle {
      edges {
        node {
          slug
          tags {
            name
          }
          author {
            username
          }
        }
        next {
          slug
        }
        previous {
          slug
        }
      }
    }
    allContentfulRevista {
      edges {
        node {
          slug 
          tag {
            name
          }
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`, { limit: 10 }).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allContentfulTag.nodes.forEach((tag) => {
      createPage({
        // Path for this page — required
        path: `/tag/${tag.name}`,
        component: TagTemplate,
        context: {
          name: tag.name,
        },
      });
    });

    result.data.allContentfulAuthor.nodes.forEach((author) => {
      createPage({
        // Path for this page — required
        path: `/authors/@${author.username}`,
        component: AuthorTemplate,
        context: {
          username: author.username,
        },
      });
    });

    result.data.allContentfulArticle.edges.forEach(({ node, next, previous }) => {
      createPage({
        // Path for this page — required
        path: node.slug,
        component: ArticleTemplate,
        context: {
          slug: node.slug,
          next: next !== null ? next.slug : '',
          previous: previous !== null ? previous.slug : '',
          tags: node.tags.map (tag => tag.name),
          username: node.author.username,
        },
      });
    });

    result.data.allContentfulRevista.edges.forEach(({ node, next, previous }) => {
      createPage({
        // Path for this page — required
        path:node.slug,
        component: RevistaTemplate,
        context: {
          slug: node.slug,
          next: next !== null ? next.slug : '',
          previous: previous !== null ? previous.slug : '',
          tag: node.tag.map (tag => tag.name),
        },
      });
    });
  });
};
