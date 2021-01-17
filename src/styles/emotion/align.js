import styled from '@emotion/styled';

const Align = styled.div(({ text }) => ({
  textAlign: text || 'left',
}));

export default Align;
