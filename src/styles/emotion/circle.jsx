import styled from '@emotion/styled';

const Circle = styled.div(({ size, color, textColor }) => ({
  height: size || 0,
  width: size || 0,
  borderRadius: '50%',
  verticalAlign: 'center',
  fontSize: Math.floor(size / 1.3),
  margin: 'auto',
  marginBottom: 20,
  border: `2px solid ${color || 'white'}`,
  backgroundColor: color,
  color: textColor,
}));

export default Circle;
