import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Componentes
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

// Componentes personalizados
import Layout from '../components/layout';
import RevistasForPage from '../components/revista/revistas-for-page';

// componentes de estilo
import Align from '../styles/emotion/align';

const Query = graphql`
  {
    allContentfulRevista{
      nodes{
        ...RevistaFragment
      }
    }
  }
`;
const RevistasPage = () => (
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
              ¡Disfruta de nuestra colección de artículos!
              </Typography>
            </Align>
          </GridCell>
          <RevistasForPage items={data.allContentfulRevista.nodes} />
        </Grid>
      </Layout>
    )}
  />

);

RevistasPage.propTypes = {};

export default RevistasPage;
