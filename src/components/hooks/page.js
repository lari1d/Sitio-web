import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

const Page = ({ location }) => {
  const { siteURL } = useSiteMetadata();
  return (
    <Helmet>
      <link rel="canonical" href={`${siteURL}${location.pathname}`} />
    </Helmet>
  );
};

export default Page;