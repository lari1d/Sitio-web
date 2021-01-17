import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

// componentes personalizados
import RelatedRevistas from '../../components/revista/related-revistas';

// Componentes de estilo
import Align from '../../styles/emotion/align';

const RevistasRelatedSection = ({ data }) => (
  <Grid>
    <GridCell
      span={12}
      phone={4}
    >
      <Typography
        use="headline4"
        tag="h4"
      >
        <Align text="center">
          Otros volumenes
        </Align>
      </Typography>
    </GridCell>
    <RelatedRevistas data={data} />
  </Grid>
);

RevistasRelatedSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default RevistasRelatedSection;
