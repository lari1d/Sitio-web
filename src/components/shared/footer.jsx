import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import PropTypes from 'prop-types';

// Componentes personalizados
import ExternalLink from './external-link';

/* Styled Components */
import Section from '../../styles/emotion/section';
import Align from '../../styles/emotion/align';
import HorizontalList from '../../styles/emotion/horizontal-list';

/* Styles */
import '../../styles/components/typography.scss';

const Footer = ({ socialMedia, siteTitle }) => (
  <Section
    color="white"
    bottom="10px"
  >
    <Grid>
      <GridCell span={12}>
        <Align
          text="center"
        >
          <Typography
            use="headline5"
          >
            {siteTitle}
          </Typography>
          <HorizontalList
            top="2rem"
            bottom="2rem"
          >
            {socialMedia.map(socialMediaItem => (
              <Typography
                use="OVERLINE"
                key={socialMediaItem.id}
              >
                <ExternalLink
                  hoverColor="#fff"
                  to={socialMediaItem.url}
                >
                  {socialMediaItem.name}
                </ExternalLink>
              </Typography>
            ))}
          </HorizontalList>
        </Align>
        <Align
          text="left"
        >
          <Typography
            use="caption"
          >
            &copy;2020 - Todos los derechos reservados
          </Typography>
        </Align>
      </GridCell>
    </Grid>
  </Section>
);

Footer.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string,
  })),
  siteTitle: PropTypes.string,
};

export default Footer;
