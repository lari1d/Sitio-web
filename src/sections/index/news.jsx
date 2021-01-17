import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { StaticQuery, graphql, navigate } from 'gatsby';

// Components
import { Button } from '@rmwc/button';

/* Componentes personalizados */
import Articles from '../../components/article/articles';

/* Styled-components (emotion) */
import Align from '../../styles/emotion/align';


const Query = graphql`
  {
    allContentfulTag {
      nodes {
        id
        name
      }
    }
    allContentfulArticle(limit:3) {
      nodes {
        ...ArticleFragment
      }
    }
  }
`;

const IndexNewsSection = () => (
  <StaticQuery
    query={Query}
    render={data => (
      <Grid>
        <GridCell span={12}>
          <Typography
            use="headline4"
            tag="h4"
          >
            <Align text="center">
              Lee alguno de nuestros artículos
            </Align>
          </Typography>
        </GridCell>
        <Articles items={data.allContentfulArticle.nodes} />
        <GridCell span={4} />
        <GridCell span={4} phone={4} style={{ padding: '0 10% 0 10%' }}>
          <Button
            label="Ve todo nuestro contenido"
            onClick={() => navigate('/articles/')}
            raised
          />
        </GridCell>
      </Grid>
    )}
  />
);

export default IndexNewsSection;
