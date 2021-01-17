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
import '@rmwc/avatar/avatar.css';


const MainArticle = ({
  columns,
  title,
  author,
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
              {author.name}
            </Typography>
            <Typography
              onClick={() => navigate(`/${slug}`)}
              use="subtitle1"
              tag="p"
            >
            "Tonal de Alebrije en su primera edición"
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

MainArticle.propTypes = {
  title: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
    profileImage: PropTypes.object,
  }),
  image: PropTypes.shape({
    file: PropTypes.object,
    fluid: PropTypes.object,
  }),
  slug: PropTypes.string,
  columns: PropTypes.number,
  columnsPhone: PropTypes.number,
};

export default MainArticle;
