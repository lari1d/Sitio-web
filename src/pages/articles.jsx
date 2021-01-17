import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Componentes
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

// Componentes personalizados
import Layout from '../components/layout';
import ArticlesForPage from '../components/article/articles-for-page';

// componentes de estilo
import Align from '../styles/emotion/align';

const Query = graphql`
  {
    allContentfulArticle{
      nodes{
        ...ArticleFragment
      }
    }
  }
`;
const ArticlesPage = () => (

  <StaticQuery
    query={Query}
    render={data => (
      <Layout>
        <Grid span={12}>
          <GridCell span={12}>
            <Align text="center">
              <Typography
                use="headline4"
                tag="h3"
              >
              ¡Disfruta de nuestra primera edición Noviembre-Diciembre 2020!
              </Typography>
            </Align>
          </GridCell>
          <ArticlesForPage items={data.allContentfulArticle.nodes} />
        </Grid>
      </Layout>
    )}
  />

);

ArticlesPage.propTypes = {};

export default ArticlesPage;
