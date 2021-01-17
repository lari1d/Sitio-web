import styled from '@emotion/styled';

const HorizontalList = styled.div(({ top, bottom }) => ({
  marginTop: top || 0,
  marginBottom: bottom || 0,

  '.mdc-typography--OVERLINE': {
    paddingLeft: '1rem',

    '&:first-of-type': {
      paddingLeft: 0,
    },
  },
}));

export default HorizontalList;
