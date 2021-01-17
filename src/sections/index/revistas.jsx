import React from 'react';
import { Grid } from '@rmwc/grid';
import { StaticQuery, graphql } from 'gatsby';

/* Componentes personalizados */
import Revistas from '../../components/revista/revistas';

const RevistaQuery = graphql`
  {
    allContentfulRevista(limit: 6) {
      edges {
        node {
          ...RevistaFragment
        }
      }
    }
  }
`;

const IndexRevistasSection = () => (
  <StaticQuery
    query={RevistaQuery}
    render={data => (
      <Grid>
        <Revistas items={data.allContentfulRevista.edges} />
      </Grid>
    )}
  />
);

export default IndexRevistasSection;
