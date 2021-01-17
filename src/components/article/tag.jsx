import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Chip } from '@rmwc/chip';

const Tag = ({ name }) => (
  <Chip
    onClick={() => navigate(`/tag/${name}`)}
    label={`#${name}`}
  />
);

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
