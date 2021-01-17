import { graphql } from 'gatsby';

export const articleFragment = graphql`
  fragment ArticleFragment on ContentfulArticle {
    slug
    defaultImage {
      file {
        fileName
      }
      fluid(maxWidth: 3000) {
        src
      }
    }
    id
    title
    createdAt
    author {
      id
      name
      username
      rol
      profileImage {
        avatar: fluid(maxWidth: 50) {
          src
        }
        title
        file {
          url
          fileName
        }
      }
    }
  }
`;

export const authorFragment = graphql`
  fragment AuthorFragment on ContentfulAuthor {
    id
    name
    username
    rol
    bio
    profileImage {
      avatar: fluid(maxWidth: 30) {
        src
      }
      fluid(maxWidth: 200) {
        src
      }
    }
  }
`;
export const revistaFragment = graphql`
fragment RevistaFragment on ContentfulRevista {
  title
  id
  slug
  defaultimage {
    file {
      fileName
    }
    fluid(maxWidth: 3000) {
      src
    }
  }
}
`;