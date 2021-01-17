import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Helmet from 'react-helmet';

/* Estilos */
import { Avatar } from '@rmwc/avatar';
import { GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
} from '@rmwc/card';

/* Custom Components */
import SocialShareButton from '../shared/social-share-button';
import useSiteMetadata from '../hooks/use-site-metadata';

/* Styled Components */
import Space from '../../styles/emotion/space';

/* Styles */
import '../../styles/components/card.scss';
import '@rmwc/avatar/avatar.css';

const Article  = ({
  columns,
  title,
  author,
  image,
  slug,
  columnsPhone,
  last,
}) => (
  <GridCell
    span={columns}
    desktop={columns}
    phone={columnsPhone}
  >
    <Card
      outlined={!last}
    >
      <CardPrimaryAction>
        {image && (
          <CardMedia
            sixteenByNine
            onClick={() => navigate(`/${slug}`)}
            style={{
              backgroundImage: `url(https:${image.fluid.src})`,
            }}
          />
        )}
        <Space
          padding="0 1rem 0 1rem"
        >
          <Typography
            onClick={() => navigate(`/${slug}`)}
            use="headline6"
            tag="h2"
          >
            {title}
          </Typography>
        </Space>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardActionButton
            onClick={() => navigate(`/authors/@${author.username}`)}
            icon={(
              <Avatar
                src={`https://${author.profileImage.avatar.src}`}
              />
            )}
          >
            {author.name}
         </CardActionButton>
        </CardActionButtons>
        <CardActionIcons> 
          <SocialShareButton
            url={`${useSiteMetadata.siteUrl}${slug}`}
          />
        </CardActionIcons>
      </CardActions>
    </Card>
  </GridCell>

)
;

Article.propTypes = {
  last: PropTypes.bool,
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

Article.defaultProps = {
  last: false,
};

export default Article;
