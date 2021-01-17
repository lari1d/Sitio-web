import styled from '@emotion/styled';

const AuthorProfileAvatar = styled('img')(({ size }) => ({
  maxWidth: size,
  width: size,
  maxHeight: size,
  Height: size,
  borderRadius: '50%',
  margin: 'auto',
  boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
}));

export default AuthorProfileAvatar;
