import React from 'react';
import PropTypes from 'prop-types';
import { GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';

/* Styled Components */
import Align from '../styles/emotion/align';
import Circle from '../styles/emotion/circle';

/* Colors */
import colors from '../styles/colors';

const StepCard = ({
  desktop,
  icon,
  label,
  phone,
  span,
  tablet,
}) => (
  <GridCell
    span={span}
    desktop={desktop}
    phone={phone}
    tablet={tablet}
  >
    <Align
      text="center"
    >
      <Circle
        color={colors.fortnightlyPurple}
        textColor={colors.fortnightlyWhite}
        size={60}
      >
        <Icon
          icon={icon}
        />
      </Circle>
      <Typography
        use="body1"
        tag="div"
      >
        {label}
      </Typography>
    </Align>
  </GridCell>
);

StepCard.propTypes = {
  span: PropTypes.number,
  phone: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default StepCard;
