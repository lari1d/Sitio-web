import React from 'react';

/* Componentes compartidos */
import Layout from '../components/layout';
import SEO from '../components/shared/seo';

import IndexNewsSection from '../sections/index/news';
import IndexNewsletterSection from '../sections/index/newsletter';
import IndexInfoSection from '../sections/index/info';



// Slider

import LandingPage from '../components/revista/landing-page';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
    <IndexInfoSection />
    <IndexNewsSection />
 
    <IndexNewsletterSection />
  </Layout>
);
export default IndexPage;
