import styled from '@emotion/styled';
import colors from '../colors';

const Separator = styled('hr')(({ color, margin }) => ({
  border: `1px solid ${color || colors.fortnightlyPurple}`,
  margin,
}));

export default Separator;
