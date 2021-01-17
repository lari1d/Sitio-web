import React from 'react';
import PropTypes from 'prop-types';

// Componentes Personalizados
import Revista from './revista';

const Revistas = ({ items }) => (
  <>
    {items.map (revista => (
      <Revista
        key={revista.id}
        title={revista.title}
        image={revista.defaultimage}
        author={revista. author}
        columns={4}
        columnsPhone={4}
        slug={revista.slug}
      />
    ))}
  </>
);

Revistas.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default Revistas;