import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import Revista from './revista';
import MainRevista from './main-revista';

const RevistasForPage = ({ items }) => (
  <>
    {items.map((revista, idx) => {
      if (idx === 0) {
        return (
          <MainRevista
            key={revista.id}
            title={revista.title}
            author={revista.author}
            image={revista.defaultimage}
           
            slug={revista.slug}
            columns={12}
            columnsPhone={4}
          />
        );
      }
      return (
        <Revista
          key={revista.id}
          title={revista.title}
          author={revista.author}
          image={revista.defaultimage}
         
          slug={revista.slug}
          columns={4}
          columnsPhone={4}
        />
      );
    })}
  </>
);

RevistasForPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default RevistasForPage;

