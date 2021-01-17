import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Typography } from '@rmwc/typography';
import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { Fab } from '@rmwc/fab';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Color from 'color';
import colors from '../styles/colors';

/* Layout y componentes personalizados */
import Layout from '../components/layout';
import Newsletter from '../components/shared/newsletter';
import Tags from '../components/article/tags';
import Article from '../components/article/article';

/* Styled Components */
import Align from '../styles/emotion/align';
import Separator from '../styles/emotion/separator';

/* Styles */
import '../styles/components/markdown-text.scss';

const ArticleTemplate = ({
  data: {
    contentfulArticle,
    allContentfulArticle,
    lastArticle,
  },
  pageContext,
}) => (
  <Layout>
    <Grid>
      <GridCell
        span={2}
        phone={4}
      />
      <GridCell
        span={8}
        phone={4}
        className="alignCenter"
      >
        <Typography
          use="headline3"
          tag="h3"
        >
          {contentfulArticle.title}
        </Typography>
        <Typography
          use="subtitle"
          tag="div"
          onClick={() => navigate(`/authors/@${contentfulArticle.author.username}`)}
          style={{
            marginTop: -35,
          }}
        >
          <b>{contentfulArticle.author.name}</b>
          <small>{` - ${contentfulArticle.author.rol}`}</small>
        </Typography>
        <Tags
          tagItems={contentfulArticle.tags}
          style={{
            marginTop: -5,
          }}
        />

        <Typography
          use="body1"
          tag="div"
        >
          <ReactMarkdown
            className="mdc-markdown-text"
            source={contentfulArticle.content.content}
          />
        </Typography>

        <Separator
          color={Color(colors.fortnightlyPurple).lighten(0.8).hex()}
        />

        {lastArticle && (
          <GridInner>
            <GridCell span={12}>
              <Align
                text="center"
              >
                <Typography
                  use="headline4"
                  tag="h4"
                >
                  Te interesó mi contenido, lee mi último artículo
                </Typography>
              </Align>

              <Article
                last
                title={lastArticle.title}
                author={lastArticle.author}
                slug={lastArticle.slug}
                columns={4}
                columnsPhone={4}
              />
            </GridCell>
            <br />
          </GridInner>
        )}

        <GridInner>
          <GridCell
            desktop={6}
            phone={2}
            tablet={4}
            align="left"
          >
            <Align
              text="left"
            >
              {pageContext.previous !== '' && (
                <Fab
                  icon="arrow_left"
                  label="Anterior"
                  onClick={() => navigate(`/${pageContext.previous}`)}
                  ripple
                />
              )}
            </Align>
          </GridCell>
          <GridCell
            desktop={6}
            phone={2}
            tablet={4}
            align="right"
          >
            <Align
              text="right"
            >
              {pageContext.next !== '' && (
                <Fab
                  trailingIcon="arrow_right"
                  label="Siguiente"
                  onClick={() => navigate(`/${pageContext.next}`)}
                  ripple
                />
              )}
            </Align>
          </GridCell>
        </GridInner>
        <GridInner>
          <Newsletter />

          <GridCell
            span={12}
          >
            <Align
              text="center"
            >
              <Typography
                use="headline4"
                tag="h4"
              >
                Artículos relacionados
              </Typography>
            </Align>
          </GridCell>
          {allContentfulArticle.nodes.map(article => (
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
        </GridInner>
      </GridCell>
    </Grid>
  </Layout>
);

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulArticle: PropTypes.object,
    allContentfulArticle: PropTypes.array,
    lastArticle: PropTypes.object,
  }),
  pageContext: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }),
};

export const query = graphql`
  query articleQuery(
    $slug: String!,
    $tags: [String],
    $username: String!,
  ) {
    lastArticle: contentfulArticle(author: {
      username: {
        eq: $username
      }
    }, slug: {
      ne: $slug
    }) {
      ...ArticleFragment
    }

    allContentfulArticle(
      limit: 3,
      sort: { fields: updatedAt },
      filter: {
        tags:
        {
          elemMatch:
          {
            name:
            {
              in: $tags
            }
          }
        },
        slug: {
          ne: $slug
        }
      }
    ) {
      nodes {
        ...ArticleFragment
      }
    }

    contentfulArticle(slug: {
      eq: $slug
    }) {
      author {
        name
        username
        rol
        id
      }
      tags {
        name
        id
      }
      title
      content {
        content
      }
    }
  }
`;

export default ArticleTemplate;
