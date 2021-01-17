import styled from '@emotion/styled';

const CornerSquare = styled.div(({ size, textColor, color }) => ({
  fontSize: Math.floor(size / 1.2),
  width: size,
  height: size,
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  color: textColor,
  backgroundColor: color,
  position: 'relative',
  padding: '0.1rem',
}));

const Box = styled('span')(({ color, textColor }) => ({
  backgroundColor: color,
  fontSize: '.5rem',
  color: textColor,
  padding: '.2rem',
}));

export { CornerSquare, Box };
