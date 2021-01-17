import React from 'react';
/* import PropTypes from 'prop-types'; */
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

/* Styled-components */
import Section from '../../styles/emotion/section';
import Align from '../../styles/emotion/align';

/* Componentes */
import StepCard from '../../components/step-card';

/* Colores y estilos */
import colors from '../../styles/colors';

const IndexInfoSection = () => (
  <Section
    top={10}
    bottom={10}
    color={colors.fortnightlyBlack}
    textColor={colors.fortnightlyWhite}
  >
    <Grid>
      <GridCell
        span={12}
      >
        <Align
          text="center"
        >
          <Typography
            use="headline5"
          >
            Enfocándonos en un Oaxaca Real 
          </Typography>
        </Align>
      </GridCell>

      <StepCard
        phone={4}
        span={3}
        desktop={3}
        tablet={4}
        label="Jóvenes Oaxaqueños"
        icon="peoples"
      />

      <StepCard
        phone={4}
        span={3}
        desktop={3}
        tablet={4}
        label="Redes sociales"
        icon="facebook"
      />

      <StepCard
        phone={4}
        span={3}
        desktop={3}
        tablet={4}
        label="Revista"
        icon="tablet"
      />

      <StepCard
        phone={4}
        span={3}
        desktop={3}
        tablet={4}
        label="Artículos"
        icon="favorite"
      />
    </Grid>
  </Section>
);

export default IndexInfoSection;
