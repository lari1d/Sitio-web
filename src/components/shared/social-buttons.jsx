import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const SocialButtons = ({ url }) => (
  <div className="SocialMediaShareButton--container">
    <FacebookShareButton
      url={url}
    >
      <FacebookIcon
        size={32}
        round
      />
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
    >
      <TwitterIcon
        size={32}
        round
      />
    </TwitterShareButton>
    <WhatsappShareButton
      url={url}
    >
      <WhatsappIcon
        size={32}
        round
      />
    </WhatsappShareButton>
  </div>
);

SocialButtons.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SocialButtons;
