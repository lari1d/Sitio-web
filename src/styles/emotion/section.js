import styled from '@emotion/styled';

const Section = styled.div(props => ({
  backgroundColor: props.color || 'transparent',
  paddingTop: props.top || 50,
  paddingBottom: props.bottom || 50,
  color: props.textColor || 'black',
}));

export default Section;
