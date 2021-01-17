import React from 'react';
import PropTypes from 'prop-types';
import { GridCell } from '@rmwc/grid';
import { ChipSet } from '@rmwc/chip';

/* Componentes personalizados */
import Tag from './tag';

const Tags = ({ tagItems }) => (
  <GridCell span={12}>
    <ChipSet>
      {tagItems.map(item => (
        <Tag
          key={item.id}
          name={item.name}
        />
      ))}
    </ChipSet>
  </GridCell>
);

Tags.propTypes = {
  tagItems: PropTypes.arrayOf(PropTypes.object),
};

export default Tags;
