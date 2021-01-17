/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const config = require('./gatsby-config');

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  setHeadComponents([
    <link rel="canonical" href={`${config.siteMetadata.siteURL}${pathname}`} />,
  ]);
};