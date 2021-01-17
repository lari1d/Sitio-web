import styled from '@emotion/styled';

const Flex = styled.div(({ height }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height,
  flexWrap: 'nowrap',
  minHeight: height,
  alignContent: 'center',

  '.flex-item': {
    margin: 'auto',
    height,
    minHeight: height,
  },
}));

export default Flex;
