import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

/* Material Components */
import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { Fab } from '@rmwc/fab';

/* Styled Components */
import Align from '../styles/emotion/align';

const NavigationArrows = ({ previous, next, path }) => (
  <Grid>
    <GridCell span={2} />
    <GridCell
      span={8}
    >
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
            {previous !== '' && (
              <Fab
                icon="arrow_left"
                label="Anterior"
                onClick={() => navigate(`${path}/${previous}`)}
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
            {next !== '' && (
              <Fab
                trailingIcon="arrow_right"
                label="Siguiente"
                onClick={() => navigate(`${path}/${next}`)}
                ripple
              />
            )}
          </Align>
        </GridCell>
      </GridInner>
    </GridCell>
  </Grid>
);

NavigationArrows.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
  path: PropTypes.string,
};

export default NavigationArrows;
