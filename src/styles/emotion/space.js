import styled from '@emotion/styled';

const Space = styled.div(({ margin, padding }) => ({
  margin: margin || '0',
  padding: padding || '1rem',
}));

export default Space;
