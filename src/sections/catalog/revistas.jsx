import React from 'react';
import { Grid } from '@rmwc/grid';
import { StaticQuery, graphql } from 'gatsby';

/* Componentes personalizados */
import Revistas  from "../../components/revista/revistas";

const revistaQuery = graphql`
  {
    allContentfulRevista {
      edges {
        node {
          ...RevistaFragment
        }
      }
    }
  }
`;

const CatalogRevistasSection = () => (
  <StaticQuery
    query={revistaQuery}
    render={data => (
      <Grid>
        <Revistas items={data.allContentfulRevista.edges} />
      </Grid>
    )}
  />
);

export default CatalogRevistasSection;
