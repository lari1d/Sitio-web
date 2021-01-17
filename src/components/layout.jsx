/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

/* Componentes compartidos */
import Header from './shared/header';
import Footer from './shared/footer';

/* Estilos */
import '../styles/components/ripple.scss';
import '../styles/components/layout_grid.scss';
import '../styles/components/chips.scss';
import '../styles/components/fab.scss';
import '../styles/components/button.scss';
import '../styles/components/icon-button.scss';
import '../styles/components/form.scss';
import '../styles/components/dialog.scss';
import '@rmwc/icon/icon.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulBusinessData(node_locale: {
        eq: "en-US"
      }) {
        node_locale
        name
        socialMedia {
          id
          name
          url
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`body { margin: 0; }`}
      />
      <Header siteTitle={data.contentfulBusinessData.name} />
      {children}
      <Footer
        siteTitle={data.contentfulBusinessData.name}
        socialMedia={data.contentfulBusinessData.socialMedia}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
