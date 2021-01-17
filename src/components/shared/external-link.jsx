import React, { Children } from 'react';
import PropTypes from 'prop-types';

// Styled Components
import StyledLink from '../../styles/emotion/styled-link';

const ExternalLink = ({ to, children, color }) => (
  <StyledLink
    color={color}
    href={to}
    target="_blank"
    rel="noopener noreference"
  >
    {children}
  </StyledLink>
);

ExternalLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  color: PropTypes.string,
};

export default ExternalLink;