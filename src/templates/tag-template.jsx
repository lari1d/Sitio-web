import React from 'react';
import { graphql } from 'gatsby';
/* import { Typography } from '@rmwc/typography'; */
import { Grid, GridCell } from '@rmwc/grid';
import PropTypes from 'prop-types';

/* Layout y componentes personalizados */
import Layout from '../components/layout';
import Articles from '../components/article/articles';
import Tag from '../components/article/tag';


const TagTemplate = ({
  data: { contentfulTag },
}) => (
  <Layout>
    <Grid>
      <GridCell
        span={12}
      >
        <Tag name={contentfulTag.name} />
      </GridCell>
    </Grid>
    <Grid>
      <Articles
        items={contentfulTag.article}
      />
    </Grid>
  </Layout>
);

TagTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulTag: PropTypes.object,
  }),
};

export const query = graphql`
  query tagQuery($name: String!) {
    contentfulTag(name: {
      eq: $name
    }) {
      id
      name
      article {
        id
        title
        author {
          id
          name
          username
          rol
          profileImage {
            title
            avatar: fluid(maxWidth: 30) {
              src
            }
            file {
              url
              fileName
            }
          }
        }
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

export default TagTemplate;
