import React from "react"
import { StaticQuery, graphql } from 'gatsby';

import { Grid, GridCell } from '@rmwc/grid';
import Layout from "../components/layout"
import SEO from "../components/shared/seo"
import { Typography } from '@rmwc/typography';
import Align from '../styles/emotion/align';
import RevistasForPage from '../components/revista/revistas-for-page'


const Query = graphql`
  {
    allContentfulRevista{
      nodes{
        ...RevistaFragment
      }
    }
  }
`;

const Ediciones = () => (
  <StaticQuery
    query={Query}
    render={data => (
  <Layout>
    <SEO title="Ediciones" />
    <Grid span={12}>
          <GridCell span={12}>
            <Align text="center">
              <Typography
                use="headline4"
                tag="h3"
                 > Descubre nuestra primera edición
    Noviembre-Diciembre 2020
  
              </Typography>
            </Align>
          </GridCell>
          <RevistasForPage items={data.allContentfulRevista.nodes} />
         
          </Grid>
  </Layout>
    )}
    />
); 

Ediciones.propTypes = {};

export default Ediciones
