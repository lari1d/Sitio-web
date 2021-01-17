import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

/* Estilos */
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import {
  Card,
  CardMedia,
} from '@rmwc/card';

/* Styled Components */
import Align from '../../styles/emotion/align';

/* Styles */
import '../../styles/components/card.scss';


const MainRevista = ({
  columns,
  title,
  image,
  slug,
  columnsPhone,
}) => (
  <GridCell
    span={columns}
    desktop={columns}
    phone={columnsPhone}
  >
    <Card outlined>
      <Grid>
        <GridCell
          span={4}
        >
          <Align text="left">
            <Typography
              onClick={() => navigate(`/${slug}`)}
              use="headline2"
              tag="h5"
              style={{ marginTop: '-0.05rem' }}
            >
              {title}
            </Typography>
            <Typography
              use="subtitle1"
              tag="h4"
              style={{ marginTop: '-4rem' }}
            
            >
            "Disfruta de nuestra primera edición Noviembre-Diciembre 2020"
            </Typography>
          </Align>
        </GridCell>
        <GridCell span={8} phone={4}>
          <CardMedia
            onClick={() => navigate(`/${slug}`)}
            style={{
              backgroundImage: `url(https:${image.fluid.src})`,
              height: '140vh',
            }}
          />
        </GridCell>
      </Grid>
    </Card>
  </GridCell>
);

MainRevista.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    file: PropTypes.object,
    fluid: PropTypes.object,
  }),
 
  slug: PropTypes.string,
  columns: PropTypes.number,
  columnsPhone: PropTypes.number,
};

export default MainRevista;

