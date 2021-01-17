/* import { Link } from 'gatsby'; */
import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar';

/* Estilos */
import '../../styles/components/top-app-bar.scss';

const Header = ({ siteTitle }) => (
  <header>
      <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarNavigationIcon icon="menu" />
          <TopAppBarTitle
            onClick={() => navigate('/')}
          > 
            {siteTitle}
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <TopAppBarActionItem icon="search" />
          <TopAppBarActionItem icon="book" className="snipcart-checkout shopping-cart" />
        </TopAppBarSection>
      </TopAppBarRow>
      </TopAppBar>
    <TopAppBarFixedAdjust />
  </header>



);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
