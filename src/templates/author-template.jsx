import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@rmwc/typography';
import { Grid, GridCell } from '@rmwc/grid';
import PropTypes from 'prop-types';

/* Layout y componentes personalizados */
import Layout from '../components/layout';
import Article from '../components/article/article';

/* Styled Componentes (emotion) */
import AuthorProfileAvatar from '../styles/emotion/author-profile-avatar';
import Align from '../styles/emotion/align';
/* Estilos */
import '../styles/components/img.scss';

const ArticleTemplate = ({
  data: { contentfulAuthor },
}) => (
  <Layout>
    <Grid>
      <GridCell
        span={12}
      >
        <Align
          text="center"
        >
          <AuthorProfileAvatar
            alt={contentfulAuthor.name}
            src={`https://${contentfulAuthor.profileImage.fluid.src}`}
            size={150}
          />
          <Typography
            use="headline4"
            tag="h4"
          >
            {contentfulAuthor.name}
          </Typography>
          <Typography
            use="body2"
            tag="p"
          >
            {contentfulAuthor.bio}
            <br />

            <i>{contentfulAuthor.rol}</i>
          </Typography>
        </Align>
      </GridCell>
    </Grid>
    <Grid>
      {contentfulAuthor.article.map(article => (
        <Article
          key={article.id}
          title={article.title}
          author={contentfulAuthor}
          slug={article.slug}
          image={article.defaultImage}
          columns={3}
          columnsPhone={4}
        />
      ))}
    </Grid>
  </Layout>
);

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulAuthor: PropTypes.object,
  }),
};

export const query = graphql`
  query authorQuery($username: String!) {
    contentfulAuthor(username: {
      eq: $username
    }) {
      ...AuthorFragment
      article {
        id
        title
        slug
        defaultImage {
          file {
            fileName
          }
          fluid(maxWidth: 400) {
            src
          }
        }
      }
    }
  }
`;

export default ArticleTemplate;
