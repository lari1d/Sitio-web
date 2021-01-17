import React from 'react';
import { GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
/* import PropTypes from 'prop-types'; */

/* Styled-components (emotion) */
import Align from '../../styles/emotion/align';

const Newsletter = () => (
  <GridCell
    span={12}
  >
    <Align
      text="center"
    >
      <Typography
        use="headline4"
        tag="h4"
      >
        Suscríbete a nuestro boletín de noticias
      </Typography>
      <TextField
        label="Escribe tu correo electrónico..."
      />
      <br />
      <br />
      <Button>
        Suscribirse
      </Button>
    </Align>
  </GridCell>
);

/* Newsletter.propTypes = { }; */

export default Newsletter;
