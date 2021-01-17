import styled from '@emotion/styled';
import colors from '../colors';
import Color from 'color';

const StyledLink = styled('a')(props => ({
  color: props.color || colors.fortnightlyPurple,
  textDecoration: 'none',
  transition: 'color 0.3s ease',

  '&:hover': {
    color: Color(props.color).darken(0.2).hex(),
  },
}));

export default StyledLink;