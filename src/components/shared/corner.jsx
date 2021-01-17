import React from 'react';
import PropTypes from 'prop-types';

/* Styled-components */
import { CornerSquare } from '../../styles/emotion/shapes';

/* Estilos y colores */
import colors from '../../styles/colors';

import { selectColorByType } from '../../utilities';

const Corner = ({ type }) => (
  <CornerSquare
    textColor={colors.fortnightlyWhite}
    color={`${selectColorByType(type)}`}
    size={15}
  >
    {type === 'NEW' ? 'N' : 'D'}
  </CornerSquare>
);

Corner.propTypes = {
  type: PropTypes.string,
};

export default Corner;
