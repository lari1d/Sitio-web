import React from 'react';
// import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

// componentes
import { Button } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import {
  Grid,
  GridCell,
} from '@rmwc/grid';

// Componentes personalizados
import IndexProductsSection from './products';
import Align from '../../styles/emotion/align';

const IndexContainerProductsSection = () => (
  <Grid span={12}>
    <GridCell span={12}>
      <Typography
        use="headline4"
        tag="h4"
      >
        <Align text="center">
          Los más buscados
        </Align>
      </Typography>
    </GridCell>
    <GridCell span={12}>
      <IndexProductsSection />
      <Align
        text="center"
      >
        <Button
          label="Todos los productos"
          raised
          onClick={() => navigate('/products/')}
        />
      </Align>
    </GridCell>
  </Grid>
);

// IndexContainerProductsSection.propTypes = {};

export default IndexContainerProductsSection;
