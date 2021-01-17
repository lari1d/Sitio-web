import React from 'react';
import PropTypes from 'prop-types';

// Componentes personalizados
import Revistas from './revistas';

const RelatedRevistas = ({ data }) => (
  <Revistas items={data} />
);

RelatedRevistas.prototype = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default RelatedRevistas;